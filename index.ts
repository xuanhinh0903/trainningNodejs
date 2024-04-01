import * as dotenv from "dotenv";

import express, { Application, Request, Response } from "express";
import { productSchema, userSchema } from "./api/models";

import { connectDB } from "./api/db";

dotenv.config();

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Fire at http://localhost:${process.env.PORT}`);
});
