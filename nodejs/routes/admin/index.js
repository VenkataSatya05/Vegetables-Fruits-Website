const express = require('express');
const router = express.Router();
const { isAdmin } = require('../../middleware/auth');
const Product = require('../../models/product');
const User = require('../../models/user'); // Make sure this path is correct
const Order = require('../../models/order');
const mongoose = require('mongoose');
const path = require('path');

// Test route to check if admin routes are working
router.get('/test', isAdmin, (req, res) => {
  res.send('Admin routes are working!');
});

// Admin dashboard
router.get('/', isAdmin, async (req, res) => {
  try {
    // Get counts for dashboard
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();
    const userCount = await User.countDocuments();
    
    // Get recent orders
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('user', 'name email');
    
    // Calculate total revenue
    const orders = await Order.find({ status: { $ne: 'Cancelled' } });
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    
    res.render('admin/dashboard', { 
      title: 'Admin Dashboard',
      productCount,
      orderCount,
      userCount,
      recentOrders,
      totalRevenue,
      originalUrl: req.originalUrl
    });
  } catch (error) {
    console.error('Error loading admin dashboard:', error);
    res.status(500).send("Error loading admin dashboard");
  }
});

// Orders routes
router.get('/orders', isAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate('user', 'name email');
    
    // Filter out orders with invalid data
    const validOrders = orders.filter(order => order.user);
        
    // Debug log for each order's payment information
    orders.forEach(order => {
      console.log('Order Payment Details:', {
        orderId: order._id,
        payment: order.payment,
        hasPayment: !!order.payment,
        paymentStatus: order.payment ? order.payment.status : 'No payment info',
        paymentMethod: order.payment ? order.payment.method : 'No method',
        transactionId: order.payment ? order.payment.transactionId : 'No transaction ID'
      });
    });

    res.render('admin/orders', { 
      title: 'Orders Management',
      orders: validOrders,
      debug: {
        totalOrders: validOrders.length,
        hasPaymentInfo: validOrders.some(order => order.payment && order.payment.status)
      },
      originalUrl: req.originalUrl
    });
  } catch (error) {
    console.error('Error loading orders:', error);
    res.status(500).send("Error loading orders");
  }
});

// View single order details
router.get('/orders/:id', isAdmin, async (req, res) => {
  try {
    // Log the request for debugging
    console.log('Admin accessing order:', {
      orderId: req.params.id,
      path: req.path,
      method: req.method,
      user: req.user
    });

    // Validate order ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log('Invalid order ID format:', req.params.id);
      return res.status(400).send("Invalid order ID format");
    }

    // Find the order and populate all necessary fields
    const order = await Order.findById(req.params.id)
      .populate({
        path: 'user',
        select: 'name email'
      })
      .populate({
        path: 'items.product',
        select: 'name price image'
      });
    
    if (!order) {
      return res.status(404).send("Order not found");
    }
    
    // Ensure all required properties exist
    if (!order.subtotal) {
      order.subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    if (!order.shipping) {
      order.shipping = 0; // Default shipping cost
    }
    
    if (!order.payment) {
      order.payment = {
        method: 'Not specified',
        status: 'Unknown'
      };
    }

    // Render the order details template
    res.render('admin/order-details', { 
      title: 'Order Details',
      order,
      debug: {
        orderId: order._id,
        hasPayment: !!order.payment,
        paymentStatus: order.payment ? order.payment.status : 'No payment',
        itemsCount: order.items.length
      },
      originalUrl: req.originalUrl
    });
  } catch (error) {
    console.error('Error loading order:', error);
    res.status(500).send("Error loading order details");
  }
});

// Update order status
router.put('/orders/:id/status', isAdmin, async (req, res) => {
    try {
        const { status } = req.body;
        
        // Validate the status value
        const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid status value' 
            });
        }
        
        // Find and update the order
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        ).populate('user', 'name email');

        if (!order) {
            return res.status(404).json({ 
                success: false, 
                message: 'Order not found' 
            });
        }

        // Log the updated order for debugging
        console.log('Order status updated:', {
            id: order._id,
            status: order.status,
            payment: order.payment,
            user: order.user ? {
                id: order.user._id,
                name: order.user.name,
                email: order.user.email
            } : 'No user'
        });
        
        // Return success response
        res.json({ 
            success: true, 
            message: 'Order status updated successfully',
            order: {
                id: order._id,
                status: order.status
            }
        });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error while updating order status' 
        });
    }
});

