import express from "express";
const router = express.Router();
import { createProduct, getProducts } from "../controller/productController.js";

router.route("/createProduct").post(createProduct);
router.route("/getProducts").get(getProducts);

export default router;
