import express from "express";
import { addAddress, login, signup } from "../controller/userController.js";
const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/addAddress").put(addAddress);

export default router;
