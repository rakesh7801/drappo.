
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyAppontment from "./pages/MyAppontment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import DoctorDetail from "./components/DoctorDetail";
import Register from "./pages/Register";
import Lenis from "lenis";
import DoctorList from "./pages/DoctorList";
import AllDoctors from "./pages/AllDoctors";
import Myprofile from "./pages/Myprofile";
import Payment from "./pages/Payment";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../src/redux/authSlice";
import Preloader from "./components/Preloader"; // ✅ New

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // 👇 1: Fetch user
    axios
      .get("http://localhost:8000/users/me", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log("❌ Error fetching user:", err);
      });

    // 👇 2: Preloader delay
    const timer = setTimeout(() => setLoading(false), 4000); // 4 sec
    return () => clearTimeout(timer);
  }, []);

  // 👇 3: Smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // 👇 4: Preloader condition
  if (loading) {
    return <Preloader />;
  }

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<DoctorList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/my-profile"
          element={
            <PrivateRoute>
              <Myprofile />
            </PrivateRoute>
          }
        />
        <Route path="/my-appointments" element={
         <PrivateRoute>
         <MyAppontment />
         </PrivateRoute>
          } />
        <Route
          path="/Appointment/:docId"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />
        <Route path="/doctor/doc2/Appointment/:docId" element={
          <PrivateRoute >
          <Appointment />
          </PrivateRoute>} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/doctor/:_id" element={<DoctorDetail />} />
        <Route path="/alldoctors" element={<AllDoctors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
