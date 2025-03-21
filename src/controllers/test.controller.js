import asyncHandler from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import Test from "../models/test.model.js";

export const addData = asyncHandler(async (req, res) => {
  const records = await Product.findAll();
  const record = await Test.create({
    metadata: records.map((record) => ({
      id: record.get("id"),
      qty: record.get("price") / 10,
    })),
  });
  console.log(record);
});

export const getDataById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const record = await Test.findByPk(id);
  console.log(record.get("metadata"));
});
