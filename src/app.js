console.log("Dev tider is running");
const express= require("express");
const app = express();
app.use((req,res)=>{
    res.send("hellow world");
})
app.listen(3000);