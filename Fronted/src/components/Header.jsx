import heroImg from "../assets/header_img.png";
import gropProfile from "../assets/group_profiles.png";
import arrowicon from "../assets/arrow_icon.svg";

const Header = () => {
  return (
    <section
     
      className="w-full flex justify-around items-center rounded-xl mt-9 bg-[#0d0f1d]"
    >
      <div className="textStore text-white">
        <h1 className="text-4xl font-bold  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent
">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex mt-5 items-center gap-4">
          <img src={gropProfile} alt="" />
          <small className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </small>
        </div>
        
         <a href="#speciality" className="flex items-center gap-2 bg-gradient-to-r from-pink-300 via-emerald-400 to-blue-500 px-8 py-3 rounded-full text-gray-600 text-sm   hover:scale-105 transition-all duration-300 w-52 mt-5">
            Book Appoinment <img className="w-3" src={arrowicon} alt="" />

         </a>
        
      </div>

      <div>
        <img src={heroImg} alt="" className="w-[500px] mt-20" />
      </div>
    </section>

  )
}

export default Header
