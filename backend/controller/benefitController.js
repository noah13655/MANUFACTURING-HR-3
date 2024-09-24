import { Benefit } from "../model/benefitModel.js";
import mongoose from "mongoose";

export const createBenefit = async (req,res) => {
    try {
        const {benefitsName,benefitsDescription,benefitsType} = req.body;
        if(!benefitsName ||!benefitsDescription ||!benefitsType){
            return res.status(400).json({status:false,message:"All fields required!"});
        }
        const benefitsExist = await Benefit.findOne({benefitsName});
        if(benefitsExist){
            return res.status(400).json({status:false,message:"Benefits already exist!"});
        }
        const benefit = new Benefit({
            benefitsName,
            benefitsDescription,
            benefitsType
        });
        await benefit.save();
        res.status(201).json({status:true,message:"Benefit created successfully!"});
    } catch (error) {
        console.log(`Error in login ${error}`);
        return res.status(500).json({success:false,message:"Server error"});
    }
};

export const getBenefit = async (req,res) => {
    try {
        const benefits = await Benefit.find({});
        res.status(200).json({status:true,benefits})
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateBenefit = async (req,res) => {
    try {
        const { id } = req.params;
        const {benefitsName,benefitsDescription,benefitsType} = req.body;

        if (!benefitsName ||!benefitsDescription ||!benefitsType) {
            return res.status(400).json({status:false,message:"All fields required!"});
        }
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ status: false, message: "Invalid benefit ID format." });
        }
        const benefit = await Benefit.findByIdAndUpdate(id);
        if (!benefit) {
            return res.status(404).json({status:false,message:"Benefit not found!"});
        }

        // Only update fields if they have changed
        if (benefit.benefitsName !== benefitsName || 
            benefit.benefitsDescription !== benefitsDescription || 
            benefit.benefitsType !== benefitsType) {
            benefit.benefitsName = benefitsName;
            benefit.benefitsDescription = benefitsDescription;
            benefit.benefitsType = benefitsType;
            await benefit.save();
            res.status(200).json({ status: true, message: "Benefits updated successfully!", updatedBenefit: benefit });
        } else {
            res.status(200).json({ status: true, message: "No changes detected, benefit remains unchanged.", updatedBenefit: benefit });
        }
    } catch (error) {
        console.error("Error updating benefit:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const deleteBenefit = async (req, res) => {
    try {
        const {id} = req.params;

        if(!mongoose.isValidObjectId(id)) {
            return res.status(400).json({status:false,message:"Invalid benefit ID format."});
        }
        const benefit = await Benefit.findByIdAndDelete(id);
        if (!benefit) {
            return res.status(404).json({status: false,message:"Benefit not found!"});
        }

        res.status(200).json({status:true,message:"Benefit deleted successfully!"});
        
    } catch (error) {
        console.error("Error deleting benefit:",error);
        res.status(500).json({success:false, message:"Server error"});
    }
};
