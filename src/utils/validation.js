const validator = require("validator");
const validateSignUpdata = (req)=>{
    const {fistName, lastName,email,password} = req.body;
    if(!fistName||!lastName){
        throw new Error("First name and last name are required");
    }
    else if(firstName.lenght<4 || firstName.length>40){
        throw new Error("First name must be between 4 and 40 characters");
    }
    else if(!validator.isEmail(email)){
        throw new Error ("Email is invalid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Password is weak");
    }
}
module.exports = validateSignUpdata;