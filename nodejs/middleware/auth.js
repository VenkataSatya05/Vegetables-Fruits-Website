const jwt = require("jsonwebtoken");
const { admins } = require('../init/data');
const bcrypt = require("bcrypt");
const User = require("../models/user");

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/auth/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.redirect("/auth/login");
  }
};

const isAdmin = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("/auth/login");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded.isAdmin) {
            return res.redirect("/");
        }
        
        // Ensure decoded has an id property
        if (!decoded.id && decoded._id) {
            decoded.id = decoded._id;
        } else if (!decoded.id && !decoded._id) {
            // If neither id nor _id exists, add a placeholder
            decoded.id = 'unknown';
        }
        
        req.user = decoded;
        next();
    } catch (err) {
        res.clearCookie("token");
        res.redirect("/auth/login");
    }
};

const authenticateAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const admin = admins.find(a => a.email === email && a.password === password);
        
        if (admin) {
            const token = jwt.sign(
                { email, isAdmin: true },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );
            
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production'
            });
            
            req.user = { email, isAdmin: true };
            return next();
        }

        return res.status(401).json({ error: 'Invalid credentials' });
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ error: 'Authentication failed' });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Initialize admin account
const initAdmin = async () => {
  try {
    const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!admin) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      await User.create({
        name: "Admin",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        isAdmin: true
      });
      console.log("Admin account created");
    }
  } catch (err) {
    console.error("Error creating admin account:", err);
  }
};

module.exports = { isAuthenticated, isAdmin, authenticateAdmin, verifyToken, initAdmin };
