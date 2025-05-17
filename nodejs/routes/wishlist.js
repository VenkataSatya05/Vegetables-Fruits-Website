const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");
const { isAuthenticated } = require("../middleware/auth");

// Get wishlist
router.get("/", isAuthenticated, async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user.id }).populate("products");
  res.render("pages/wishlist", { wishlist: wishlist || { products: [] } });
});

// Add to wishlist
router.post("/", isAuthenticated, async (req, res) => {
  const { productId } = req.body;
  let wishlist = await Wishlist.findOne({ user: req.user.id });
  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user.id, products: [] });
  }
  if (!wishlist.products.includes(productId)) {
    wishlist.products.push(productId);
  }
  await wishlist.save();
  res.redirect("/wishlist");
});

// Remove from wishlist
router.delete("/:id", isAuthenticated, async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user.id });
  wishlist.products = wishlist.products.filter((id) => id.toString() !== req.params.id);
  await wishlist.save();
  res.redirect("/wishlist");
});

module.exports = router;
