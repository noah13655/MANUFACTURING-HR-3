import { RequestedSalary } from '../model/payroll/requestedSalaryModel.js';
import {io} from '../index.js';
import { User } from '../model/userModel.js';

export const requestSalary = async (req,res) => {
    try {
        const {requestedAmount,paymentMethod,gCashNumber} = req.body;
        if(!req.user || !req.user._id){
            console.log(req.user);
            console.log(req.user._id);
            return res.status(401).json({message:'User not authenticated.'});
        }
        if(!requestedAmount || !paymentMethod){
            return res.status(400).json({message:'All fields are required.'});
        }
        console.log("User ID:", req.user._id);
        const requestSalary = new RequestedSalary({
            employeeId:req.user._id,
            requestedAmount,
            paymentMethod,
            gCashNumber: paymentMethod === 'GCash' ? gCashNumber : null,
        });
        await requestSalary.save();
        
        io.emit('requestSalaryCreated', {message:'Salary request created successfully.',requestSalary});
        
        // const managers = await User.find({ role: 'Manager' });
        // const managerIds = managers.map(manager => manager._id);

        // io.to(managerIds).emit('requestSalaryCreated', {
        //     message: 'A salary request has been created.',
        //     requestSalary
        // });

        return res.status(201).json({message:'Salary request created successfully.',requestSalary});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Server error.',error: error.message});
    }
};

export const getRequestedSalary = async (req,res) => {
    try {
        const requestedSalaries = await RequestedSalary.find();
        console.log("Requested Salaries:", requestedSalaries);
        res.status(200).json({sucess:true,data:requestedSalaries});
    } catch (error) {
        console.log(`error in getting salary requests ${error}`);
        res.status(500).json({success:false,message:"Server error",error:error.message});
    }
};

export const getMyRequestedSalary = async (req, res) => {
    try {
        if(!req.user || !req.user._id){
            return res.status(401).json({message:'User not authenticated.'});
        }

        const myRequestedSalaries = await RequestedSalary.find({employeeId:req.user._id});
        console.log("My Requested Salaries:", myRequestedSalaries);
        
        res.status(200).json({success:true,data:myRequestedSalaries});
    } catch (error) {
        console.log(`Error in getting my salary requests ${error}`);
        res.status(500).json({success:false,message:"Server error",error: error.message});
    }
};