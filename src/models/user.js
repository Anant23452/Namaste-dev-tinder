const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    }
});

//creating user model
const User = mongoose.model('User', userSchema);

module.exports = User;