console.log("Dev tider is running");
const express= require("express");
const app = express();

// this will use all api call form this route it include all http methods 
// app.delete("/delete",(req,res)=>{
//     res.send("delete to hellow world");
// })
// app.post("/test",(req,res)=>{
//     res.send("this is test page");
// })
// app.get("/user/:userid/:name/:password",(req,res)=>{
//     console.log(req.params);
//     res.send("this is hello get");
// });

// Agar ek hi route me  ek se jyada route handler ho tab kya goga :(

app.use("/user",
    (req,res,next)=>{
        console.log("first route started running");
    res.send("Route handlers first");
    next();
    },
    (req,res)=>{
        console.log("Second route started running");
        res.send("Route handlers second");
    }
     
)

// Multiper route handling 

app.use("/user",
    (req,res,next)=>{
        console.log("first route started running");
        // next();
        res.send("Route handlers first");
        // next();
    },
    (req,res,next)=>{
        console.log("Second route started running");
        res.send("Route handlers second");
        next();
    }
    ,[
        (req,res,next)=>{
            console.log("third route started running");
            res.send("Route handlers third");
            next();
        },
        (req,res,next)=>{
            console.log("fourth route started running");
            res.send("Route handlers fourth");
        }
    ]
);











app.use("/",(req,res)=>{
    res.send("Route handlers");
})
app.listen(3000);