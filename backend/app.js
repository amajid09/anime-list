import express from "express";
import animeRouter from "./routes/animeRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import { BlobServiceClient } from "@azure/storage-blob";
const app = express();
import "dotenv/config.js";

const mongodbUri = process.env.MONGODB_URI;

app.use(cors());
mongoose.connection.on("connected", () => {
  app.listen(3000, () => {
    console.log("App is running on http://localhost:3000");
  });
});


mongoose.connect(mongodbUri);

app.use("/", animeRouter);
// 404 page
app.use((req, res) => {
  res.status(404).json({ error: "Bad Request" });
});
