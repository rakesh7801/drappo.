import React from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams to get the dynamic ID from URL
import { doctors } from "../assets/asset";
const DoctorDetail = () => {
  const { _id } = useParams(); // Get the doctor ID from the URL

  // Find the doctor using the ID (assuming the doctors array has unique IDs)
  const doctor = doctors.find((doc) => doc._id === _id);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="doctor-detail flex gap-5">
      <div className="bg-lime-100 rounded-md w-72">
        <img src={doctor.image} alt={doctor.name} className="w-full" />
      </div>
      <div className="doctorContainer w-[800px] flex flex-col gap-5 py-5  border-2 rounded-md ps-5 pt-4">
        <h1 className="text-3xl">{doctor.name}</h1>
        <p>
          Speciality: {doctor.speciality}{" "}
          <span className="border-2 p-1 px-3 rounded-full ms-3">
            {doctor.experience}
          </span>
        </p>

        <div>
          <h4 className="font-bold">About</h4>
          <p>{doctor.about}</p>
        </div>

        <small>Appoinment Fee - ${doctor.fees}</small>
        <Link to={`/doctor/doc2/Appointment/${doctor._id}`} className="p-4 w-60 mt-5 rounded-2xl from-neutral-300 text-xl border-spacing-3 bg-slate-200 scale-90 duration-300 hover:scale-100">Book Appointment</Link>
      </div>
    </div>
  );
};

export default DoctorDetail;
