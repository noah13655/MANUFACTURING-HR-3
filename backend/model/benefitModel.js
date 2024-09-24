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
        enum: ['Compensation', 'Health', 'Retirement', 'Financial', 'Worklife Balance'],
        required: true
    },
},{timestamps:true});

export const Benefit = mongoose.model('Benefit', benefitSchema);
