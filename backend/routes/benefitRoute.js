import express from "express";

import {  createBenefit, deleteBenefit, enrollBenefit, getBenefit, getBenefitsEnrolled, updateBenefit } from "../controller/benefitController.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/create-benefits",verifyToken,checkRole('manager'),createBenefit);
router.get("/get-benefits",verifyToken,getBenefit);
router.put("/update-benefits/:id",verifyToken,checkRole('manager'),updateBenefit);
router.delete("/delete-benefits/:id",verifyToken,checkRole('manager'),deleteBenefit);

router.post("/enroll-benefits",verifyToken,enrollBenefit);
router.get('/enrolled-benefits', verifyToken, getBenefitsEnrolled);

export default router;

    