import asyncHandler from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";

export const createProduct = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  await Product.create({ name, price });
  return res.send("Record added successfully");
});

export const getProduct = asyncHandler(async (req, res) => {
  const records = await Product.findAll();
  console.log(records.map((record) => record.dataValues));
  return res.send("Records fetched");
});
