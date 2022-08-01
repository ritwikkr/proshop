import Product from "../model/productSchema.js";

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.json(product);
    // res.json(req.body);
  } catch (error) {
    // console.log(error);
    res.status(401).json(error);
  }
}

async function getProducts(req, res) {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(401).json(error);
  }
}

export { createProduct, getProducts };
