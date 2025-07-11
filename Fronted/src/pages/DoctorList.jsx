// src/pages/DoctorList.jsx

import { Link, useParams } from "react-router-dom";
import { doctors } from "../assets/asset";
import Appointment from "./Appointment";

const DoctorList = () => {
  const { speciality } = useParams(); // URL se speciality uthayenge

  // Filter karein sirf usi speciality ke doctors
  const filteredDoctors = doctors.filter(
    (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 capitalize">
        {speciality} Doctors
      </h2>

      {filteredDoctors.length > 0 ? (
        <ul className="space-y-2 cursor-pointer scale-105 ml-8 mt-11 rounded-sm flex  items-center gap-10">
          {filteredDoctors.map((doc) => (
            <li key={doc.id} className="p-2 bg-gray-100 rounded">
                <p className="text-xl ml-4 font-serif">{doc.name}</p>
              
                <div className="flex flex-col items-center text-center">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-purple-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
                <p className="text-sm text-gray-500 capitalize mt-1">{doc.speciality}</p>
                <p className="text-sm text-gray-600 mt-2">🎓 Degree: {doc.degree}</p>
                <p className="text-sm text-gray-600">💸 Fees: ₹{doc.fees}</p>
                 
                <Link to={`/Appointment/${doc._id}`} className="mt-5 bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-2 rounded-full transition-all">
                  Book Appointment
                </Link >
              </div>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors found.</p>
      )}
    </div>
  );
};

export default DoctorList;
