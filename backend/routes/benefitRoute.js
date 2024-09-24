import express from "express";

import { createBenefit, deleteBenefit, getBenefit, updateBenefit } from "../controller/benefitController.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/create-benefits",verifyToken,checkRole('manager'),createBenefit);
router.get("/get-benefits",verifyToken,checkRole('manager'),getBenefit);
router.put("/update-benefits/:id",verifyToken,checkRole('manager'),updateBenefit);
router.delete("/delete-benefits/:id",verifyToken,checkRole('manager'),deleteBenefit);

export default router;

    