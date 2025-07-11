import express, { urlencoded } from "express"
const app = express()
import cookieParser from "cookie-parser"
import { registerUser } from "./controllers/user.controlle.js"


import cors from "cors"



app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }));
  

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limita: true}))
app.use(express.static("public"))
app.use(cookieParser())

//import routes
import userRoutrs from "./routes/user.routes.js"

app.use("/users", userRoutrs)



export {app}