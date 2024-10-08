import express from "express";

import { checkAuth, getUsers, login, logout, registerUser } from "../controller/authController.js";
import { loginValidation, registerValidation, validate } from "../middleware/validationMiddleware.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/login",loginValidation,validate,login);

router.get('/check-auth', verifyToken, checkAuth);
router.get('/users', verifyToken,checkRole('manager'), getUsers);

router.post("/logout",verifyToken,logout);
router.post("/register",verifyToken,registerValidation,validate,registerUser);

export default router