console.log("Dev tider is running");
const express= require("express");
const app = express();

// this will use all api call form this route it include all http methods 
app.delete("/delete",(req,res)=>{
    res.send("delete to hellow world");
})
app.post("/test",(req,res)=>{
    res.send("this is test page");
})
app.get("/user/:userid/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send("this is hello get");
});

app.use("/",(req,res)=>{
    res.send("hellow world main page");
})
app.listen(3000);