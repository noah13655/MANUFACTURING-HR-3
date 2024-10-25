import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getNotifications } from "../controller/notificationController.js";

const notificationRoute = express.Router();

notificationRoute.get("/get-notifications",verifyToken,getNotifications);

export default notificationRoute