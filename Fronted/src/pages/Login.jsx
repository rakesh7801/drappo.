
import React, { useState } from 'react';
import heroImg from "../assets/header_img.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // 👈 Add this
import { setUser } from '../redux/authSlice'; // 👈 Add this
import google from "../assets/google.png"
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/users/login', formData, {
        withCredentials: true
      });
      
      
      
      const { AccessToken, user } = res.data.data;
      
      localStorage.setItem("token", AccessToken);
      dispatch(setUser(user)); 
      
      console.log("✅ User set in Redux:", user); 
      

      alert("User login successful");
      navigate("/my-profile");
    } catch (err) {
      console.log("Login failed:", err);
    }
  };
  

  return (
    <div className='ml-96'>
      <div className="w-[600px] max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-400 dark:text-gray-800 ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              id="email"
              placeholder="type your email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handlechange}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs mt-14 font-bold dark:text-gray-600">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-2xl dark:text-gray-50 dark:bg-violet-600">Sign in</button>
        </form>

        <p className="  text-center mt-10 sm:px-6 dark:text-black">Don't have an account? 
          <Link
            to="/register"
            className="bg-cyan-700 text-white px-4 py-2 rounded-2xl hover:bg-indigo-300 transition ml-2"
          >
            Sign Up
          </Link>
            
        </p>
        <small className="capitalize flex justify-items-center items-center font-bold ml-36 mt-4 ">or login with</small>
        <div className=' justify-items-center items-center'>
        <button onClick={() => loginWithRedirect()}
     className="w-[250px] flex mt-6  justify-center items-center gap-2 py-3 rounded-md bg-red-500 text-white hover:bg-red-800 duration-300">Login with Google <FaGoogle/> </button>

        <button className="w-[250px] mt-3 flex  justify-center items-center gap-2 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-800 duration-300">Login with Facebook <FaFacebook/> </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
