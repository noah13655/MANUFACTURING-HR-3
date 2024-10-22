import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import csrfProtection from 'csurf';
import path from 'path';

import { connectDB } from "./config/db.js";
import authRoute from './routes/authRoute.js';
import benefitRoute from './routes/benefitRoute.js';
import incentiveRoute from './routes/incentivesRoute.js';
import compensationRoute from './routes/compensationRoute.js';
import employeeRoute from "./routes/employeeRoute.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 7687;
const __dirname = path.resolve();
app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? "https://hr3-jjm-manufacturing-1p4f.onrender.com/"
        : "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

const csrf = csrfProtection({ cookie: true });

app.use("/api/auth", csrf, authRoute);
app.use("/api/employee", csrf, employeeRoute);
app.use("/api/benefit", csrf, benefitRoute);
app.use("/api/incentive", csrf, incentiveRoute);
app.use("/api/compensation",csrf, compensationRoute);

app.use((req, res, next) => {
    if(req.method === "POST"){
        const csrfToken = req.headers['csrf-token'];
        if(!csrfToken || csrfToken !== req.csrfToken()){
            return res.status(403).json({success:false,message:'Invalid CSRF token'});
        }
    }
    next();
});

if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
