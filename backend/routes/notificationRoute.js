import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getNotifications, markAsRead } from "../controller/notificationController.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const notificationRoute = express.Router();

notificationRoute.get("/get-notifications",verifyToken,checkRole("Manager"),getNotifications);
notificationRoute.put("/mark-as-read/:notificationId",verifyToken,checkRole("Manager"),markAsRead);

export default notificationRoute