// Users routes
router.get('/users', isAdmin, async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    
    // Debug user data
    users.forEach(user => {
      console.log('User in list:', {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isAdminType: typeof user.isAdmin
      });
    });
    
    // Ensure req.user is properly populated
    const currentUser = req.user || {};
    
    res.render('admin/users', { 
      title: 'Users Management',
      users,
      currentUser, // Pass the current user to the view
      originalUrl: req.originalUrl
    });
  } catch (error) {
    console.error('Error loading users:', error);
    res.status(500).send("Error loading users");
  }
});

// Add a route to toggle admin status
router.put('/users/:id/toggle-admin', isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin } = req.body;
    
    // Don't allow users to remove their own admin status
    if (req.user && req.user._id && id === req.user._id.toString() && !isAdmin) {
      return res.status(400).json({ error: "You cannot remove your own admin status" });
    }
    
    const user = await User.findByIdAndUpdate(id, { isAdmin }, { new: true });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json({ success: true, user });
  } catch (error) {
    console.error('Error toggling admin status:', error);
    res.status(500).json({ error: 'Error updating user role' });
  }
});

// View single user details
router.get('/users/:id', isAdmin, async (req, res) => {
  try {
    console.log('Accessing user details:', {
      userId: req.params.id,
      path: req.path,
      method: req.method
    });

    // Validate user ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log('Invalid user ID format:', req.params.id);
      return res.status(400).send("Invalid user ID format");
    }

    // Find the user by ID
    const user = await User.findById(req.params.id);
    console.log('User found:', user ? 'Yes' : 'No');
    
    if (!user) {
      return res.status(404).send("User not found");
    }
    
    // Get user's orders if needed
    const orders = await Order.find({ user: user._id }).sort({ createdAt: -1 });
    console.log('Orders found:', orders.length);
    
    // Render the user details template
    res.render('admin/user-details', { 
      title: 'User Details',
      user,
      orders,
      currentUser: req.user || {},
      originalUrl: req.originalUrl
    });
  } catch (error) {
    console.error('Error loading user details:', error);
    res.status(500).send("Error loading user details");
  }
});

// Products routes
router.get('/products', isAdmin, async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.render('admin/products', { 
      title: 'Products Management',
      products,
      originalUrl: req.originalUrl
    });
  } catch (error) {
    res.status(500).send("Error loading products");
  }
});

// Add new product form
router.get('/products/new', isAdmin, (req, res) => {
    const categories = [
        "Fresh Vegetables",
        "Fresh Fruits",
        "Leafy Greens",
        "Dry Fruits",
        "Spices",
        "Grains",
        "Oils & Sauces", 
        "Breads & Cheeses",
        "Dairy Products"
    ];
    
    console.log('Rendering new product form with admin layout');
    
    res.render('admin/product-form', { 
        product: null, 
        categories,
        error: null,
        title: 'Add New Product',
        originalUrl: req.originalUrl,
        layout: 'layouts/admin' // Explicitly set layout
    });
});

