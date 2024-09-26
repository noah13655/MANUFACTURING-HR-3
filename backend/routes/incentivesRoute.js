import express from "express";


import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

import { createIncentive, deleteIncentive, getIncentive, updateIncentive } from "../controller/incentiveController.js";

const router = express.Router();

router.post("/create-incentives",verifyToken,checkRole('manager'),createIncentive);
router.get("/get-incentives",verifyToken,checkRole('manager'),getIncentive);
router.put("/update-incentives/:id",verifyToken,checkRole('manager'),updateIncentive);
router.delete("/delete-incentives/:id",verifyToken,checkRole('manager'),deleteIncentive);

export default router;

    