const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type:String,
        min:6,
        max:30,
        required: true
    },
    lastName:{
        type:String,
        min:6,
        max:30,
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    skills: {
        type: [String],
    },
},{
    timestamps:true,
});

//creating user model
const User = mongoose.model('User', userSchema);

module.exports = User;