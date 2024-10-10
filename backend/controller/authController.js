import bcryptjs from 'bcryptjs';
import { User } from "../model/userModel.js";
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import jwt from 'jsonwebtoken';

export const login = async (req,res) => {
    const token = req.cookies.token;
    const {email,password} = req.body;

    try {
    if(token){
        return res.status(400).json({message:"You are already login"});
    }
    const user = await User.findOne({ email });
    if(!user){
        return res.status(400).json({success:false,message:"Username or password is incorrect"});
    }
    const isPasswordValid = await bcryptjs.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({success:false,message:"Username or password is incorrect"});
    }
    generateTokenAndSetCookie(res,user._id,user.role);
        res.status(200).json({success:true,message:"Log in successfully",role:user.role});
    } catch (error) {
        console.log(`Error in login ${error}`);
        return res.status(500).json({success:false,message:"Server error"});
    }
};

export const checkAuth = async (req, res) => {
    try {
        const token = req.cookies.token; 
        if (!token) {
            return res.status(401).json({ success: false, message: "No token found" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId); 

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, user });
    } catch (error) {
        console.error("Error in checkAuth:", error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: "Invalid token" });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: "Token expired" });
        } else {
            return res.status(500).json({ success: false, message: "Server error" });
        }
    }
};

export const logout = async (req, res) => {
    try {
        if (!req.cookies.token) {
            return res.status(400).json({ success: false, message: "You are not logged in" });
        }

        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        return res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ success: false, message: "Server error during logout" });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'firstName lastName email role');
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const registerUser = async (req,res) => {
    try {
        const {position,lastName,firstName,middleName,email,phoneNumber,address,gender,bDate} = req.body;
        const {street,municipality,province,postalCode,country} = address  || {};

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({status:false,message:"User already exist!"});
        }
        const password = `#${lastName.charAt(0).toUpperCase()}${lastName.charAt(1).toLowerCase()}HR3`;
        const hashedPassword = await bcryptjs.hash(password,10);

        const user = new User({
            position,
            lastName,
            firstName,
            middleName,
            email,
            password:hashedPassword,
            phoneNumber,
            address:{
                street,
                municipality,
                province,
                postalCode,
                country
            },
            gender,
            bDate,
        });
        await user.save();
        res.status(201).json({status:true,message:"User registered successfully!",user});
    } catch (error) {
        console.log(`Error in register ${error}`);
        return res.status(500).json({message:"Server error!"});
    }
};