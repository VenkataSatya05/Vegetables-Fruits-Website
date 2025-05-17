// MongoDB shell command to update products with random special tags

// This function randomly assigns special tags to all products
db.products.aggregate([
  { $project: { _id: 1, name: 1 } },
  { 
    $set: { 
      randomValue: { $rand: {} } 
    } 
  },
  {
    $set: {
      specialTag: {
        $cond: [
          { $lt: ["$randomValue", 0.25] },
          ["flash_deal"],
          {
            $cond: [
              { $lt: ["$randomValue", 0.5] },
              ["deal_of_the_day"],
              {
                $cond: [
                  { $lt: ["$randomValue", 0.75] },
                  ["summer_specials"],
                  ["everyday_essentials"]
                ]
              }
            ]
          }
        ]
      }
    }
  },
  { $unset: "randomValue" },
  { $merge: { into: "products" } }
]);

// Add a second tag to some products (about 30%)
db.products.aggregate([
  { $sample: { size: Math.floor(db.products.count() * 0.3) } },
  { 
    $set: { 
      randomValue: { $rand: {} } 
    } 
  },
  {
    $set: {
      additionalTag: {
        $cond: [
          { $lt: ["$randomValue", 0.33] },
          "flash_deal",
          {
            $cond: [
              { $lt: ["$randomValue", 0.66] },
              "deal_of_the_day",
              "summer_specials"
            ]
          }
        ]
      }
    }
  },
  {
    $set: {
      specialTag: {
        $cond: [
          { $in: ["$additionalTag", "$specialTag"] },
          "$specialTag",
          { $concatArrays: ["$specialTag", ["$additionalTag"]] }
        ]
      }
    }
  },
  { $unset: ["randomValue", "additionalTag"] },
  { $merge: { into: "products" } }
]);