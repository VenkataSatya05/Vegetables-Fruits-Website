const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const { isAuthenticated } = require("../middleware/auth");

// Get cart
router.get("/", isAuthenticated, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
  res.render("pages/cart", { cart: cart || { items: [] } });
});

// Add to cart
router.post("/", isAuthenticated, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) {
    cart = new Cart({ user: req.user.id, items: [] });
  }
  const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += Number(quantity);
  } else {
    cart.items.push({ product: productId, quantity: Number(quantity) });
  }
  await cart.save();
  res.redirect("/cart");
});

// Remove from cart
router.delete("/:id", isAuthenticated, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });
  cart.items = cart.items.filter((item) => item._id.toString() !== req.params.id);
  await cart.save();
  res.redirect("/cart");
});

module.exports = router;
