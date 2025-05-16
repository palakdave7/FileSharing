import mongoose from 'mongoose';
import dotenv from 'dotenv';

const Connection=()=>{
    dotenv.config();
    const URL=process.env.MONGODB_URL;

    mongoose.connect(URL).then(()=>{
        console.log("Database connected successfully");
    }).catch((error)=>{
        console.log("Error while connecting to database",error.message);
    });  
}

export default Connection;