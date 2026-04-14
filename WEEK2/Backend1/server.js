//create HTTP server
import exp from 'express'
const app=exp()//express application internally contains the http server
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"

//use body parser middleware(in-built)
app.use(exp.json()) //extracting body of the request object

//create custom middleware
/*function middleware1(req,res,next){
    //send res from middleware
    res.json({message:"this res from middleware"})
    //forward req to next
    console.log("middleware executed")
    next()
    //if there is no req or nest client will be going to infinite waiting state
}
function middleware2(req,res,next){
    //send res from middleware
    //res.json({message:"this res from middleware"})
    //forward req to next
    console.log("middleware executed")
    next()
}
    

//use middleware1
app.use(middleware1)
app.use(middleware2)*/

//forward req to userAPI if path starts with /user-api
app.use('/user-api',userApp)

app.use('/product-api',productApp)

//set a port number
const port=3000
//assign port no to http server
app.listen(port , () => console.log(`server listening on port ${port}...`))
//http server is a software which installed in other computer is web server


//create API (REST API - Representational state transfer)
// API enable interactions with application
//STRUCTURE OF ROUTE-app.METHOD(path,request handler)

//route to handle GET request of client(http://localhost:3000/users)url-path should be a noun but not a verb
//empty browser takes get by default
