const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    // TODO: Replace with YOUR MongoDB connection string
    // For local MongoDB: "mongodb://localhost:27017/devTinder"
    // For MongoDB Atlas: "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/devTinder"
    "mongodb+srv://apatelit202324_db_user:lx7dhxCEzPl2OEk7@cluster0.4f8kx4w.mongodb.net/"
  );
};

module.exports = connectDB;
