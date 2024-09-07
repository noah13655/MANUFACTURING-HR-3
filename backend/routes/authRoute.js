import express from "express";

import { login } from "../controller/authController.js";
import { loginValidation, validate } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/login",loginValidation,validate,login);

export default router