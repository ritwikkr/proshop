import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    // rating: { type: Number, required: true },
    // reviews: [],
    stock: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

export default mongoose.model("product", productSchema);
