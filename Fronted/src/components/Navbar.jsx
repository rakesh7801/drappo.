
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import profile from "../assets/profile_pic.png";
import dropicon from "../assets/dropdown_icon.svg";
import { useSelector, useDispatch } from "react-redux";
 import { logout } from "../redux/authSlice"; // import your logout action
 import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user); 
  console.log(" Navbar user from Redux:", user);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/users/logout", {
        withCredentials: true,
      });
      dispatch(logout());
      console.log("✅ Logout successful");
      navigate('/login')
    } catch (error) {
      console.error(" Logout error", error);
    }
  };

  return (
    <div className="flex items-center pb-5 justify-between text-sm py-2 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={logo} alt="logo" />

      <ul className="hidden md:flex items-start gap-7 mt-3 font-semibold">
         <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>HOME</NavLink>
        <NavLink to="/Doctors" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>ALL DOCTORS</NavLink>
        <NavLink to="/ABOUT" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>ABOUT</NavLink>
        <NavLink to="/CONTACT" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>CONTACT</NavLink>
       </ul>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="relative group flex items-center gap-2 cursor-pointer">
            <img className="w-8 rounded-full" src={profile} alt="profile" />
            <img className="w-2.5" src={dropicon} alt="dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={handleLogout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-serif hidden md:block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
