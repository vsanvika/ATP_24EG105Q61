import exp from 'express';
import {connect} from 'mongoose';
import {productApp} from "./ProductAPI.js";

const app=exp()
app.use(exp.json())
app.use("/product-api",productApp)

async function connectDB(){
try{
    await connect("mongodb://localhost:27017/MyDb1")
    console.log("DB connection success")

    //start server
app.listen(4000,()=>console.log("server on port 4000..."))
}catch(err){
    console.log("err in db connection")
}
}
connectDB()