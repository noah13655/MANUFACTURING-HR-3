import mongoose from "mongoose";
import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';

import { User } from "../model/userModel.js";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connected to database`))
    .catch(error => console.error(`Database connection error: ${error}`));

const seedUsers = async () => {
    try {
        await User.deleteMany({});

        const users = [
            {
                email: "manager@example.com",
                password: await bcryptjs.hash('managerpassword123', 10),
                role: "manager"
            },
            {
                email: "employee@example.com",
                password: await bcryptjs.hash('employeepassword123', 10),
                role: "employee"
            }
        ];

        await User.insertMany(users);
        console.log("Users created successfully");
    } catch (error) {
        console.log(`Error in seeding: ${error}`);
    } finally {
        mongoose.connection.close();
    }
};

seedUsers();
