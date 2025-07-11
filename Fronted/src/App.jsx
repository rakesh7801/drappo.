import React from "react";
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
import Myprofile from "./pages/Myprofile"
import Payment from "./pages/Payment";
 


function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<DoctorList  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<Myprofile />} />

        
        <Route path="/my-appointments" element={<MyAppontment />} />
        <Route path="/Appointment/:docId" element={<Appointment />} />
        <Route path="/doctor/doc2/Appointment/:docId" element={<Appointment />} />
        <Route path="/payment/:id" element={<Payment />} />


        <Route path="/doctor/:_id" element={<DoctorDetail />} />
        <Route path="/alldoctors" element={< AllDoctors/>} />
       
       
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
