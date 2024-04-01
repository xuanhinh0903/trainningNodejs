import * as dotenv from "dotenv";

import { db } from "../../configs";
import mongoose from "mongoose";

dotenv.config();
export const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
