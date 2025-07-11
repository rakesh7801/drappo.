import React from "react";
import video from "../assets/video.mp4";


const HealthBanner = () => {
  return (
    <div className=" px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-11">
      <div className="max-w-xl ml-4">
        <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent ">
          Your Health is Our Priority ❤️
        </h2>
        <p className="text-lg bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent mt-16 ">
          We are committed to providing the best medical care with compassion,
          expertise, and trust. Let us walk with you towards a healthier life.
        </p>
      </div>

      <div className="w-full">
       <video
  src={video}
  autoPlay
  muted
  loop
 
  className="  rounded-xl shadow-lg"
/>

       
      </div>
    </div>
  );
};

export default HealthBanner;
