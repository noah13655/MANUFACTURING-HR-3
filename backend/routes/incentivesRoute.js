import express from "express";


import { verifyToken } from "../middleware/verifyToken.js";
import { checkRole } from "../middleware/roleMiddleware.js";

import { createIncentive, deleteIncentive, getIncentive, updateIncentive } from "../controller/incentiveController.js";

const router = express.Router();

router.post("/create-incentives",verifyToken,checkRole('Manager'),createIncentive);
router.get("/get-incentives",verifyToken,getIncentive);
router.put("/update-incentives/:id",verifyToken,checkRole('Manager'),updateIncentive);
router.delete("/delete-incentives/:id",verifyToken,checkRole('Manager'),deleteIncentive);

export default router;

    