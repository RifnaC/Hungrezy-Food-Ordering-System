const productController = require("express").Router();
const Product = require("../model/Product");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/verifyToken");

//get all product
productController.get("/", async (req, res) => {
  console.log("Reaced");
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
});

//get all product
productController.get("/category", async (req, res) => {
  try {
    const products = await Product.find(req.query);
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
});
//get one Product
productController.get("/find/:id", verifyToken, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      return res.status(500).json({ msg: "No product with such id!" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
  }
});

//create product
productController.post("/", verifyTokenAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
  }
});

module.exports = productController;
