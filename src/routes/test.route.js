import { Router } from "express";
import { addData, getDataById } from "../controllers/test.controller.js";

const router = Router();

router.route("/").post(addData);
router.route("/:id").get(getDataById);

export default router;
