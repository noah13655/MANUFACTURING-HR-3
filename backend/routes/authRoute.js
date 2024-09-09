import express from "express";

import { checkAuth, login, logout } from "../controller/authController.js";
import { loginValidation, validate } from "../middleware/validationMiddleware.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/login",loginValidation,validate,login);

router.get('/check-auth', verifyToken, checkAuth);

router.post("/logout",logout);

export default router