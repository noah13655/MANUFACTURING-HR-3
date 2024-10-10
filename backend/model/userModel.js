import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    position:{
        type:String,
        required:true,
        enum:["CEO", "Secretary", "Production Head", "Resellers Sales Head","Reseller","Manager"]
    },
    lastName:{
        type:String,
        required:true
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
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
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
        required:true
    },
    bDate:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Employee","Manager"],
        default:"Employee",
        required:true
    }

});

export const User = mongoose.model("User",userSchema);