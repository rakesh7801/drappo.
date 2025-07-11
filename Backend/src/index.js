import dotenv from "dotenv"
dotenv.config();

import express from "express"
import { app } from "./app.js";
const port = process.env.PORT

import dbconnect from "./db/dbconnection.js";
dbconnect()
.then(() =>{
 app.listen(port || 3000, () =>{
console.log(`listing on the port http://localhost: ${port}`);

 })
}).catch((err) =>{
console.log(`mongodb connectiom failed !!!`);

})
