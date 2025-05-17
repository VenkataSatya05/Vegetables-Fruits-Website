const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Cart = require("../models/cart");
const { isAuthenticated } = require("../middleware/auth");

// View user's orders
router.get("/my-orders", isAuthenticated, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate('items.product')
            .sort({ createdAt: -1 });
        res.render("pages/my-orders", { orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).send("Error loading orders");
    }
});

// View single order details
router.get("/my-orders/:id", isAuthenticated, async (req, res) => {
    try {
        const order = await Order.findOne({ 
            _id: req.params.id,
            user: req.user.id 
        }).populate('items.product');
        
        if (!order) {
            return res.status(404).send("Order not found");
        }
        
        res.render("pages/order-details", { order });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).send("Error loading order details");
    }
});

// Checkout page
router.get("/checkout", isAuthenticated, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
  res.render("pages/checkout", { cart: cart || { items: [] } });
});

// Place order
router.post("/checkout", isAuthenticated, async (req, res) => {
  try {
    const { name, address, city, postalCode, country, paymentMethod } = req.body;
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
    
    if (!cart || cart.items.length === 0) {
      return res.redirect("/cart");
    }

    const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    
    // Check if COD is selected and order is over ₹2000
    if (paymentMethod === 'cod' && total > 2000) {
      return res.status(400).send("Cash on Delivery is only available for orders under ₹2000");
    }
    
    // Generate a transaction ID based on payment method
    let transactionId;
    let paymentStatus;
    
    if (paymentMethod === 'cod') {
      transactionId = 'COD' + Date.now().toString().slice(-8);
      paymentStatus = 'Pending'; // COD payment is pending until delivery
    } else {
      // For card and UPI payments
      const prefix = paymentMethod === 'card' ? 'CARD' : 'UPI';
      transactionId = prefix + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
      paymentStatus = 'Completed'; // Online payments are completed immediately
    }
    
    const paidAt = paymentMethod === 'cod' ? null : new Date();

    // Create the order with payment information
    const order = new Order({
      user: req.user.id,
      items: cart.items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      total,
      shippingAddress: { name, address, city, postalCode, country },
      status: paymentMethod === 'cod' ? 'Pending' : 'Processing',
      payment: {
        status: paymentStatus,
        method: paymentMethod === 'card' ? 'Card' : paymentMethod === 'upi' ? 'UPI' : 'COD',
        transactionId,
        paidAt
      }
    });

    // Save the order and log it for debugging
    const savedOrder = await order.save();
    console.log('New order created:', {
      orderId: savedOrder._id,
      userId: savedOrder.user,
      total: savedOrder.total,
      status: savedOrder.status,
      payment: savedOrder.payment
    });

    // Clear the cart
    await Cart.findOneAndUpdate({ user: req.user.id }, { items: [] });
    
    // Redirect to orders page
    res.redirect("/orders/my-orders");
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).send("Error processing order");
  }
});

// Cancel order
router.post("/cancel/:id", isAuthenticated, async (req, res) => {
  try {
    // Find the order
    const order = await Order.findOne({ 
      _id: req.params.id,
      user: req.user.id 
    });
    
    if (!order) {
      return res.status(404).send("Order not found");
    }
    
    // Check if order is already cancelled or delivered
    if (order.status === 'Cancelled' || order.status === 'Delivered') {
      return res.status(400).send("Cannot cancel this order");
    }
    
    // Calculate time difference in minutes
    const orderTime = new Date(order.createdAt).getTime();
    const currentTime = new Date().getTime();
    const minutesPassed = Math.floor((currentTime - orderTime) / (1000 * 60));
    
    // Update order status to cancelled
    order.status = 'Cancelled';
    
    // Set payment status based on cancellation time
    if (minutesPassed <= 10) {
      // If cancelled within 10 minutes, mark for refund
      order.payment.status = 'Refunded';
      order.cancellation = {
        cancelledAt: new Date(),
        reason: 'Customer cancelled within 10-minute window',
        refundEligible: true
      };
      
      // Log the refund
      console.log('Order cancelled with refund:', {
        orderId: order._id,
        userId: order.user,
        total: order.total,
        minutesPassed,
        refundEligible: true
      });
    } else {
      // If cancelled after 10 minutes, no refund
      order.cancellation = {
        cancelledAt: new Date(),
        reason: 'Customer cancelled after 10-minute window',
        refundEligible: false
      };
      
      // Log the cancellation without refund
      console.log('Order cancelled without refund:', {
        orderId: order._id,
        userId: order.user,
        total: order.total,
        minutesPassed,
        refundEligible: false
      });
    }
    
    await order.save();
    
    // Redirect back to order details
    res.redirect(`/orders/my-orders/${order._id}`);
  } catch (error) {
    console.error('Error cancelling order:', error);
    res.status(500).send("Error cancelling order");
  }
});

module.exports = router;
