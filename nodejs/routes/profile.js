const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Order = require("../models/order");
const { isAuthenticated } = require("../middleware/auth");

// Profile page
router.get("/", isAuthenticated, async (req, res) => {
  try {
    // Get user details
    const user = await User.findById(req.user.id).select("-password");
    
    // Get recent orders
    const recentOrders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("items.product");
    
    res.render("profile", { 
      user, 
      recentOrders,
      title: "My Profile"
    });
  } catch (error) {
    console.error("Error loading profile:", error);
    res.status(500).send("Error loading profile");
  }
});

// Update profile - simplified to only update name and email
router.post("/update", isAuthenticated, async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Update user with only basic information
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email
    });
    
    res.redirect("/profile?message=Profile updated successfully");
  } catch (error) {
    console.error("Error updating profile:", error);
    res.redirect("/profile?error=Failed to update profile");
  }
});

module.exports = router;
