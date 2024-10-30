import express from 'express';
import { changePassword,changeRole, fetchMyData, forgotPassword, registerUser, resendVerification, resetPasswordWithOTP, verifyAccount} from '../controller/employeeController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { changePasswordValidation, changeRoleValidation, forgotPasswordValidation, registerValidation, resendVerificationValidation, resetPasswordOtpValidation, validate } from '../middleware/validationMiddleware.js';

const employeeRoute = express.Router();

employeeRoute.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

employeeRoute.post("/register",verifyToken,registerValidation,validate,registerUser);
employeeRoute.get("/fetch",verifyToken,fetchMyData);
employeeRoute.put("/change-password",verifyToken,changePasswordValidation,validate, changePassword);
employeeRoute.put("/verify-account/:token",changePasswordValidation,verifyAccount);
employeeRoute.post('/resend-verification',resendVerificationValidation,validate, resendVerification);
employeeRoute.post('/forgot-password',forgotPasswordValidation,validate,forgotPassword);
employeeRoute.post('/reset-password-otp',resetPasswordOtpValidation,validate,resetPasswordWithOTP);

employeeRoute.put('/change-role/:id',verifyToken,changeRoleValidation,validate,changeRole);

export default employeeRoute;