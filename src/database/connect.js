const mongoose = require("mongoose");
const { MONGODBURI } = require("../helpers/constants");
const connectDB = async  () => {
  //MongoDB connection
  try{
    await mongoose.connect(MONGODBURI)
    console.log("Connected")
  }catch(err){
    console.log("Error: " + err)
  }
}

module.exports = connectDB;
