import mongoose from "mongoose";

const URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        const res = await mongoose.connect(URL);
        if(res){
            console.log('MongoDB Connected!')
        }
    } catch (error) {
        console.log('MongoDB Connection error', error)
    }
};

export default connectDB;