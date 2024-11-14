import React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import profile from "../assets/profile_pic.png"
import dropicon from "../assets/dropdown_icon.svg"
import gsap from "gsap";

const Navbar = () => {

  
  const navigate = useNavigate();

const [showMenu, setShowMenu] = useState(false);
const [token, setToken] = useState(true);

  return (
    <div className="flex items-center pb-5 justify-between text-sm py-2 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={logo} alt="logo" />

      <ul className="hidden md:flex items-start gap-7 mt-3 font-semibold">
        <Link to="/">HOME</Link>

        <Link to="/Doctors">ALL DOCTORS</Link>
        <Link to="/About">ABOUT</Link>
        <Link to="/Contact">CONTACT</Link>
      </ul>
      <div className="flex items-center gap-4">
        {
          token
           ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile} alt="" />
            <img className="w-2.5" src={dropicon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointmements</p>
                    <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                  </div>

            </div>
           </div>
           :  <button
           onClick={() => navigate("/Login")}
           className="bg-primary text-white px-8 py-3 rounded-full font-serif hidden md:block"
         >
           Create account
         </button>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
