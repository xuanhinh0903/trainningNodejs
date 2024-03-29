import * as dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();
const db = `mongodb+srv://hinhbx:tkWqGIQqeHcSJHi7@cluster0.bxzbcwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL || db);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
