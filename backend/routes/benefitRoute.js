import express from "express";

import { createBenefit, getBenefit } from "../controller/benefitController.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/create-benefits",verifyToken,checkRole('manager'),createBenefit);
router.get("/get-benefits",verifyToken,checkRole('manager'),getBenefit);

export default router;

