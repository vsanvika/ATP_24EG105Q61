// Import Express framework
import exp from 'express';
// Import connect function from mongoose
import { connect } from 'mongoose';
// Import product router
import { productApp } from "./ProductAPI.js";
// Create Express Application
const app = exp()
// Middleware
// exp.json() converts JSON request body into JS object
app.use(exp.json())
// Route Middleware
// All product routes start with /product-api
app.use("/product-api", productApp)
// Function to Connect MongoDB Database
async function connectDB() {
    try {
        // Connect to MongoDB database
        await connect("mongodb://localhost:27017/MyDb1")
        // Success message
        console.log("DB connection success")
        // Start Express Server after successful DB connection
        app.listen(4000, () =>
            console.log("server on port 4000...")
        )
    }
    // Handle database connection errors
    catch (err) {
        console.log("err in db connection")
    }
}
// Call database connection function
connectDB()
