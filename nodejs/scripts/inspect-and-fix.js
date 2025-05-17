// Run with: node scripts/inspect-and-fix.js
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get the Product model
const Product = mongoose.model('Product', new mongoose.Schema({}, { strict: false }));

async function inspectAndFix() {
  try {
    // 1. First, inspect a product to see its structure
    const sampleProduct = await Product.findOne({});
    console.log('Sample product structure:');
    console.log(JSON.stringify(sampleProduct, null, 2));
    
    // 2. Check if specialTag exists and what type it is
    console.log('\nSpecial tag info:');
    console.log('- Type:', typeof sampleProduct.specialTag);
    console.log('- Is Array:', Array.isArray(sampleProduct.specialTag));
    console.log('- Value:', sampleProduct.specialTag);
    
    // 3. Clear all existing tags and ensure specialTag is an array
    const updateResult = await Product.updateMany(
      {}, 
      { $set: { specialTag: [] } }
    );
    console.log('\nCleared all special tags:', updateResult);
    
    // 4. Get all products
    const products = await Product.find({});
    console.log(`\nFound ${products.length} products to update`);
    
    // 5. Divide products into 4 groups
    const tags = ['flash_deal', 'deal_of_the_day', 'summer_specials', 'everyday_essentials'];
    const productsPerGroup = Math.ceil(products.length / 4);
    
    // 6. Assign tags to each group
    for (let i = 0; i < 4; i++) {
      const start = i * productsPerGroup;
      const end = Math.min(start + productsPerGroup, products.length);
      const groupProducts = products.slice(start, end);
      
      // Get IDs for this group
      const groupIds = groupProducts.map(p => p._id);
      
      // Assign tag to this group
      const result = await Product.updateMany(
        { _id: { $in: groupIds } },
        { $set: { specialTag: [tags[i]] } }
      );
      
      console.log(`Assigned "${tags[i]}" to ${groupIds.length} products:`, result);
    }
    
    // 7. Verify the distribution
    console.log('\nVerifying tag distribution:');
    for (const tag of tags) {
      const count = await Product.countDocuments({ specialTag: tag });
      console.log(`Products with "${tag}": ${count}`);
    }
    
    // 8. Check a sample product after update
    const updatedSample = await Product.findOne({});
    console.log('\nUpdated sample product:');
    console.log('- Special tag:', updatedSample.specialTag);
    console.log('- Is Array:', Array.isArray(updatedSample.specialTag));
    
    console.log('\nTags updated successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    mongoose.connection.close();
  }
}

// Run the function
inspectAndFix();