const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    // TODO: Replace with YOUR MongoDB connection string
    // For local MongoDB: "mongodb://localhost:27017/devTinder"
    // For MongoDB Atlas: "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/devTinder"
    "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
