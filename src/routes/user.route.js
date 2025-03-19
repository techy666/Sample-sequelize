import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").patch(updateUser).delete(deleteUser);

export default router;
