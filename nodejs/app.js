require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));

// Session middleware for guest carts
app.use(session({
  secret: process.env.SESSION_SECRET || 'freshharvest-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
  }
}));

// Initialize empty cart for guest users
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = { items: [] };
  }
  next();
});

// Set up EJS and layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Default layout
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to set layout based on route and pass request object to views
app.use((req, res, next) => {
  // Use admin layout for admin routes
  if (req.path.startsWith('/admin')) {
    res.locals.layout = 'layouts/admin';
    // Pass the request object to all views
    res.locals.req = req;
  }
  next();
});

// Log the layout being used for debugging
app.use((req, res, next) => {
  console.log(`Route: ${req.path}, Layout: ${res.locals.layout}`);
  next();
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Middleware to attach user to views
app.use((req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.locals.user = decoded;
    } catch (err) {
      res.locals.user = null;
    }
  } else {
    res.locals.user = null;
  }
  next();
});

// Routes
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const wishlistRoutes = require("./routes/wishlist");
const orderRoutes = require("./routes/orders");
const adminRoutes = require("./routes/admin");
const profileRoutes = require("./routes/profile");
const apiRoutes = require("./routes/api");

// Add debug routes
const debugRoutes = require('./routes/debug');
app.use('/debug', debugRoutes);

// Redirect /checkout to /orders/checkout
app.get("/checkout", (req, res) => {
    res.redirect("/orders/checkout");
});

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/orders", orderRoutes);
app.use('/admin', require('./routes/admin'));
app.use("/profile", profileRoutes);
app.use("/api", apiRoutes);

// Homepage
app.get("/", async (req, res) => {
  try {
    const Product = require("./models/product");
    // Get all available products
    const allProducts = await Product.find({ status: 'Available' });
    
    // Set layout to null for the homepage
    res.locals.layout = null;
    
    res.render("pages/index", { 
      products: allProducts,
      featuredProducts: allProducts.slice(0, 6),
      message: req.query.message,
      req: req
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error loading homepage");
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
