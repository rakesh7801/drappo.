import React from 'react'
import aboutimg from "../assets/about_image.png";

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-white '>
        <p>ABOUT <span className='text-gray- font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={aboutimg} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w2/4 text-sm text-white'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
         <div className='text-blue-900 text-xl font-bold'> <h2>Our Vision</h2></div>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='text-xl my-7'>
        <p className='text-red-200 '>WHY <span className='text-white font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border h-44 px-10 md:px-16 py-5 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b> 
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border h-44 px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border h-44 px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>
    </div>
  )
}

export default About
