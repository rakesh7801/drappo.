
import React from 'react';
import action from "../assets/action.png"


const News = () => {
  return (
    <section className="hero bg-cover  bg-center h-screen text-white flex justify-center items-center relative top-0 mr-[650px]">
        <div className="mt-6 "> 
      <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent mb-24 ml-10">
       Skip the Wait – Book Instantly!
      </h1>
      <p className="text-3xl mb-6 ml-10 relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 typewriter">
        Your Health, Just a Click Away
Safe, Fast & Convenient Healthcare at Your Fingertips
      </p>
    
        <button className="btn-primary w-[550px] text-2xl ml-10 mt-10 bg-gradient-to-br from-[#141628] to-[#2b3365] px-8 py-5 rounded-xl font-bold scale-90 hover:scale-100 transition duration-500">
          Download Now
        </button>
        <br />
        {/* <div className="w-[300px] h-[100px] bg-white border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center"> */}
  {/* <span className="text-2xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
    Join Now
  </span> */}
  <button className="btn-primary w-[550px] text-2xl ml-10 mt-10 bg-gradient-to-br from-[#141628] to-[#2b3365] px-8 py-5 rounded-xl font-bold scale-90 hover:scale-100 transition duration-500">
    Join Now
  </button>
{/* </div> */}

      </div>
      
     
 <div className="w-[1100px] h-[600px] bg-white rounded-tl-[300px] rounded-tr-[300px] ml-[150px] -mr-[600px] overflow-hidden relative object-cover">
 
  <img src={action} alt="" className="w-[500px] h-[600px]  object-cover " />
</div>



    </section>
  );
};

export default News;
