// MongoDB shell commands to redistribute special tags evenly

// First, clear all existing special tags
db.products.updateMany({}, { $set: { specialTag: [] } });

// Calculate total number of products
const totalProducts = db.products.countDocuments();
const productsPerTag = Math.ceil(totalProducts * 0.3); // 30% of products per tag

// Function to add a specific tag to a random subset of products
function addTagToRandomProducts(tag, count) {
  db.products.aggregate([
    { $sample: { size: count } },
    { $set: { specialTag: { $concatArrays: [{ $ifNull: ["$specialTag", []] }, [tag]] } } },
    { $merge: { into: "products" } }
  ]);
  
  print(`Added "${tag}" to approximately ${count} products`);
}

// Add each tag to a random subset of products
addTagToRandomProducts("flash_deal", productsPerTag);
addTagToRandomProducts("deal_of_the_day", productsPerTag);
addTagToRandomProducts("summer_specials", productsPerTag);
addTagToRandomProducts("everyday_essentials", productsPerTag);

// Verify distribution
print("Distribution of special tags:");
print(`flash_deal: ${db.products.countDocuments({ specialTag: "flash_deal" })}`);
print(`deal_of_the_day: ${db.products.countDocuments({ specialTag: "deal_of_the_day" })}`);
print(`summer_specials: ${db.products.countDocuments({ specialTag: "summer_specials" })}`);
print(`everyday_essentials: ${db.products.countDocuments({ specialTag: "everyday_essentials" })}`);