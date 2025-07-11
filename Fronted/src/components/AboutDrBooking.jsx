import React from 'react';

const AboutDrBooking = () => {
  return (
    <section className="bg-[#0d0f1d] text-white py-16 px-6 rounded-xl mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-yellow-400 text-2xl font-bold mb-2">Empowering Healthcare, One Click at a Time</h2>
        <h1 className="text-pink-400 text-4xl font-bold mb-6">About Dr.Booking</h1>
        <p className="text-gray-300 mb-10">
          Dr.Booking is revolutionizing the healthcare industry by providing a seamless platform for patients to
          book, manage, and attend medical appointments online. Founded by a team of healthcare and tech experts,
          Dr.Booking bridges the gap between doctors and patients with innovative tools, smart scheduling, and
          real-time communication.
        </p>

        {/* Vision */}
        <div className="bg-[#141628] p-6 rounded-xl border border-indigo-500 mb-6">
          <h3 className="text-purple-300 text-xl font-semibold mb-2">Our Vision</h3>
          <p>To create a world where quality healthcare is just a tap away — accessible, efficient, and patient-focused.</p>
        </div>

        {/* Founder */}
        <div className="bg-[#141628] p-6 rounded-xl border border-yellow-500 mb-6">
          <h3 className="text-yellow-400 text-xl font-semibold mb-2">Meet Our Founder</h3>
          <p>
            Dr. Aryan Jain, the visionary behind Dr.Booking, brings years of clinical and digital expertise. His mission:
            to simplify healthcare access and empower patients with technology that puts their health first.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1a1d30] p-4 rounded-xl border border-pink-400">
            <h4 className="text-pink-400 text-lg font-semibold mb-1">Innovation</h4>
            <p>We leverage smart tech to streamline healthcare access and appointment management.</p>
          </div>
          <div className="bg-[#1a1d30] p-4 rounded-xl border border-purple-400">
            <h4 className="text-purple-400 text-lg font-semibold mb-1">Community</h4>
            <p>We connect patients with a trusted network of verified healthcare providers.</p>
          </div>
          <div className="bg-[#1a1d30] p-4 rounded-xl border border-blue-400">
            <h4 className="text-blue-400 text-lg font-semibold mb-1">Excellence</h4>
            <p>We focus on quality care and user experience in every interaction.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#1a1d30] p-4 rounded-xl border border-yellow-500 text-center">
            <h4 className="text-yellow-400 text-2xl font-bold">5+</h4>
            <p>Years of Service</p>
          </div>
          <div className="bg-[#1a1d30] p-4 rounded-xl border border-pink-400 text-center">
            <h4 className="text-pink-400 text-2xl font-bold">100K+</h4>
            <p>Patients Served</p>
          </div>
          <div className="bg-[#1a1d30] p-4 rounded-xl border border-blue-400 text-center">
            <h4 className="text-blue-400 text-2xl font-bold">500+</h4>
            <p>Verified Doctors</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold py-2 px-6 rounded-full">
          Explore Our Features
        </button>
      </div>
    </section>
  );
};

export default AboutDrBooking;
