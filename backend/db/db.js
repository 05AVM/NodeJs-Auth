//connecting to database Email-auth
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try{
        console.log(process.env.MONGO_URI)
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected:${conn.connection.host}`)
        console.log("Connection established successfully")
    }
    catch(error){
        console.log("Error Connecting to the database:",error.message)
    }

}

export default connectDB;
