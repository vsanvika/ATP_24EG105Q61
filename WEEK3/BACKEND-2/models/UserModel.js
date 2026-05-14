// Import Schema and model from mongoose
import { Schema, model } from "mongoose";
// Create User Schema
// Schema defines structure of user document
const userSchema = new Schema(
    {
        // Username Field
        username: {
            // Data type should be String
            type: String,
            // Field is mandatory
            required: [true, "user is required"],
            // Minimum username length
            minLength: [4, "min length of username is 4 char"],
            // Maximum username length
            maxLength: [7, "username size exceed 7 char"],
        },
        // Password Field
        password: {
            // Data type should be String
            type: String,
            // Field is mandatory
            required: [true, "password required"],
        },
        // Email Field
        email: {
            // Data type should be String
            type: String,
            // Field is mandatory
            required: [true, "email is required"],
            // Email should be unique
            unique: [true, "email already existed"],
        },
        // Age Field
        age: {
            type: Number,
        },
    },
    // Schema Configuration Options
    {
        // Disable __v field
        versionKey: false,
        // Automatically add createdAt & updatedAt
        timestamps: true,
    },
)
// Generate User Model
// "user" → collection name
// userSchema → schema structure
export const UserModel = model("user",userSchema)
