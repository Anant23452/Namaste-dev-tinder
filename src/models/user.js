//making schema
const mongoose = require("mongoose");
const userSchema =mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
});
//creating user models
const user =mongoose.model('user',userSchema);
// const User=mongoose
// .Schema("User",userSchema);
module.exports = user;