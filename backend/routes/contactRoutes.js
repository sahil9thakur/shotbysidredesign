import express from "express";
const router = express.Router();
import { sendEmailInquiry } from "../controllers/contactController.js";

router.route("/").post(sendEmailInquiry);

export default router;
