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

// benefitSchema.set('toJSON', {
//     transform: function (doc, ret, options) {
//         delete ret._id;
//         delete ret.__v;
//         delete ret.createdAt;
//         delete ret.updatedAt;
//         return ret;
//     }
// });

export const Benefit = mongoose.model('Benefit', benefitSchema);
