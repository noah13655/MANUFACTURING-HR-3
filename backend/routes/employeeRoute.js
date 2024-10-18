import express from 'express';
import { changePassword, fetchMyData, registerUser, resendVerification, verifyAccount} from '../controller/employeeController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { changePasswordValidation, registerValidation, resendVerificationValidation, validate } from '../middleware/validationMiddleware.js';

const employeeRoute = express.Router();

employeeRoute.post("/register",verifyToken,registerValidation,validate,registerUser);
employeeRoute.get("/fetch",verifyToken,fetchMyData);
employeeRoute.put("/change-password",verifyToken,changePasswordValidation,validate, changePassword);
employeeRoute.put("/verify-account/:token",changePasswordValidation,verifyAccount);
employeeRoute.post('/resend-verification',resendVerificationValidation,validate, resendVerification);

export default employeeRoute;