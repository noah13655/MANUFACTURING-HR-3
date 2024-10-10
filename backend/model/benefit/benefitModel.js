import mongoose from "mongoose";

const benefitSchema = new mongoose.Schema({
    benefitsName: {
        type: String,
        required: true
    },
    benefitsDescription: {
        type: String,
        required: true
    },
    benefitsType: {
        type: String,
        enum: ['Compensation', 'Health','Financial'],
        required: true
    },
    requiresRequest: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Benefit = mongoose.model('Benefit', benefitSchema);
