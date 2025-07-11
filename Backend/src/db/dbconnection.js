import mongoose, { Mongoose } from "mongoose"

import dotenv from "dotenv"
dotenv.config();

const DB_NAME = process.env.DB_NAME

const URI = `mongodb://127.0.0.1:27017/${DB_NAME}`

const dbconnect = async() => {

    try {
       await mongoose.connect(URI)
       console.log("dababase connected to successfully ${DB_NAME}");
       
        
    } catch (error) {
        console.log("MONGODB CONNECTION FAILD", error);
        
    }
}
export default dbconnect