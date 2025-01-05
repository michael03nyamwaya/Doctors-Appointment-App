import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 text-gray-800'>
      <h2 className='text-3xl md:text-4xl font-semibold'>Top doctors to Book</h2>
      <p className='sm:w-1/3 text-sm text-center'>Simply browse through our extensive list of trusted doctors</p>
       <div className='grid grid-cols-auto w-full gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
         doctors.slice(0,10).map((item, index)=>(
           <div key={index} onClick={()=>navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-gray-500'>
                    <p className='w-2 h-2 rounded-full bg-green-600'></p> <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-sm text-gray-600'>{item.speciality}</p>
            </div>
           </div>
         ))
        }
       </div>
       <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-100 text-gray-600 px-6 py-3 mt-8 rounded-full'>see more</button>
    </div>
  )
}

export default TopDoctors
