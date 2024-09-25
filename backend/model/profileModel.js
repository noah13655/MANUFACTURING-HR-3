import mongoose from "mongoose";

const employeeProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        required: true,
    },
    emergencyContact: {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        relationship: {
            type: String,
            required: true,
        },
    },
});

export const EmployeeProfile = mongoose.model("EmployeeProfile", employeeProfileSchema);
