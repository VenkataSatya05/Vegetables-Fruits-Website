const mongoose = require("mongoose");
const { Products, Categories } = require("./data.js");
const Product = require("../models/product.js");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
require('dotenv').config();

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

main()
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

const initDB = async () => {
    try {
        // Clear existing data
        await Product.deleteMany({});
        await User.deleteMany({});
        console.log("Cleared existing data");

        // Create admin user
        const adminUser = new User({
            name: "Admin",
            email: "admin@veggifruit.com",
            password: "admin123", // Will be hashed by the pre-save middleware
            isAdmin: true
        });
        await adminUser.save();
        console.log("Admin user created successfully");

        // Validate products before insertion
        const validProducts = Products.filter(product => {
            if (!product.name || !product.category || !product.price) {
                console.warn(`Skipping invalid product: ${JSON.stringify(product)}`);
                return false;
            }
            return true;
        });

        if (validProducts.length !== Products.length) {
            console.warn(`Found ${Products.length - validProducts.length} invalid products that will be skipped`);
        }

        // Insert products
        if (validProducts.length > 0) {
            await Product.insertMany(validProducts);
            console.log(`Added ${validProducts.length} products to database`);
        } else {
            console.error("No valid products found to insert");
        }

        console.log("Database initialization completed successfully");
    } catch (error) {
        console.error("Error during initialization:", error);
        process.exit(1);
    }
};

initDB();
