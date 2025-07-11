import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import HealthBanner from '../components/HealthBannersuj'
import ProgresCircle from '../components/ProgresCircle'
import News from '../components/News'
import AboutDrBooking from "../components/AboutDrBooking"
import ChatBox from "../components/chatBox"
import { AnimatedTooltipPreview } from "../components/AnimatedTooltipPreview";


const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
       <HealthBanner /> 
      <TopDoctors/>
      <Banner/>
     
      <News />
      <ProgresCircle />
      <AboutDrBooking />
     
      <div className="min-h-screen flex items-center text-white  flex-col  justify-center bg-[#0d0f1d] rounded-xl bg-transparent">
        <h2 class="text-3xl font-bold mb-28 -mt-48 text-white"> Passionate minds who turned a bold idea into a trusted healthcare platform.</h2>
        <p className='font-bold text-3xl mb-28 -mt-56'>Meet Our Founders</p>
  
      <AnimatedTooltipPreview />
    </div>  
     
      
   
    
      
    </div>
  )
}

export default Home