// Create new product
router.post('/products', isAdmin, async (req, res) => {
    try {
        console.log('Request body:', req.body);

        // Extract quantity fields and special tags
        const { quantityValue, quantityUnit, specialTag, ...otherFields } = req.body;
        
        // Handle discount fields
        let originalPrice = null;
        let discountPercentage = 0;
        
        if (otherFields.originalPrice && parseFloat(otherFields.originalPrice) > 0) {
            originalPrice = parseFloat(otherFields.originalPrice);
            
            // Calculate discount percentage if not provided
            if (!otherFields.discountPercentage || parseFloat(otherFields.discountPercentage) <= 0) {
                const price = parseFloat(otherFields.price);
                if (price > 0 && originalPrice > price) {
                    // Correct formula: ((original - current) / original) * 100
                    discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
                }
            } else {
                discountPercentage = parseFloat(otherFields.discountPercentage);
            }
        }
        
        // Create a new product with the form data
        const productData = {
            ...otherFields,
            name: otherFields.name.trim(),
            category: otherFields.category,
            description: otherFields.description.trim(),
            price: parseFloat(otherFields.price),
            originalPrice: originalPrice,
            discountPercentage: discountPercentage,
            image: otherFields.image.trim(),
            status: otherFields.status || 'Available',
            quantity: {
                value: quantityValue || '1',
                unit: quantityUnit || 'kg'
            },
            isOrganic: otherFields.isOrganic === 'true',
            season: otherFields.season?.trim(),
            origin: otherFields.origin?.trim(),
            specialTag: Array.isArray(specialTag) ? specialTag : specialTag ? [specialTag] : []
        };

        console.log('Product data to save:', productData);
        const product = new Product(productData);
        await product.save();
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error creating product:', error);
        
        const categories = [
            "Fresh Vegetables",
            "Fresh Fruits",
            "Leafy Greens",
            "Dry Fruits",
            "Spices",
            "Grains",
            "Oils & Sauces", 
            "Breads & Cheeses",
            "Dairy Products"
        ];
        
        res.render('admin/product-form', {
            product: req.body,
            categories,
            error: error.message,
            title: 'Add New Product - Error'
        });
    }
});

// Edit product form
router.get('/products/:id/edit', isAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send("Product not found");
        }

        const categories = [
            "Fresh Vegetables",
            "Fresh Fruits",
            "Leafy Greens",
            "Dry Fruits",
            "Spices",
            "Grains",
            "Oils & Sauces", 
            "Breads & Cheeses",
            "Dairy Products"
        ];

        console.log('Rendering edit product form with admin layout');

        res.render('admin/product-form', { 
            product,
            categories,
            error: null,
            title: 'Edit Product',
            originalUrl: req.originalUrl,
            layout: 'layouts/admin' // Explicitly set layout
        });
    } catch (error) {
        console.error('Error loading edit form:', error);
        res.status(500).send("Error loading edit form");
    }
});

// Update product
router.put('/products/:id', isAdmin, async (req, res) => {
    try {
        // Extract quantity fields and special tags
        const { quantityValue, quantityUnit, specialTag, ...otherFields } = req.body;
        
        // Handle discount fields
        let originalPrice = null;
        let discountPercentage = 0;
        
        if (otherFields.originalPrice && parseFloat(otherFields.originalPrice) > 0) {
            originalPrice = parseFloat(otherFields.originalPrice);
            
            // Calculate discount percentage if not provided
            if (!otherFields.discountPercentage || parseFloat(otherFields.discountPercentage) <= 0) {
                const price = parseFloat(otherFields.price);
                if (price > 0 && originalPrice > price) {
                    // Correct formula: ((original - current) / original) * 100
                    discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);
                }
            } else {
                discountPercentage = parseFloat(otherFields.discountPercentage);
            }
        }
        
        // Create update data object
        const updateData = {
            name: otherFields.name.trim(),
            category: otherFields.category,
            description: otherFields.description.trim(),
            price: parseFloat(otherFields.price),
            originalPrice: originalPrice,
            discountPercentage: discountPercentage,
            image: otherFields.image.trim(),
            status: otherFields.status || 'Available',
            quantity: {
                value: quantityValue || '1',
                unit: quantityUnit || 'kg'
            },
            isOrganic: otherFields.isOrganic === 'true',
            season: otherFields.season?.trim(),
            origin: otherFields.origin?.trim(),
            specialTag: Array.isArray(specialTag) ? specialTag : specialTag ? [specialTag] : []
        };

        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }

        res.redirect('/admin/products');
    } catch (error) {
        // Error handling code...
    }
});

// Delete product
router.delete('/products/:id', isAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        res.status(500).send("Error deleting product");
    }
});

// Debug route to check order existence
router.get('/debug/order/:id', isAdmin, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json({
            exists: !!order,
            orderId: req.params.id,
            order: order ? {
                id: order._id,
                status: order.status,
                total: order.total,
                createdAt: order.createdAt,
                payment: order.payment
            } : null
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
























