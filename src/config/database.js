const mongoose = require('mongoose');

const connectDb = async () => 
{
    await mongoose.connect(
   "mongodb+srv://imagine231216_db_user:8ShbD0zYCBNUBQDU@cluster0.ktd7iqz.mongodb.net/devtinder"

    );
}

  module.exports = connectDb;