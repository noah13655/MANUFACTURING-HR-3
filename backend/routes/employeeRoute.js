import express from 'express';
import { fetchMyData, registerUser } from '../controller/employeeController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { registerValidation, validate } from '../middleware/validationMiddleware.js';

const employeeRoute = express.Router();

employeeRoute.post("/register",registerValidation,validate,registerUser);
employeeRoute.get("/fetch",verifyToken,fetchMyData);

export default employeeRoute;