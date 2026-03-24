//create mini-express app(seperate route)
//create product array
import exp from 'express'
export const productApp=exp.Router()

let products = []

// Create new Product
productApp.post('/products', (req, res) => {

    const newProduct = req.body

    /*//check if product already exists
    let existing = products.find(prod => prod.productId === newProduct.productId)
    if (existing) {
        return res.json({ message: "Product already exists" })
    }*/

    products.push(newProduct)

    res.json({ message: "Product created" })
})


// Read all products
productApp.get('/products', (req, res) => {
    res.json({ message: "All products", payload: products })
})


// Read products by brand
productApp.get('/products/brand/:brand', (req, res) => {

    let brandName = req.params.brand

    let product = products.find(prod => prod.brand === brandName)

    if (!product) {
        return res.json({ message: "No product found for this brand" })
    }

    res.json({ message: "Product by brand", payload: product })
})

// Update a product
productApp.put('/products', (req, res) => {

    let modifiedProduct = req.body

    let index = products.findIndex(prod => prod.productId === modifiedProduct.productId)

    if (index === -1) {
        return res.json({ message: "Product not found" })
    }

    products.splice(index, 1, modifiedProduct)

    res.json({ message: "Product updated" })
})


// Delete product by id
productApp.delete('/products/:id', (req, res) => {

    let idFromUrl = Number(req.params.id)

    let index = products.findIndex(prod => prod.productId === idFromUrl)

    if (index === -1) {
        return res.json({ message: "Product not found" })
    }

    products.splice(index, 1)

    res.json({ message: "Product deleted" })
})