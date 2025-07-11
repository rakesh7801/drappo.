import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProgressCircle = ({ percentage, label }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    gsap.fromTo(
      circle,
      { strokeDashoffset: 201 },
      {
        strokeDashoffset: 201 - (201 * percentage) / 100, 
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circle,
          start: "top 90%", 
        },
      }
    );
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-20 h-20">
          <circle
            className="text-gray-300"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="32"
            cx="40"
            cy="40"
          />
          <circle
            ref={circleRef}
            className="text-red-500 transition duration-800"
            strokeWidth="4"
            strokeDasharray="201"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="32"
            cx="40"
            cy="40"
            style={{ strokeDashoffset: 201 }} 
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
          {percentage}%
        </div>
      </div>
      <div className="mt-2 text-white">{label}</div>
    </div>
  );
};

const App = () => {
  const data = [
    { percentage: 100, label: "Patient Satisfaction" },
    { percentage: 73, label: "Digital Health Records" },
    { percentage: 79, label: "Appointment Coverage" },
    { percentage: 80, label: "Appointment Success Rate" },
  ];

  return (
    <div className="flex justify-around p-10 mt-28 rounded-xl bg-[#0d0f1d]"
    >
      {data.map((item, index) => (
        <ProgressCircle
          key={index}
          percentage={item.percentage}
          label={item.label}
        />
      ))}
    </div>
  );
};




export default App;
