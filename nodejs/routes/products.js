
const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { isAdmin } = require("../middleware/auth");
const mongoose = require('mongoose');

// Get all products with optional filtering
router.get('/', async (req, res) => {
    try {
        let query = {};
        
        // Filter by category if provided
        if (req.query.category) {
            query.category = req.query.category;
        }
        
        // Filter by special tag if provided
        if (req.query.tag) {
            query.specialTag = req.query.tag;
        }
        
        // Filter by search term if provided
        if (req.query.search) {
            const searchRegex = new RegExp(req.query.search, 'i');
            query.$or = [
                { name: searchRegex },
                { description: searchRegex },
                { category: searchRegex }
            ];
        }
        
        // Filter by status (default to Available)
        if (req.query.status) {
            query.status = req.query.status;
        }
        
        // Filter by price range
        if (req.query.price) {
            switch(req.query.price) {
                case 'below200':
                    query.price = { $lt: 200 };
                    break;
                case '200-300':
                    query.price = { $gte: 200, $lte: 300 };
                    break;
                case '300-500':
                    query.price = { $gte: 300, $lte: 500 };
                    break;
                case '500-1000':
                    query.price = { $gte: 500, $lte: 1000 };
                    break;
                case 'above1000':
                    query.price = { $gt: 1000 };
                    break;
            }
        }
        
        // Debug the query
        console.log('Products query:', query);
        
        const products = await Product.find(query).sort({ createdAt: -1 });
        console.log(`Found ${products.length} products matching query`);
        
        // Determine the current category title
        let currentCategory = 'All Products';
        if (req.query.category) {
            currentCategory = req.query.category;
        } else if (req.query.search) {
            currentCategory = `Search Results for "${req.query.search}"`;
        } else if (req.query.tag) {
            // Format the tag for display (e.g., "flash_deal" -> "Flash Deal")
            const formattedTag = req.query.tag
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            currentCategory = formattedTag;
        }
        
        res.render('pages/products', { 
            products,
            currentCategory,
            currentTag: req.query.tag || null,
            searchTerm: req.query.search || '',
            getCategoryDescription,
            req: req // Pass the request object to access query parameters in the template
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading products');
    }
});

function getCategoryDescription(category) {
    const descriptions = {
        'Leafy Greens': 'Explore our fresh and nutritious selection of leafy greens, perfect for salads and healthy cooking.',
        'Fresh Vegetables': 'Discover farm-fresh vegetables for your daily cooking needs.',
        'Fresh Fruits': 'Browse our selection of fresh and seasonal fruits.',
        'Grains': 'Quality grains and pulses for your pantry.',
        'Spices': 'Premium spices to enhance your cooking.',
        'Dry Fruits': 'Nutritious dry fruits and nuts.',
        'Oils & Sauces': 'Essential cooking oils and flavorful sauces.',
        'Breads & Cheeses': 'Fresh breads and premium cheeses.',
        'Dairy Products': 'Fresh dairy products including milk, yogurt, and more.'
    };
    return descriptions[category] || 'Browse our selection of quality products';
}

// Dedicated search route
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q || '';
    const searchRegex = new RegExp(query, 'i');
    
    const products = await Product.find({
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { category: searchRegex }
      ],
      status: 'Available'
    }).limit(20);
    
    res.render("pages/search-results", { 
      products, 
      searchQuery: query,
      title: `Search Results for "${query}"`
    });
  } catch (err) {
    console.error("Error searching products:", err);
    res.status(500).render("pages/error", {
      message: "Error searching products",
      error: { status: 500 }
    });
  }
});

