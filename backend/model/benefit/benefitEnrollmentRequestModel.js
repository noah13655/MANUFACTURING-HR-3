import mongoose from "mongoose";

const benefitEnrollmentRequestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    benefitIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Benefit",
        required: true,
    }],
    userDetails:{
    lastName:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        street: {
            type:String,
            required:true
        },
        municipality:{
            type:String,
            required:true
        },
        province:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }
    },
    gender:{
        type:String,
        enum:["Male","Female"],
        required:true
    },
    bDate:{
        type:String,
        required:true
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
 }
},{timestamps:true});

export const BenefitEnrollmentRequest = mongoose.model("BenefitEnrollment", benefitEnrollmentRequestSchema);
