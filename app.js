console.log("Dev tider is running");
const express= require("express");
const app = express();
 const connectDb =require("./src/config/database")
 const User = require("./src/models/user")
 app.use(express.json());

 app.post("/signup", async (req,res,)=>{
    // console.log(req.body)
    // add data to database 
     const user = new User(req.body )
     
     try{
        await user.save();
     res.send("User registered successfully");
     }
     catch(error){
        res.status(404).send("erro saving the user in database");
     }




 })

 //find user by its's email address by getting the email address
 app.get("/user",async(req,res)=>{
    const Useremail= req.body.email;
    try{
        const user = await User.find({email:Useremail});
        if(user.length==0){
            res.status(404).send("User not found");
        }else  res.send(user);
        
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
 })
 //getting feed api from all user information on a feel of ui
 app.get("/feed",async(req,res)=>{
    try{
        const user= await User.find({});
        res.send(user);
        // console.log(user);
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
 })


 //getting delete api and delete user from all user information on a feel of ui
 app.delete("/user",async(req,res)=>{
    const UserId=req.body.userId;
    try{
      await User.findByIdAndDelete(UserId);
        // res.send(user);
         res.send("User deleted successfully");
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
 })
















connectDb()
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
     
    });
})
.catch((err)=>{
    console.error("Error connecting to MongoDB: ");
});

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
/*
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
*/

// Multiper route handling 

/*
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
*/


//why we use middleware and request handlers 
// hanle authorize middleware for get,post,put,patch,delete 
//Middleware brodly uses app.use()


/*
const {AuthMiddleware,userAuth} = require("./middlewares/auth");
app.use("/admin",AuthMiddleware);




app.get("/admin/getData",(req,res,next)=>{
    //logic of checking if req is authorized or not
    console.log("Admin route started running");
    res.send("Admin route handler");
   
})
app.get("/admin/deleteUser",(req,res,next)=>{
    //logic of checking if req is authorized or not
    console.log("AdminDelete route started running");
    res.send("Deleting the user");
   
})

app.use("/users",userAuth,(req,res,next)=>{
    console.log("users route started running");
    res.send("users route handler");
})
//main authetication nahi chahta login karte samay to middleware ka use nahi karege isme
app.use("/users/login",(req,res,next)=>{
    console.log("Login route started running");
    res.send("Login route handler");
})

*/

//Error handling middleware

/*
try{
    throw new Error("annat");
    res.send("user data send")
}
catch(err){
    res.status(500).send("Something went wrong from support --team");
}2


app.use("/",(err,req,res,next)=>{
    console.log("Error handling middleware started running");
    if(err){
        res.status(500).send("Something went wrong");
    }
    //this method is always at the end 

})

*/

app.use("/",(req,res,next)=>{
    res.send("User data send");
})