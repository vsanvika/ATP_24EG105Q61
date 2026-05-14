// Import Schema and model from mongoose
import { Schema, model } from "mongoose";
// Create Product Schema
// Schema defines structure of product document
const productSchema = new Schema(
    {
        // Product ID Field
        productId: {
            // Data type should be Number
            type: Number,
            // Field is mandatory
            required: [true, "productId is required"],
        },
        // Product Name Field
     productName: {
            // Data type should be String
            type: String,
            // Field is mandatory
            required: [true, "productName is required"],
        },
        // Price Field
        price: {
            // Data type should be Number
            type: Number,
            // Field is mandatory
            required: [true, "price is required"],
            // Minimum allowed price
            min: [10000, "min price at least 10000"],
            // Maximum allowed price
            max: [50000, "max price at most 50000"],
        },
        // Brand Field
        brand: {
            // Data type should be String
            type: String,
        },
    },
    // Schema Configuration Options
    {
        // Disable __v field
        versionKey: false,
        // Automatically add createdAt & updatedAt fields
        timestamps: true,
    }
)
// Generate Product Model
// "product" → collection name
// productSchema → schema structure
export const ProductModel = model("product",productSchema)
