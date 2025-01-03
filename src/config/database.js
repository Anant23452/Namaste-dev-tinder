const mongoose = require('mongoose');

const connectDb = async () => 
{
    await mongoose.connect(
   "mongodb+srv://namastedev:anant231216@devtinder.fw8ol.mongodb.net/"

    );
}

  module.exports = connectDb;