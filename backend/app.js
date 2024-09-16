import express from "express";
import dotenv from "dotenv"
import  connectDB  from "./db/db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/api/auth",authRoutes);
app.use(express.json())//this allows us to parse incoming requests body..

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port 3000");
})