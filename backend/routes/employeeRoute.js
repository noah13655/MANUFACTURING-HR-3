import express from 'express';
import { changePassword, fetchMyData, registerUser} from '../controller/employeeController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { changePasswordValidation, registerValidation, validate } from '../middleware/validationMiddleware.js';

const employeeRoute = express.Router();

employeeRoute.post("/register",registerValidation,validate,registerUser);
employeeRoute.get("/fetch",verifyToken,fetchMyData);
employeeRoute.put("/change-password",verifyToken,changePasswordValidation,validate, changePassword);

export default employeeRoute;