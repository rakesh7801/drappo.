import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const logoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen"
    >
      <img
        ref={logoRef}
        src="/stethoscope.png" 
        alt="Loading..."
        className="w-96 h-96"
      />
    </div>
  );
};

export default Preloader;
