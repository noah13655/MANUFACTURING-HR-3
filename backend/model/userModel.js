import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    lastname:{
        type:String,
        required:true
    },
    firstname:{
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
    role:{
        type:String,
        enum:["employee","manager"],
        default:"employee"
    }

});

export const User = mongoose.model("User",userSchema);