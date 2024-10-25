import express from "express";
import { getMyRequestedSalary, getRequestedSalary, requestSalary } from "../controller/payrollDistributionController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const payrollRoute = express.Router();

payrollRoute.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

payrollRoute.post("/request-salary",verifyToken,requestSalary);
payrollRoute.get("/get-requested-salary",verifyToken,getRequestedSalary);
payrollRoute.get("/get-my-requested-salary",verifyToken,getMyRequestedSalary);

export default payrollRoute