import bcryptjs from 'bcryptjs';
import { User } from "../model/userModel.js";
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';

export const login = async (req,res) => {
    const {email,password} = req.body;
    try {
    const user = await User.findOne({ email });
    if(!user){
        return res.status(400).json({success:false,message:"Username or password is incorrect"});
    }
    const isPasswordValid = await bcryptjs.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({success:false,message:"Username or password is incorrect"});
    }
    generateTokenAndSetCookie(res,user._id);
        res.status(200).json({success:true,message:"Log in successfully",role:user.role});
    } catch (error) {
        console.log(`Error in login ${error}`);
        return res.status(500).json({success:false,message:"Server error"});
    }
};

