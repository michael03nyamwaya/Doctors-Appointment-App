import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 text-gray-500 '>
        <h2>CONTACT <span className='text-gray-800 font-semibold'>US</span></h2>
      </div>
      <div className='my-7 flex flex-col justify-center gap-10 mb-20 text-sm md:flex-row '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-xl text-gray-700 font-semibold'>OUR OFFICE</p>
          <p className='text-sm text-gray-500'>4688 West-Bay <br /> Suite 450, Bankonk, China</p>
          <p className='text-sm text-gray-500'>Tel:(+23) 777 0023 <br />Email:medicare@gmail.com</p>
          <p className='text-lg text-gray-600 font-semibold'>Career at PRESCRIPTO</p>
          <p className='text-sm text-gray-500'>Learn more about term and job openings</p>
          <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
