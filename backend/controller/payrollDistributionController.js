import { RequestedSalary } from '../model/payroll/requestedSalaryModel.js';
import {io} from '../index.js';
import { User } from '../model/userModel.js';
import { Notification } from '../model/notificationModel.js';

export const requestSalary = async (req, res) => {
    try {
        const {requestedAmount,paymentMethod,gCashNumber} = req.body;

        if(!req.user || !req.user._id){
            return res.status(401).json({message:'User not authenticated.'});
        }

        if(!requestedAmount || !paymentMethod){
            return res.status(400).json({message:'All fields are required.'});
        }

        const requestSalary = new RequestedSalary({
            employeeId: req.user._id,
            requestedAmount,
            paymentMethod,
            gCashNumber: paymentMethod === 'GCash' ? gCashNumber : null,
        });
        await requestSalary.save();

        const managers = await User.find({ role: 'Manager' });
        const managerIds = managers.map(manager => manager._id);
        const employeeLastName = req.user.lastName || "Employee";

        for (const managerId of managerIds) {
            const notification = new Notification({
                userId: managerId,
                message: `A salary request has been created by ${employeeLastName}`,
            });

            await notification.save();
        }
        io.to(managerIds).emit('requestSalaryCreated', {
            message: `A salary request has been created by ${employeeLastName}`,
            requestSalary
        });

        return res.status(201).json({message:'Salary request created successfully.',requestSalary});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Server error.',error: error.message});
    }
};



export const getRequestedSalary = async (req,res) => {
    try {
        const requestedSalaries = await RequestedSalary.find()
        .populate('employeeId', 'firstName lastName')
        .exec();

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


export const reviewRequest = async (req, res) => {
    const {requestId} = req.params;
    const {action} = req.body;

    try {
        const requestedSalary = await RequestedSalary.findById(requestId);
        if(!requestedSalary){
            return res.status(404).json({message:'Request not found'});
        }
        if(action === 'approve'){
            requestedSalary.status = 'Approved';
            io.emit('salaryRequestStatus', {
                employeeId:requestedSalary.employeeId,
                message:'Your salary request has been approved!',
                requestId:requestedSalary._id,
            });
        }else if(action === 'deny'){
            requestedSalary.status = 'Rejected';
            io.emit('salaryRequestStatus', {
                employeeId:requestedSalary.employeeId,
                message:'Your salary request has been rejected.',
                requestId:requestedSalary._id,
            });
        } else {
            return res.status(400).json({ message: 'Invalid action' });
        }

        await requestedSalary.save();

        return res.status(200).json({message:'Request updated',requestedSalary});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Server error'});
    }
};