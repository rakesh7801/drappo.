import React from 'react';
import { specialityData } from '../assets/asset';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div
      className='flex flex-col mt-9 rounded-xl items-center gap-6 py-16 px-4 text-gray-800 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-800'
      id='speciality'
    >
      {/* Gradient Heading */}
      <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg'>
        Find by Speciality
      </h1>

      {/* Gradient Subheading */}
      <p className='sm:w-1/2 text-center text-lg sm:text-xl bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent drop-shadow-md'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      {/* Speciality Card Container */}
      <div className='flex sm:justify-center gap-8 pt-8 w-full overflow-x-auto scrollbar-hide px-4'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className='flex flex-col items-center text-white text-sm cursor-pointer flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out min-w-[120px] sm:min-w-[150px]'
          >
            <img
              className='w-16 sm:w-20 mb-3 rounded-full border border-white/30 shadow-md'
              src={item.image}
              alt={item.speciality}
            />
            <p className='mt-2 text-center font-medium text-white bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
