import {Schema,model} from "mongoose";
const productSchema = new Schema({
   
    productId:{
        type:Number,
        required:[true,"productId is required"],
    },
    productName:{
        type:String,
        required:[true,"productName required"],
    },
    price:{
        type:Number,
        required:[true,"price required"],
        min:[10000,"min price 10000"],
        max:[50000,"max price 500000"]
    },
    brand:{
        type:String,
        required:[true,"brand required"]
    },
   },
    {
      versionKey:false,
      timestamps:true,
    },
);

//generate productModel
export const ProductModel = model("product",productSchema)