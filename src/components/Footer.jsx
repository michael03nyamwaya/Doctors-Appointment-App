import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 gap-14 mt-40 text-sm'>
        {/* left */}
        <div>
           <img className='mb-5 w-40' src={assets.logo} alt="" /> 
           <p className='w-full md:w-2/3 text-gray-500 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit amet consectetur adipisicing elit. iste tempore possimus consequatur eligendi dolorum.</p>
        </div>
        {/* center */}
        <div>
          <h2 className='text-xl font-medium mb-5'>Company</h2>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <h2 className='text-xl font-medium mb-5'>Get In Touch</h2>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <li>+1 455 789 900</li>
            <li>healthcare@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto  - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
