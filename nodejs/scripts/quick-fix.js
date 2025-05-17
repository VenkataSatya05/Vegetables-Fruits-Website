// Quick fix for MongoDB shell - run this in mongosh

// First, clear all existing special tags
db.products.updateMany({}, { $set: { specialTag: [] } });
print("Cleared all existing special tags");

// Get all product IDs
const allProducts = db.products.find({}, { _id: 1 }).toArray();
const productIds = allProducts.map(p => p._id);
print(`Found ${productIds.length} products to update`);

// Shuffle the array to randomize
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledIds = shuffle([...productIds]);

// Calculate quarter points to divide products into 4 groups
const quarterSize = Math.ceil(shuffledIds.length / 4);

// Assign tags to each quarter
const tags = ['flash_deal', 'deal_of_the_day', 'summer_specials', 'everyday_essentials'];
for (let i = 0; i < 4; i++) {
  const start = i * quarterSize;
  const end = Math.min(start + quarterSize, shuffledIds.length);
  const idsForThisTag = shuffledIds.slice(start, end);
  
  db.products.updateMany(
    { _id: { $in: idsForThisTag } },
    { $set: { specialTag: [tags[i]] } }
  );
  
  print(`Assigned "${tags[i]}" to ${idsForThisTag.length} products`);
}

// Add a second tag to some products (about 20%)
const productsForSecondTag = Math.floor(productIds.length * 0.2);
const shuffledForSecondTag = shuffle([...productIds]).slice(0, productsForSecondTag);

for (const id of shuffledForSecondTag) {
  // Get current tag
  const product = db.products.findOne({ _id: id });
  const currentTag = product.specialTag[0];
  
  // Choose a different tag
  let availableTags = tags.filter(t => t !== currentTag);
  const secondTag = availableTags[Math.floor(Math.random() * availableTags.length)];
  
  // Add the second tag
  db.products.updateOne(
    { _id: id },
    { $push: { specialTag: secondTag } }
  );
}

print(`Added a second tag to approximately ${productsForSecondTag} products`);

// Verify distribution
print("Final distribution of special tags:");
for (const tag of tags) {
  const count = db.products.countDocuments({ specialTag: tag });
  print(`${tag}: ${count} products`);
}
