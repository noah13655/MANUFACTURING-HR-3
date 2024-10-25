import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import csrfProtection from 'csurf';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

import { connectDB } from "./config/db.js";
import authRoute from './routes/authRoute.js';
import benefitRoute from './routes/benefitRoute.js';
import incentiveRoute from './routes/incentivesRoute.js';
import compensationRoute from './routes/compensationRoute.js';
import employeeRoute from "./routes/employeeRoute.js";
import payrollRoute from "./routes/payrollRoute.js";
import notificationRoute from "./routes/notificationRoute.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 7687;
const __dirname = path.resolve();

const csrf = csrfProtection({ cookie: true });
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.NODE_ENV === "production" 
            ? "https://hr3-jjm-manufacturing-1p4f.onrender.com" 
            : "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    }
});


app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? "https://hr3-jjm-manufacturing-1p4f.onrender.com/"
        : "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", csrf, authRoute);
app.use("/api/employee", csrf, employeeRoute);
app.use("/api/benefit", csrf, benefitRoute);
app.use("/api/incentive", csrf, incentiveRoute);
app.use("/api/compensation",csrf, compensationRoute);
app.use("/api/payroll",csrf, payrollRoute);
app.use("/api/notification",notificationRoute);

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

io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

export { io };

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
