import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* left */}
      <div className='md:w-1/2 flex flex-col items-start justify-center py-10 gap-4 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Your Appointment <br/> With Trusted Doctors</p>
         <div className='flex flex-col md:flex-row items-center gap-3 text-sm text-white font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Lorem, ipsum dolor sit amet consecteturadipisicing elit.<br className='hidden sm:block'/> Deserunt, maiores. adipisicing elit. Deserunt, maiores.</p>
         </div>
         <a href="#speciality" className='flex items-center gap-3 bg-white px-8 py-3 text-sm text-gray-500 rounded-full m-auto md:m-0  hover:scale-105 transition-all duration-300'>
            Book an appointment 
            <img className='w-3' src={assets.arrow_icon} alt="" />
         </a>
      </div>
      {/* right */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
