// Import Schema and model from mongoose
import { Schema, model } from "mongoose";
// Create Product Schema
// Schema defines structure of product document
const productSchema = new Schema(
    {
        // Product ID field
        productId: {
            // Data type should be Number
            type: Number,
            // Field is mandatory
            required: [true, "productId is required"],
        },
        // Product Name field
        productName: {
            // Data type should be String
            type: String,
            // Field is mandatory
            required: [true, "productName required"],
        },
        // Product Price field
        price: {
            // Data type should be Number
            type: Number,
            // Field is mandatory
            required: [true, "price required"],
            // Minimum allowed price
            min: [10000, "min price 10000"],
            // Maximum allowed price
            max: [50000, "max price 500000"]
        },
        // Product Brand field
        brand: {
            // Data type should be String
            type: String,
            // Field is mandatory
            required: [true, "brand required"]
        },
    },
    // Schema configuration options
    {
        // Disable __v field
        versionKey: false,
        // Automatically add createdAt & updatedAt
        timestamps: true,
    },

);
// Generate Product Model
// "product" → collection name
// productSchema → schema structure
export const ProductModel = model("product",productSchema))
