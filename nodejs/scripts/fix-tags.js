// Run this with: node scripts/fix-tags.js

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/veggifruit';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Product schema to match your database
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  image: String,
  price: Number,
  quantity: { value: String, unit: String },
  status: String,
  isOrganic: Boolean,
  season: String,
  origin: String,
  specialTag: [String]
});

const Product = mongoose.model('Product', productSchema);

async function fixTags() {
  try {
    // 1. First, get all products
    const products = await Product.find({});
    console.log(`Found ${products.length} products`);

    // 2. Clear all existing tags
    await Product.updateMany({}, { $set: { specialTag: [] } });
    console.log('Cleared all existing tags');

    // 3. Define our tags
    const tags = ['flash_deal', 'deal_of_the_day', 'summer_specials', 'everyday_essentials'];
    
    // 4. Divide products into 4 equal groups
    const productsPerGroup = Math.ceil(products.length / 4);
    
    // 5. Assign tags to each group
    for (let i = 0; i < 4; i++) {
      const start = i * productsPerGroup;
      const end = Math.min(start + productsPerGroup, products.length);
      const groupProducts = products.slice(start, end);
      
      // Get IDs for this group
      const groupIds = groupProducts.map(p => p._id);
      
      // Assign tag to this group
      await Product.updateMany(
        { _id: { $in: groupIds } },
        { $set: { specialTag: [tags[i]] } }
      );
      
      console.log(`Assigned "${tags[i]}" to ${groupIds.length} products`);
    }

    // 6. Verify the distribution
    for (const tag of tags) {
      const count = await Product.countDocuments({ specialTag: tag });
      console.log(`Products with "${tag}": ${count}`);
    }

    console.log('Tags updated successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating tags:', error);
    mongoose.connection.close();
  }
}

// Run the function
fixTags();