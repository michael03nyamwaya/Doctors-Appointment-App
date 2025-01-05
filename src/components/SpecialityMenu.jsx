import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-16 text-gray-700' id='speciality'>
      <h3 className='text-3xl md:text-4xl font-semibold'>Find by Speciality</h3>
      <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut!</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index)=>(
            <Link key={index} onClick={()=>scrollTo(0,0)} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
               <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
               <p>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
