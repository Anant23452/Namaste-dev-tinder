console.log("Dev tider is running");
const express= require("express");
const app = express();

// this will use all api call form this route it include all http methods 
app.delete("/hello",(req,res)=>{
    res.send("hello world from hellow page");
})
app.post("/test",(req,res)=>{
    res.send("this is test page");
})
app.get("/test",(req,res)=>{
    res.send("this is test page");
})
app.use("/",(req,res)=>{
    res.send("hellow world main page");
})
app.listen(3000);