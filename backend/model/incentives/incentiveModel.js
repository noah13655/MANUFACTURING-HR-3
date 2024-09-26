import mongoose from "mongoose";

const incentiveSchema = new mongoose.Schema({
    incentivesName: {
        type: String,
        required: true
    },
    incentivesType: {
        type: String,
        required: true
    },
    incentivesDescription: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Incentive = mongoose.model('Incentive', incentiveSchema);
