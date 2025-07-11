import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controlle.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router =Router() 
router.route("/register").post(
    registerUser)
    router.route("/login").post(loginUser)

    
    router.get("/me", verifyJWT, (req, res) => {
        res.status(200).json(req.user); // ✅ User data bhej diya
      });




export default router