import React from "react";
import { useSelector } from "react-redux";
import profile from "../assets/profile_pic.png";

const MyProfile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full mb-6 max-w-md border border-purple-300 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={profile}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        <div className="mt-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{user.fullname}</h1>
          <p className="text-sm text-gray-500 mb-4">{user.email}</p>

          <div className="bg-gradient-to-r from-purple-200 to-indigo-200 rounded-xl p-4 text-left shadow-inner">
            <p><strong>Role:</strong> {user.role || "Patient"}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleString()}</p>
            {/* Add more fields as needed */}
          </div>

          <button
            onClick={() => alert("Profile Edit Coming Soon")}
            className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
