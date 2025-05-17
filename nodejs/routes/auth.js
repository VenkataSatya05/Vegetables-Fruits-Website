const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login page
router.get("/login", (req, res) => {
  res.render("pages/login", { error: null });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            console.log('User not found:', email);
            return res.render("pages/login", { error: "Invalid credentials" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        
        if (!isValidPassword) {
            console.log('Invalid password for user:', email);
            return res.render("pages/login", { error: "Invalid credentials" });
        }

        const token = jwt.sign(
            { 
                id: user._id, 
                email: user.email,
                isAdmin: user.isAdmin 
            }, 
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.cookie("token", token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        if (user.isAdmin) {
            return res.redirect("/admin");
        }
        return res.redirect("/");
    } catch (error) {
        console.error('Login error:', error);
        res.render("pages/login", { error: "An error occurred" });
    }
});

// Signup page
router.get("/signup", (req, res) => {
  res.render("pages/signup", { error: null });
});

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  
  // Validate password
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.render("pages/signup", { 
      error: "Password must be at least 8 characters and include uppercase, lowercase, and a number or special character.",
      name,
      email
    });
  }
  
  // Check if passwords match
  if (password !== confirmPassword) {
    return res.render("pages/signup", { 
      error: "Passwords do not match.",
      name,
      email
    });
  }
  
  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.render("pages/signup", { 
      error: "Email already exists",
      name
    });
  }
  
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    console.error("Signup error:", error);
    res.render("pages/signup", { 
      error: "An error occurred during signup. Please try again.",
      name,
      email
    });
  }
});

// Register admin
router.post('/register-admin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const admin = new User({
            email,
            password: hashedPassword,
            isAdmin: true
        });
        
        await admin.save();
        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating admin' });
    }
});

// Reset admin password
router.post('/reset-admin-password', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await User.findOneAndUpdate(
            { email: 'admin@veggifruit.com' },
            { password: hashedPassword }
        );
        res.status(200).json({ message: 'Admin password reset successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error resetting admin password' });
    }
});

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
