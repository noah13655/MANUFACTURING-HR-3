import express from 'express';
import { changePassword, fetchMyData, registerUser, verifyAccount} from '../controller/employeeController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { changePasswordValidation, registerValidation, validate } from '../middleware/validationMiddleware.js';

const employeeRoute = express.Router();

employeeRoute.post("/register",verifyToken,registerValidation,validate,registerUser);
employeeRoute.get("/fetch",verifyToken,fetchMyData);
employeeRoute.put("/change-password",verifyToken,changePasswordValidation,validate, changePassword);
employeeRoute.put("/verify-account/:token",changePasswordValidation,verifyAccount);
export default employeeRoute;