import express from "express";
import mongoose from "mongoose";
import { Item } from "../models/itemModel.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(express.json())

// const connectionString = process.env.MONGODB_URI || "";
const connectionString = process.env.MONGODB_URI || "";


app.get("/", (req, res) => {
  res.send("Welcome to express hosted on vercel")
})

app.get("/po", (req, res) => {
  res.send("Po?")
})

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find({})
    res.status(200).json(items);
  } catch (error) {
    console.log(error)
  }
})


mongoose.connect(connectionString)
.then(() => {
  console.log("App is connected to database")
  app.listen(3000 || process.env.PORT, () => {
    console.log("Server is listenning on port 3000")
  })
})
.catch((error) => {
  console.log(error)
})


export default app;