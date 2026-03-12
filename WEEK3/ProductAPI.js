//create min-express app(seperate route)
import exp from 'express'
import {ProductModel} from './ProductModel.js'
export const productApp = exp.Router()


// CREATE PRODUCT
productApp.post("/products", async (req,res)=>{
    const newProduct = req.body

    const newProductDocument = new ProductModel(newProduct)

    await newProductDocument.save()

    res.status(201).json({message:"Product Added"})
})


// READ ALL PRODUCTS
productApp.get("/products", async (req,res)=>{

    const productsList = await ProductModel.find()
    res.status(200).json({message:"All Products",payload:productsList })

})


// READ PRODUCT BY productId
productApp.get("/products/:productId", async (req,res)=>{

    const pid = req.params.productId

    const product = await ProductModel.findOne({productId:pid})

    if(!product){
        return res.status(404).json({message:"Product Not Found"})
    }

    res.status(200).json({message:"Product Found",payload:product})

})


// UPDATE PRODUCT
productApp.put("/products/:productId", async (req,res)=>{

    const pid = req.params.productId

    const modifiedProduct = req.body

    const updatedProduct = await ProductModel.findOneAndUpdate({productId:pid},{$set:{...modifiedProduct}},{new:true,runValidators:true})

    if(!updatedProduct){
        return res.status(404).json({message:"Product Not Found"})
    }

    res.status(200).json({message:"Product Updated",payload:updatedProduct })

})


// DELETE PRODUCT
productApp.delete("/products/:productId", async (req,res)=>{

    const pid = req.params.productId

    const deletedProduct = await ProductModel.findOneAndDelete({productId:pid})

    if(!deletedProduct){
        return res.status(404).json({message:"Product Not Found"})
    }

    res.status(200).json({ message:"Product Deleted",payload:deletedProduct})

})