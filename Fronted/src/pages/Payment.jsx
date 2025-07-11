import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../assets/asset";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const doctor = doctors.find((doc) => doc._id === id);

  const handlePayment = () => {
    alert("✅ Payment Successful!");
    navigate("/");
  };

  if (!doctor) {
    return (
      <div className="text-center text-red-500 mt-10">
        ❌ Doctor not found. Please go back and try again.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Confirm Your Payment
      </h2>

      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-6 items-center border p-4 rounded-xl bg-blue-50 mb-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 object-cover rounded-full shadow"
        />
        <div>
          <h3 className="text-xl font-semibold">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.speciality}</p>
          <p className="text-sm mt-2">📅 Date: 2024-05-01 | ⏰ Time: 12:00 PM</p>
        </div>
      </div>

      {/* Patient Info - Optional Static Placeholder */}
      <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <p><strong>Patient Name:</strong> Ankit Sharma</p>
        <p><strong>Email:</strong> ankit@example.com</p>
        <p><strong>Reason:</strong> Regular checkup</p>
      </div>

      {/* Payment Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">💳 Choose Payment Method</h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
            <input type="radio" name="payment" defaultChecked />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"
              alt="PhonePe"
              className="w-12"
            />
            PhonePe
          </label>
          <label className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
            <input type="radio" name="payment" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6M_hbM7xn7wLagoMjkbOyy781mC2RDBtX19BLPmgDpvcfirAnu7ZDK0gqeNhftQsTWc&usqp=CAU"
              alt="Paytm"
              className="w-12"
            />
            Paytm
          </label>
          <label className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
            <input type="radio" name="payment" />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png?f=webp"
              alt="Paytm"
              className="w-12"
            />
            UPI
          </label>
         
        </div>
      </div>

      {/* Confirm Payment */}
      <div className="text-center">
        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
