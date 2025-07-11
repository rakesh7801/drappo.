import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doctors } from "../assets/asset";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const { docId } = useParams();
  const doctor = doctors.find((doc) => doc._id === docId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Appointment Booked:", formData, "For:", doctor.name);
    
    alert(`Appointment booked with ${doctor.name}`);
    setFormData({ name: "", email: "", date: "", time: "", reason: "" });
  };

  if (!doctor) {
    return <p className="text-center mt-10 text-red-500">Doctor not found</p>;
  }

  

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <div className="text-center mb-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-40 h-36 mx-auto rounded-full mb-2"
        />
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.speciality}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="reason"
          placeholder="Reason for appointment"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full border px-4 mb-6 py-2 rounded"
        ></textarea>
        
      </form>
      <div className="w-full bg-blue-600 rounded-xl mt-6 px-3 py-5 text-white hover:bg-blue-700">
      <Link to={`/payment/${doctor._id}`} className="ml-24 font-bold ">
      Book Appointment & Proceed to Payment
</Link>


        </div>
    </div>
  );
};

export default Appointment;



//w-60 bg-blue-600 rounded-xl ml-44 px-3 py-3 text-white hover:bg-blue-700