// Import Express framework
import exp from 'express'
// Import Product model
import { ProductModel } from './ProductModel.js'
// Create separate router object for product routes
export const productApp = exp.Router()
// CREATE PRODUCT
// Route: POST /products
// Adds a new product to database

productApp.post("/products", async (req, res) => {
    // Get product data from request body
    const newProduct = req.body
    // Create new product document
    const newProductDocument = new ProductModel(newProduct)
    // Save product into database
    await newProductDocument.save()
    // Send success response
    res.status(201).json({message: "Product Added"})
})
// READ ALL PRODUCTS
// Route: GET /products
// Fetch all products from database
productApp.get("/products", async (req, res) => {
    // Get all products
    const productsList = await ProductModel.find()
    // Send products list
    res.status(200).json({message: "All Products",payload: productsList})

})
// READ PRODUCT BY productId
// Route: GET /products/:productId
// Fetch single product using productId
productApp.get("/products/:productId", async (req, res) => {
    // Extract productId from URL params
    const pid = req.params.productId
    // Find product using productId
    const product = await ProductModel.findOne({ productId: pid})
    // If product not found
    if (!product) {
        return res.status(404).json({message: "Product Not Found"})
    }
    // Send found product
    res.status(200).json({message: "Product Found",payload: product})
})
// UPDATE PRODUCT
// Route: PUT /products/:productId
// Update existing product details
productApp.put("/products/:productId", async (req, res) => {
    // Extract productId from params
    const pid = req.params.productId
    // Get updated product data
    const modifiedProduct = req.body
    // Update product in database
    const updatedProduct = await ProductModel.findOneAndUpdate({ productId: pid },{ $set: { ...modifiedProduct } },
        {
            new: true,
            runValidators: true
        }
    )
    // If product not found
    if (!updatedProduct) {
        return res.status(404).json({message: "Product Not Found"})
    }
    // Send updated product
    res.status(200).json({message: "Product Updated",payload: updatedProduct})
})
// DELETE PRODUCT
// Route: DELETE /products/:productId
// Delete product from database

productApp.delete("/products/:productId", async (req, res) => {
    // Extract productId from params
    const pid = req.params.productId
    // Delete product from database
    const deletedProduct = await ProductModel.findOneAndDelete({productId: pid})
    // If product not found
    if (!deletedProduct) {
      return res.status(404).json({message: "Product Not Found"})
    }
    // Send deleted product details
    res.status(200).json({message: "Product Deleted",payload: deletedProduct})
})
