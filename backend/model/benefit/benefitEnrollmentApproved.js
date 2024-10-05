import mongoose from "mongoose";

const benefitEnrollmentSchema = new mongoose.Schema({
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
    approvalDate: {
        type: Date,
        default: Date.now,
    },
});

export const BenefitEnrollmentApproved = mongoose.model("ApprovedBenefitEnrollment", benefitEnrollmentSchema);
