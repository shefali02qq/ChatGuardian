// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log('MONGODB_URI:', process.env.MONGODB_URI);
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };
//console.log("here")
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

console.log(process.env);  // Log all environment variables to check if MONGODB_URI is there

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the URI for debugging
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};