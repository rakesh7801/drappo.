import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    
  });
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,

     
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/users/register', formData);
      console.log('User registered:', res.data);
      alert(`Registration Successfuly`)
      navigate("/login")

     
    } catch (err) {
      console.error('Error registering:', err.response?.data || err.message);
    }
  };
  
  return (
    <div>
      
    <div className="w-full mr-80 max-w-md mx-auto items-center p-8 space-y-3 rounded-xl dark:bg-gray-400 dark:text-gray-800">
      
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
       
        
        <div className="space-y-1 text-sm">
          <label htmlFor="fullname" className="block dark:text-gray-600">FULL NAME</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter Your Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
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
            onChange={handleChange}
            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
        >
          Sign Up
        </button>
        <p className="text-center sm:px-6 text-xl font-serif text-white">
          Already have an account?
          <Link
            to="/Login"
            className="bg-gray-500 text-white px-4 py-1 ml-2 rounded hover:bg-indigo-300 transition"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Register;
