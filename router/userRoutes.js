import express from "express";
import { login, signp } from "../controller/userController.js";
const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signp);

export default router;
