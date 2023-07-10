const express = require("express");
const router = express.Router();
const userSchema = require('../models/user');

//create user
router.post("/users", async (req, res) => {
  const user = userSchema(req.body)  
  try{
    const data = await user.save()
    res.json({ status : 'success ', info :  data } )
  }catch(err){
    res.json({status : 'fail' , message : "Error saving user" , info : err})
  }
});

//get all users
router.get("/users", async (req, res) => {
  try{
    const allUsers = await userSchema.find()
    res.json({ status : 'success ', users : allUsers  } )
  }catch(err){
    res.json({status : 'fail' , message : "Error Getting all users" , info : err})
  }
})

//get a User by id
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const user = await userSchema.findById(id)
    res.json({ status : 'success ', user : user  } )
  }catch(err){
    res.json({status : 'fail' , message : "Error getting user by id" + id , info : err})
  }
})

//get a User by id
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const user = await userSchema.findById(id)
    res.json({ status : 'success ', user : user  } )
  }catch(err){
    res.json({status : 'fail' , message : "Error getting user by id" + id , info : err})
  }
})

//update a User
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name , age , email } = req.body
  try{
    const user = await userSchema.updateOne({ _id : id } , { $set : { name , age , email }})
    res.json({ status : 'success ', info : user  } )
  }catch(err){
    res.json({status : 'fail' , message : "Error updating user by id" + id , info : err})
  }
})

//delete a User
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const user = await userSchema.deleteOne({ _id : id })
    res.json({ status : 'success ', info : user  } )
  }catch(err){
    console.log(err)
    res.json({status : 'fail' , message : "Error deleting user by id" + id , info : err})
  }
})



module.exports = router;
