import React from 'react'
import contactimg from "../assets/contact_image.png";


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10'>
        <p className='text-white'>CONTACT <span className='text-white font-semibold'> US</span></p>
        
      </div>

<div className='my-10 flex flex-col justify-center md:flex-row gap-36 mb-28 text-sm'>
  <img className='w-full md:max-w-[360px] rounded-md' src={contactimg} alt="" />
  <div className='flex flex-col justify-center  items-start gap-6'>
    <p className='font-semibold text-lg text-white'>OUR OFFICE</p>
    <p className='text-white'>00000 Willms Station <br />
    Suite 000, Washington, USA</p>
    <p className='text-white'>Tel: (000) 000-0000 <br />
    Email: greatstackdev@gmail.com</p>
    <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
    <p className='text-white'>Learn more about our teams and job openings.</p>
    <button className='border border-black text-teal-500 bg-slate-800 px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg'>Explore Jobs</button>
  </div>
</div>
    </div>
  )
}

export default Contact
