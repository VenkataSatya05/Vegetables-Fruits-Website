const mongoose = require('mongoose');
const Product = require('../models/product');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/veggifruit')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Available special tags
const specialTags = [
  'flash_deal',
  'deal_of_the_day',
  'summer_specials',
  'everyday_essentials'
];

// Function to randomly assign special tags to products
async function updateProductsWithRandomTags() {
  try {
    // Get all products
    const products = await Product.find({});
    console.log(`Found ${products.length} products to update`);

    // Update each product with random special tags
    for (const product of products) {
      // Decide how many tags to assign (0-2)
      const numTags = Math.floor(Math.random() * 3); // 0, 1, or 2 tags
      
      // Randomly select tags
      const selectedTags = [];
      for (let i = 0; i < numTags; i++) {
        const randomTag = specialTags[Math.floor(Math.random() * specialTags.length)];
        // Avoid duplicates
        if (!selectedTags.includes(randomTag)) {
          selectedTags.push(randomTag);
        }
      }
      
      // Add 'everyday_essentials' to some products (30% chance)
      if (Math.random() < 0.3 && !selectedTags.includes('everyday_essentials')) {
        selectedTags.push('everyday_essentials');
      }
      
      // Update the product
      await Product.updateOne(
        { _id: product._id },
        { $set: { specialTag: selectedTags } }
      );
      
      console.log(`Updated ${product.name} with tags: ${selectedTags.join(', ') || 'none'}`);
    }

    console.log('All products updated successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating products:', error);
    mongoose.connection.close();
  }
}

// Run the function
updateProductsWithRandomTags();