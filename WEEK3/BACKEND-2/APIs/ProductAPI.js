// Import Express framework
import exp from 'express'
// Import Product model
import { ProductModel } from '../models/ProductModel.js'
// Import bcrypt functions
import { compare, hash } from "bcryptjs"
// Import jsonwebtoken package
import jwt from 'jsonwebtoken'
// Import custom token verification middleware
import { verifyToken } from '../middlewares/verifyToken.js'
// Extract sign function from jwt
const { sign } = jwt
// Create Express Router
export const productApp = exp.Router()
// AUTHENTICATION ROUTE
// Route: POST /auth
// Login product using productId & productName
productApp.post('/auth', async (req, res) => {

    // Extract productId and productName from request body
    const { productId, productName } = req.body;
    // Find product using productId
    let product = await ProductModel.findOne({
        productId: productId
    })
    // If product not found
    if (product === null) {
        return res.status(404).json({message: "Invalid productId"})
    }
    // Check whether productName matches
    if (productName !== product.productName) {
        return res.status(400).json({message: "Invalid productName"})
    }
    // Generate JWT Token
    const signedToken = sign(
        // Payload
        { productId: product.productId },
        // Secret key
        "abcdef",
        // Token expiration time
        { expiresIn: "1h" }
    );
    // Store token in HTTP-only cookie
    res.cookie("token", signedToken, {
        // Cookie cannot be accessed using JavaScript
        httpOnly: true,
        // Cookie policy
        sameSite: "lax",
        // HTTPS only in production
        secure: false
    })
    // Send success response
    res.status(200).json({message: "login success",payload: product})
})
// CREATE PRODUCT
// Route: POST /products
productApp.post("/products", async (req, res) => {
    // Get new product data
    const newProduct = req.body;
    // Create new product document
    const newProductDocument = new ProductModel(newProduct)
    // Save product to database
    await newProductDocument.save()
    // Send response
    res.status(201).json({message: "product created"})
});
// GET ALL PRODUCTS
// Route: GET /products
// Protected Route
productApp.get("/products", verifyToken, async (req, res) => {
    // Fetch all products
    let productsList = await ProductModel.find();
    // Send products list
    res.status(200).json({message: "products",payload: productsList})
})
// GET PRODUCT BY ID
// Route: GET /products/:productId
// Protected Route
productApp.get("/products/:productId", verifyToken, async (req, res) => {
    // Get productId from URL params
    const pid = req.params.productId
    // Find product using productId
    const productObj = await ProductModel.findOne({productId: pid})
    // If product not found
    if (!productObj) {
        return res.status(404).json({message: "product not found"})
    }
    // Send product details
    res.status(200).json({message: "product",payload: productObj})
})
// UPDATE PRODUCT
// Route: PUT /products/:productId
// Protected Route
productApp.put("/products/:productId", verifyToken, async (req, res) => {
    // Get updated product data
    const modifiedProduct = req.body;
    // Get productId from params
    const pid = req.params.productId;
    // Update product in database
    const updatedProduct = await ProductModel.findOneAndUpdate({ productId: pid },{ $set: modifiedProduct },
        {
            new: true,
            runValidators: true
        }
    )
    // Send updated product
    res.status(200).json({message: "Product Modified",payload: updatedProduct})
})
// DELETE PRODUCT
// Route: DELETE /products/:productId
// Protected Route
productApp.delete("/products/:productId", verifyToken, async (req, res) => {
    // Get productId from params
    const pid = req.params.productId
    // Delete product from database
    const deletedProduct = await ProductModel.findOneAndDelete({productId: pid})
    // If product not found
    if (!deletedProduct) {
        return res.status(404).json({message: "Product not found"})
    }
    // Send deleted product details
    res.status(200).json({message: "product deleted",payload: deletedProduct})
})
