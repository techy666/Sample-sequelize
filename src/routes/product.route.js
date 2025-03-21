import { Router } from "express";
import {
  createProduct,
  getProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/").post(createProduct);
router.route("/:id").get(getProduct);

export default router;
