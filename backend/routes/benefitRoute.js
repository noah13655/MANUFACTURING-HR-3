import express from "express";

import {  createBenefit, deleteBenefit, enrollBenefit, getBenefit, getBenefitsEnrolled, updateBenefit } from "../controller/benefitController.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const benefitRoute = express.Router();

benefitRoute.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

benefitRoute.post("/create-benefits",verifyToken,checkRole('Manager'),createBenefit);
benefitRoute.get("/get-benefits",verifyToken,getBenefit);
benefitRoute.put("/update-benefits/:id",verifyToken,checkRole('Manager'),updateBenefit);
benefitRoute.delete("/delete-benefits/:id",verifyToken,checkRole('Manager'),deleteBenefit);

benefitRoute.post("/enroll-benefits",verifyToken,enrollBenefit);
benefitRoute.get('/enrolled-benefits', verifyToken, getBenefitsEnrolled);

export default benefitRoute;

    