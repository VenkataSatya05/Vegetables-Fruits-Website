const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Get cart count - handle both authenticated and guest users
router.get('/cart/count', async (req, res) => {
  try {
    let count = 0;
    
    if (req.user) {
      // For logged in users, get cart from database
      const cart = await Cart.findOne({ user: req.user.id });
      count = cart ? cart.items.reduce((total, item) => total + item.quantity, 0) : 0;
    } else if (req.session && req.session.cart) {
      // For guest users, get cart from session
      count = req.session.cart.items.reduce((total, item) => total + item.quantity, 0);
    }
    
    res.json({ count });
  } catch (error) {
    console.error('Error fetching cart count:', error);
    res.status(500).json({ error: 'Failed to fetch cart count' });
  }
});

module.exports = router;

