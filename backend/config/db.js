import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB (Primary) connected! ${conn.connection.host}`);
    } catch (error) {
        console.log(`Primary MongoDB connection failed: ${error}`);
        console.log('Attempting to connect to secondary database...');

        try {
            //for offline
            const secondConn = await mongoose.connect(process.env.MONGODB_COMPASS);
            console.log(`MongoDB (Secondary) connected! ${secondConn.connection.host}`);
        } catch (error) {
            console.log(`Error in connecting to secondary database! ${error}`);
            process.exit(1);
        }
    }
};
