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
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
});

export const BenefitEnrollmentRequest = mongoose.model("BenefitEnrollment", benefitEnrollmentRequestSchema);
