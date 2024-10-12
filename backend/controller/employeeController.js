import { User } from "../model/userModel.js";
import bcryptjs from 'bcryptjs';

export const fetchMyData = async (req,res) => {
    try {
        const userData = req.user;
        const user = await User.findById(userData);
        if(!user){
            return res.status(404).json({status:false,message:"User not found!"});
        }
        // console.log(user)
        res.status(200).json({status:true,user});
    } catch (error) {
        console.log(`Error in fetching user Data ${error}`);
        return res.status(500).json({message:"Server error!"});
    }
};

export const registerUser = async (req,res) => {
    try {
        const {position,lastName,firstName,middleName,email,phoneNumber,address,gender} = req.body;
        let bDate = req.body.bDate;
        const {street,municipality,province,postalCode,country} = address  || {};

        const format = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        //for name
        const formattedLastName = format(lastName);
        const formattedFirstName = format(firstName);
        const formattedMiddleName = format(middleName);
        //for address
        const formattedStreet = format(street);
        const formattedMunicipality = format(municipality);
        const formattedProvince = format(province);
        const formattedPostalCode = format(postalCode);
        const formattedCountry = format(country);

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({status:false,message:"User already exist!"});
        }
        const password = `#${lastName.charAt(0).toUpperCase()}${lastName.charAt(1).toLowerCase()}HR3`;
        const hashedPassword = await bcryptjs.hash(password,10);

        const employeePositions = ['CEO', 'Secretary', 'Production Head', 'Resellers Sales Head', 'Reseller'];
       let role;
       if(position === "Manager"){
           role = "Manager";
       }else if(employeePositions.includes(position)){
           role = "Employee";
       }else{
           role = req.body.role;
       }
       if(role === "Employee" && position === "Manager"){
           return res.status(400).json({status:false,message:"Conflicting role and position!"});
       }
        const user = new User({
            position,
            lastName:formattedLastName,
            firstName:formattedFirstName,
            middleName:formattedMiddleName,
            email,
            password:hashedPassword,
            phoneNumber,
            address:{
                street:formattedStreet,
                municipality:formattedMunicipality,
                province:formattedProvince,
                postalCode:formattedPostalCode,
                country:formattedCountry
            },
            gender,
            bDate,
            role,
        });
        await user.save();
        res.status(201).json({status:true,message:"User registered successfully!",user});
    } catch (error) {
        console.log(`Error in register ${error}`);
        return res.status(500).json({message:"Server error!"});
    }
};

export const changePassword = async (req, res) => {
    try {
        const {currentPassword,newPassword} = req.body;
        const userId = req.user;

        console.log("Request body:",req.body);
        console.log("User ID:",userId);

        if(!userId){
            return res.status(401).json({status:false,message:"Unauthorized: User ID is missing."});
        }

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({status:false,message:"User not found."});
        }
        const currentTime = new Date();
        const lastChangeTime = new Date(user.lastPasswordChange);
        const timeDifference = (currentTime - lastChangeTime) / (1000 * 60);
    
        if (timeDifference < 5) {
          return res.status(400).json({ error: `You can change your password only after ${Math.ceil(5 - timeDifference)} minute(s).` });
        }

        const isCurrentPassword = await bcryptjs.compare(currentPassword, user.password);
        console.log("Is current password valid:", isCurrentPassword);
        if(!isCurrentPassword){
            return res.status(400).json({status:false,message:"Current password is incorrect."});
        }

        const isOldPassword = await bcryptjs.compare(newPassword,user.password);
        if(isOldPassword){
            return res.status(400).json({status:false,message:"New password cannot be the same as the old password."});
        }

        const hashedPassword = await bcryptjs.hash(newPassword,10);
        user.password = hashedPassword;
        user.lastPasswordChange = currentTime;
        await user.save();

        return res.status(200).json({status:true,message:"Password changed successfully",user});
    } catch (error) {
        console.error(`Error changing password: ${error}`);
        return res.status(500).json({status:false,message:"Server error"});
    }
};

