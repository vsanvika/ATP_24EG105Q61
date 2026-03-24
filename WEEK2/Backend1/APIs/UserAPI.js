//create mini=express app(seperate route)
import exp from 'express'
export const userApp=exp.Router()


let users=[]

userApp.get('/users',(req,res)=>{
    //send res to Client
    //res.json({message:"This res for get users req"})
    res.json({message:"all users",payload:users})
})

userApp.get('/users/:id',(req,res)=>{
    //get user from param
   let idd=Number(req.params.id )
   //find user
   let user=users.find(userObj=>userObj.id===idd)
   //if user not found
   if(user===undefined){
    return res.json({message:"user not found"})
   }
     res.json({message:"a user",payload:user})
   
   /*
   let index=users.findIndex(userObj=>userObj.id===idd)
   if(index===-1){
    return res.json({message:"user not found"})
   }
   return res.json(users[index])
   */
})
//route to handle POST request of client
userApp.post('/users',(req,res)=>{
    //SEND RES TO CLIENT
    //res.json({message:"this res for create user"})

    //get user from client
    const newUser=req.body
    //push users into users
    users.push(newUser)
    res.json({message:"user created"})
    //console.log(req.body)

})
//route to handle PUT request of client
userApp.put('/users',(req,res)=>{
    //res.json({message:"this res for update user"})

    //get modified user from client{}
    let modifiedUser=req.body
    //get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //if user not found
    if(index===-1){
        return res.json({message:"user not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send response
    res.json({message:"user updated"})
})
//route to handle DELETE request of client
userApp.delete('/users/:id',(req,res)=>{   //id is a url parameter to recieve the argument
   // res.json({message:"this res for delete user"})

   //get id of user from url parameter
  let idOfUrl=Number(req.params.id ) //returns object {x :3}
   //find index of user
   let index=users.findIndex(userObj=>userObj.id===idOfUrl)
   //if user not found
   if(index===-1){
    return res.json({message:"user not found"})
   }
   //delete user by index
   users.splice(index,1)
   //send res
   res.json({message:"user removed"})
})

//endpoint-connect to a particular route
//post req and put requests should send data to the API as the body of the request object
//get and delete requests don not support body of the request object.so that these two request can send data through end point


