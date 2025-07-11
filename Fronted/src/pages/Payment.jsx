// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { doctors } from "../assets/asset";

// const Payment = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  

//   const doctor = doctors.find((doc) => doc._id === id);

//   const handlePayment = () => {
//     alert("✅ Payment Successful!");
//     navigate("/");
//   };

//   if (!doctor) {
//     return (
//       <div className="text-center text-red-500 mt-10">
//         ❌ Doctor not found. Please go back and try again.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-gray-800">
//       <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//         Confirm Your Payment
//       </h2>

//       {/* Doctor Info */}
//       <div className="flex flex-col sm:flex-row gap-6 items-center border p-4 rounded-xl bg-blue-50 mb-6">
//         <img
//           src={doctor.image}
//           alt={doctor.name}
//           className="w-32 h-32 object-cover rounded-full shadow"
//         />
//         <div>
//           <h3 className="text-xl font-semibold">{doctor.name}</h3>
//           <p className="text-gray-600">{doctor.speciality}</p>
//           <p className="text-sm mt-2">📅 Date: 2024-05-01 | ⏰ Time: 12:00 PM</p>
//         </div>
//       </div>

//       {/* Patient Info - Optional Static Placeholder */}
//       <div className="bg-gray-50 p-4 rounded-xl mb-6">
//         <p><strong>Patient Name:</strong> Ankit Sharma</p>
//         <p><strong>Email:</strong> ankit@example.com</p>
//         <p><strong>Reason:</strong> Regular checkup</p>
//       </div>

//       {/* Payment Options */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">💳 Choose Payment Method</h3>
//         <div className="flex flex-wrap gap-4">
//           <label className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
//             <input type="radio" name="payment" defaultChecked />
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"
//               alt="PhonePe"
//               className="w-12"
//             />
//             PhonePe
//           </label>
//           <label className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
//             <input type="radio" name="payment" />
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6M_hbM7xn7wLagoMjkbOyy781mC2RDBtX19BLPmgDpvcfirAnu7ZDK0gqeNhftQsTWc&usqp=CAU"
//               alt="Paytm"
//               className="w-12"
//             />
//             Paytm
//           </label>
//           <label className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer hover:bg-gray-100">
//             <input type="radio" name="payment" />
//             <img
//               src="https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png?f=webp"
//               alt="Paytm"
//               className="w-12"
//             />
//             UPI
//           </label>
         
//         </div>
//       </div>

//       {/* Confirm Payment */}
//       <div className="text-center">
//         <button
//           onClick={handlePayment}
//           className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
//         >
//           Confirm Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;



import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Publishable Key
const stripePromise = loadStripe("pk_test_51RjGSE2cHaTQHF07MDocJqtsLhqlOL2yHnRkhb2AQfUCZSHQ2RQYIavKBpmHmoQymKY5mK16Yh2vMRpTbOygnwdf00uWMHNYuJ"); // Your actual key


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setProcessing(true);

  try {
    // 🧪 DEBUG: Log before backend call
    console.log("Creating Payment Intent...");

    const { data } = await axios.post("http://localhost:8000/payment/create-payment-intent", {
      amount: 500,
    });

    console.log("Client Secret Received:", data.clientSecret); // 🧪 Check this

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    console.log("Stripe Result:", result); // 🧪 Check full response

    if (result.error) {
      console.error("❌ Payment Error:", result.error.message);
      alert("Payment Failed: " + result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert("✅ Payment Successful!");
      }
    }
  } catch (err) {
    console.error("💥 Axios/Network Error:", err.message);
    alert("Something went wrong");
  }

  setProcessing(false);
};

  return (
  <form onSubmit={handleSubmit} className="w-[400px] border p-4 rounded space-y-4">
  <label className="block font-medium text-gray-700">
    Enter your card details:
  </label>
  
  <div className="border p-2 rounded">
    <CardElement options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      }
    }} />
  </div>

  <button
    type="submit"
    disabled={!stripe || processing}
    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
  >
    {processing ? "Processing..." : "Pay ₹500"}
  </button>
</form>

  );
};

const CheckoutStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutStripe;
