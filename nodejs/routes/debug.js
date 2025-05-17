const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Debug route to check tag distribution
router.get('/tag-distribution', async (req, res) => {
  try {
    // Get all products
    const products = await Product.find({});
    
    // Count products by tag
    const tagCounts = {
      'flash_deal': 0,
      'deal_of_the_day': 0,
      'summer_specials': 0,
      'everyday_essentials': 0,
      'no_tag': 0
    };
    
    // Check each product
    products.forEach(product => {
      if (!product.specialTag || product.specialTag.length === 0) {
        tagCounts.no_tag++;
      } else {
        product.specialTag.forEach(tag => {
          if (tagCounts[tag] !== undefined) {
            tagCounts[tag]++;
          }
        });
      }
    });
    
    // Check the structure of specialTag for a few products
    const sampleProducts = await Product.find().limit(5);
    const samples = sampleProducts.map(p => ({
      id: p._id,
      name: p.name,
      specialTag: p.specialTag,
      specialTagType: p.specialTag ? typeof p.specialTag : 'undefined',
      isArray: Array.isArray(p.specialTag)
    }));
    
    res.json({
      totalProducts: products.length,
      tagDistribution: tagCounts,
      sampleProducts: samples
    });
  } catch (error) {
    console.error('Debug route error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;