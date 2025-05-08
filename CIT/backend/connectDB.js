const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

if (!process.env.mongoURI) {
  throw new Error("Please provide MONGODB_URI in the .env file");
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
