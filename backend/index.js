import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from "./config/db.js";

import authRoute from './routes/authRoute.js';
import benefitRoute from './routes/benefitRoute.js';
import incentiveRoute from './routes/incentivesRoute.js';
import employeeRoute from "./routes/employeeRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7687;

app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? "https://hr3.jjm-manufacturing.com"
        : "http://localhost:5173",
    credentials: true,
}));
  app.use(cookieParser());
app.use(express.json());

// app.get("/",(req,res) => {
//     const htmlForm = `<!DOCTYPE html>
// <html style="height:100%">
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
// <title> 503 Service Unavailable
// </title><style>@media (prefers-color-scheme:dark){body{background-color:#000!important}}</style></head>
// <body style="color: #444; margin:0;font: normal 14px/20px Arial, Helvetica, sans-serif; height:100%; background-color: #fff;">
// <div style="height:auto; min-height:100%; ">     <div style="text-align: center; width:800px; margin-left: -400px; position:absolute; top: 30%; left:50%;">
//         <h1 style="margin:0; font-size:150px; line-height:150px; font-weight:bold;">502</h1>
// <h2 style="margin-top:20px;font-size: 30px;">Bad Gateway
// </h2>
// <p>Sorry, the server is temporarily unable to handle your request.</p>
// <p>The server is temporarily busy, try again later!</p>
// </div></div></body></html>
// `
// ;
// res.status(502).send(htmlForm);
// });

app.use("/api/auth",authRoute);
app.use("/api/employee",employeeRoute);
app.use("/api/benefit",benefitRoute);
app.use("/api/incentive",incentiveRoute);

connectDB();

app.listen(PORT,() => {
    console.log(`Server is running PORT: ${PORT}`);
});