// Get single product
router.get("/:id", async (req, res) => {
  try {
    // Check if the id is "search" - this is a special route
    if (req.params.id === "search") {
      // Handle search functionality
      const query = req.query.q || '';
      const searchRegex = new RegExp(query, 'i');
      
      const products = await Product.find({
        $or: [
          { name: searchRegex },
          { description: searchRegex },
          { category: searchRegex }
        ],
        status: 'Available'
      }).limit(20);
      
      return res.render("pages/search-results", { 
        products, 
        searchQuery: query,
        title: `Search Results for "${query}"`
      });
    }
    
    // Otherwise, treat as a normal product ID
    // Validate that the ID is a valid ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).render("pages/error", {
        message: "Product not found",
        error: { status: 404 }
      });
    }
    
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).render("pages/error", {
        message: "Product not found",
        error: { status: 404 }
      });
    }
    
    const relatedProducts = await Product.find({ 
      category: product.category, 
      _id: { $ne: product._id },
      status: 'Available'
    }).limit(4);
    
    res.render("pages/product", { product, relatedProducts });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).render("pages/error", {
      message: "Error fetching product",
      error: { status: 500 }
    });
  }
});

// Admin: Create product
router.get("/new", isAdmin, (req, res) => {
  res.render("admin_new", { 
    product: { 
      quantity: { 
        value: '', 
        unit: 'kg' // Default to kg as the first option
      } 
    } 
  });
});   

router.post("/", isAdmin, async (req, res) => {
  try {
    // Log the raw request data for debugging
    console.log('CREATE PRODUCT - Raw Request Body:', JSON.stringify(req.body, null, 2));
    
    // Clean the image URL
    const cleanImageUrl = (req.body.image || '').replace(/^"|"$/g, '');
    
    // Simplified approach for handling quantity data
    let quantity = { value: '1', unit: 'kg' };
    
    // Get quantity value and unit from form fields
    if (req.body.quantityValue) {
      quantity.value = String(req.body.quantityValue).trim();
    }
    
    if (req.body.quantityUnit) {
      quantity.unit = String(req.body.quantityUnit).trim();
    }
    
    // Handle boolean conversion
    const isOrganic = req.body.isOrganic === 'true' || req.body.isOrganic === true || req.body.isOrganic === 'on';
    
    // Create the product data object
    const productData = {
      name: req.body.name.trim(),
      category: req.body.category || 'Uncategorized',
      price: parseFloat(req.body.price) || 0,
      status: req.body.status || 'Available',
      quantity: {
        value: quantity.value,
        unit: quantity.unit
      },
      image: cleanImageUrl,
      isOrganic: isOrganic,
      season: req.body.season || 'All Seasons',
      origin: req.body.origin || 'Unknown',
      description: (req.body.description || '').trim()
    };

    // Save the product
    const product = new Product(productData);
    const savedProduct = await product.save();
    res.redirect("/products");
  } catch (error) {
    console.error('CRITICAL Error in product creation:', error);
    res.status(500).send({
      message: 'Failed to create product',
      error: error.message,
      details: error.toString()
    });
  }
});

// Admin: Edit product
router.get("/:id/edit", isAdmin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("admin_edit", { product });
});

router.put("/:id", isAdmin, async (req, res) => {
  try {
    // Clean image URL
    const cleanImageUrl = (req.body.image || '').replace(/^"|"$/g, '');
    
    let quantity = { value: '', unit: 'kg' };
    
    // Handle boolean conversion
    const isOrganic = req.body.isOrganic === 'true' || req.body.isOrganic === true;
    
    // Create update data object
    const updateData = {
      name: req.body.name?.trim(),
      category: req.body.category || 'Uncategorized',
      price: parseFloat(req.body.price) || 0,
      status: req.body.status || 'Available',
      quantity: {
        value: quantity.value.toString().trim(),
        unit: quantity.unit.toString().trim()
      },
      image: cleanImageUrl,
      isOrganic: isOrganic,
      season: req.body.season || 'All Seasons',
      origin: req.body.origin || 'Unknown',
      description: (req.body.description || '').trim()
    };
    
    // Update with runValidators to ensure schema validation
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    res.redirect("/products");
  } catch (error) {
    console.error('EDIT - Error updating product:', error);
    res.status(500).send({
      message: 'Failed to update product',
      error: error.message,
      details: error.toString()
    });
  }
});

// Admin: Delete product
router.delete("/:id", isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

module.exports = router;















