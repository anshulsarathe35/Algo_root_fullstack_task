import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({path: './server/.env'});

const mongoUri = process.env.MONGO_URI;

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(mongoUri);
        // console.log(process.env.MONGO_URI)
        console.log("Mongodb connected Succesfully")
    } catch (error) {
        console.error("Error: " +error);
    }
}

export default connectDB;