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

// Function to distribute products evenly across special tags
async function redistributeSpecialTags() {
  try {
    // Get all products
    const products = await Product.find({});
    console.log(`Found ${products.length} products to update`);
    
    // Clear all existing special tags first
    await Product.updateMany({}, { $set: { specialTag: [] } });
    console.log('Cleared existing special tags');
    
    // Calculate how many products should have each tag
    // We'll aim for roughly equal distribution with some overlap
    const productsPerTag = Math.ceil(products.length * 0.3); // 30% of products per tag
    
    for (const tag of specialTags) {
      // Get random subset of products for this tag
      const randomProducts = await Product.aggregate([
        { $sample: { size: productsPerTag } }
      ]);
      
      // Add this tag to the selected products
      for (const product of randomProducts) {
        await Product.updateOne(
          { _id: product._id },
          { $addToSet: { specialTag: tag } }
        );
        console.log(`Added tag "${tag}" to product "${product.name}"`);
      }
      
      console.log(`Added "${tag}" tag to ${randomProducts.length} products`);
    }
    
    // Verify distribution
    for (const tag of specialTags) {
      const count = await Product.countDocuments({ specialTag: tag });
      console.log(`Products with "${tag}": ${count}`);
    }
    
    console.log('All products updated successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating products:', error);
    mongoose.connection.close();
  }
}

// Run the function
redistributeSpecialTags();