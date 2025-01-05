import  { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name:"Gimmy Romezs",
    image:assets.profile_pic,
    email:"Romez@gmail.com",
    phone: '+1 655 788 556',
    address:{
       Line1:'57th cross, UpTown',
       Line2:"Gateway, Cross Road, Thailand"
    },
    gender:'male',
    dob:'200-02-22'
  })
  const [isEdit, setIsEdit]= useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
       <img className='w-36 rounded' src={userData.image} alt="" />
       {
        isEdit ?
        <input className='bg-gray-50 text-3xl font-medium max-w-60  mt-4' type="text"  value={userData.name} onChange={()=>setUserData(prev=>({...prev,name:e.target.value})  )}/>
        :
        <p className='font-medium text-3xl text-neutral-700 mt-4'>{userData.name}</p>
       }
       <hr className='bg-zinc-400 h-[1px] border-none ' />
       <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-600'>
          <p className='font-medium'>Email id: </p>
          <p className='text-blue-500'>{userData.email}</p>
         <p className='font-medium'>phone:</p>
         {
        isEdit ?
        <input className='bg-gray-100 max-w-52' type="text"  value={userData.phone} onChange={()=>setUserData(prev=>({...prev,phone:e.target.value})  )}/>
        :
        <p className='text-blue-400'>{userData.phone}</p>
       }
       <p className='font-medium'>Address</p>
       {
        isEdit ?
        <p>
          <input className='bg-gray-50' value={userData.address.Line1} onChange={(e)=>setUserData((prev)=>({...prev,address: {...prev,address,Line1:e.target.value}}))} type="text" />
          <br />
          <input className='bg-gray-50' value={userData.address.Line2} onChange={(e)=>setUserData((prev)=>({...prev,address: {...prev,address,Line2:e.target.value}}))} type="text" />
        </p>:
        <p className='text-gray-500'>
          {userData.address.Line1}
          <br />
          {userData.address.Line2}
        </p>
       }
        </div>
       </div>
       <div>
         <p className='text-neutral-500 underline mt-3'>Basic Information</p>
         <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-600'>
          <p className='font-medium'>Gender</p>
          {
        isEdit ?
       <select className='max-w-20 bg-gray-100' value={userData.gender} onChange={(e)=>setUserData(prev => ({...prev, gender:e.target.value}))}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
       </select>
       :
        <p className='text-gray-400'>{userData.gender}</p>
       }
       <p className='font-medium'>Birthday</p>
       {
        isEdit ? <input className='bg-gray-100 max-w-28' type="date" value={userData.dob} onChange={(e)=>setUserData(prev => ({...prev, dob:e.target.value}))}/> :
        <p className='text-gray-400'>{userData.dob}</p>
       }
         </div>
       </div>
       <div className='mt-10 '>
        {
          isEdit ?
          <button className='border border-primary px-8 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={()=>setIsEdit(false)}>Save Information</button>
          :
          <button className='border border-primary px-8 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={()=>setIsEdit(true)}> Edit</button>
        }
       </div>
    </div>
  )
}

export default MyProfile
