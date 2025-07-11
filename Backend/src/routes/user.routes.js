import { Router } from "express";
import { loginUser, registerUser,logoutUser } from "../controllers/user.controlle.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router =Router() 
router.route("/register").post(
    registerUser)
    router.route("/login").post(loginUser)

    
    router.get("/me", verifyJWT, (req, res) => {
        res.status(200).json(req.user); 
      });
      router.post("/logout",logoutUser)

      //secured routes



export default router