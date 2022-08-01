import express from "express";
const app = express();

// Embedding .env file
import dotenv from "dotenv";
dotenv.config();

// Connecting database
import connectDB from "./db/connectDB.js";

// Parsing body
app.use(express.json());

// Routes
import productRoute from "./router/productRoute.js";

app.use("/api/v1/product", productRoute);

function start() {
  const PORT = process.env.PORT || 5000;
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running at PORT:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
