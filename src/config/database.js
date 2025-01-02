const mongoose = require('mongoose');

const connectDb = async () => 
{
    await mongoose.connect(
   "mongodb+srv://namastedev:anant231216@devtinder.fw8ol.mongodb.net/sample_mflix"
    );
}
    connectDb()
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.error("Error connecting to MongoDB: ");
    });