import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
  const {doctors} =useContext(AppContext)
  return (
    <div className=''>
      <p className='pb-3 font-medium text-zinc-600 mt-12 border-b'>My Appointments</p>
      <div>
        {
          doctors.slice(0,3).map((item,index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32 bg-indigo-50' src={item.image} alt=''/>
              </div>
              <div className='flex-1 text-sm text-zinc-60'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-800 font-medium mt-2'>Address</p>
                <p className='text-sm'>{item.address.Line1}</p>
                <p className='text-sm'>{item.address.Line1}</p>
                <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>25, July, 2024 | 8:30 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment
