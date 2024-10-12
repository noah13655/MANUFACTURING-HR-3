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

incentiveSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    }
});

export const Incentive = mongoose.model('Incentive', incentiveSchema);
