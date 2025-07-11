import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import {ApiResponce } from "../utils/ApiResponce.js"
import  {User} from "../models/user.modal.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const generateaccessTokenandrefreshToken = (userId) => {
  const AccessToken = jwt.sign({ _id: userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  });

  const RefreshToken = jwt.sign({ _id: userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  });

  return { AccessToken, RefreshToken };
};

const registerUser = asyncHandler(async(req,res) =>{
    //get user detail from frontend
    //validation- not empty
    //chek if user is allready exist: username email
    //chek for images
    //creat a user object - create  entry in db
   // remove password and refreshtoken filed from responce
   //check for user creation
   //return res

   const {fullname, email, password} =  req.body
  //  console.log(req.body);
   
   if (!fullname) {
    throw new ApiError(400, "fullname is required")
   }
   if (!email) {
    throw new ApiError(400, "email is required")
   }
   if (!password) {
    throw new ApiError(400, "password is required")
   }

   const existedUser = await User.findOne({ 
    $or: [{fullname}, {email}]
   });

  //  console.log("existedUser:", existedUser);

   if (existedUser) {
    throw new ApiError(409, "fullname and email already exist ")
   }

  //  const avtarfilePath = req.file?.path;

  //  if (!avtarfilePath) {
  //   throw new ApiError(400, "avtar file is required")
  //  }
    
    const newUser =  await User.create({
        fullname,
        email,
        password
    })

    const createdUser = await User.findById(newUser._id).select("-password -refreshtoken")
   
   
    if (!createdUser) {
        throw new ApiError(500, "Somthing went wrong while registering the user")
      }
      return res
      .status(201)
      .json(
        new ApiResponce(200, createdUser, "user registerd successfully")
      )
})

const loginUser = asyncHandler( async (req,res) =>{
   
   const {email, password} = req.body

  //  console.log(req.body);
   

   if (!email) {
    throw new ApiError(400, "email filed is required")
   }
   if (!password) {
    throw new ApiError(400, "fill up the password field")
   }

   const user =  await User.findOne({
     email
   })

  //  console.log("User found:", user);
   if (!user) {
      throw new ApiError(404, "user does not exist")
   }

  const isvalidpassword =  await user.isPasswordCorrect(password)

     if (!isvalidpassword) {
      throw new ApiError(404, "Invalid user credentials")
     }

     const { RefreshToken, AccessToken } = generateaccessTokenandrefreshToken(user._id)

    //  console.log("AccessToken: ", AccessToken);
    //  console.log("RefreshToken: ", RefreshToken);

     const logedInUser = await User.findById(user._id).select("-password -refreshToken")


    //  console.log("user login", logedInUser);
     
     const options = {
      httpOnly: true,
      secure: false, 
      sameSite: 'Lax', 
      path: '/',
    };
    
     return res
     .status(200)
     .cookie("RefreshToken", RefreshToken, options)
     .cookie("AccessToken", AccessToken, options)
     .json(
      new ApiResponce(200,
        {
          user: logedInUser, AccessToken, RefreshToken
        },
        "user loged In successfully"
      )
     )


})

const logoutUser = asyncHandler(async(req,res) =>{


  try {
    console.log(" Logout route hit");
    console.log(" User ID from token:", req.user);  

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // HTTPS par true karo
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(" Logout error on server:", error);
    res.status(500).json({ message: "Server error during logout" });
  }

  
//   await User.findByIdAndUpdate(
//    req.user._id,
//    {
//      $unset: {
//        RefreshToken: 1
//      }
   
//    },
//    {
//      new: true
//    }
//   )
 
//  const options = {
//    httpOnly:true,
//    secure: true
//  }
 
//  return res
//  .status(200)
//  .clearCookie("AccessTkoen", options)
//  .clearCookie("RefreshToken", options)
//  .json(new ApiResponse(200, {}, "User logged Out"))
 
 
 
 })

export {registerUser,
        loginUser,
        logoutUser
}