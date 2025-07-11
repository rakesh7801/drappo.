import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt, { compare } from "bcrypt"

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true
        
    },

    avtar: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true, "password is required"]

    },
    refreshToken: {
        type: String
      }
},
{
    timestamps: true    
}
)
//password hashing middleware before savinfg the user 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  // Compare password
  userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
//generate accesstoken and refresgh token 

//method to generate access token
userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
           expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};
//method to generate to refresh token
userSchema.methods.generateRefreshToken = function(){
   return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", userSchema);
   