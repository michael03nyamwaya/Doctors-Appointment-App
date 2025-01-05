import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { Link, NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-gray-500'>
      <Link to='/'>
      <img src={assets.logo} alt="logo" />
      </Link>
       <ul className='hidden md:flex items-start gap-5 font-medium '>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
       </ul>
       <div className='flex items-center gap-4'>
        {
          token ? 
            <div className='flex items-center gap-2 group relative cursor-pointer'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt=''/>
              <img className='w-2.5 ' src={assets.dropdown_icon} alt=''/>
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-40 bg-stone-200 rounded flex flex-col p-4 gap-4 '>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p  onClick={()=>navigate('/my-appointment')}className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          :
            <button onClick={()=>navigate('/login')} className='bg-primary text-white rounded-full px-6 py-3 hidden md:block'>Create a account</button>
          
        }
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
         <div className={` ${showMenu ? 'fixed w-full' :'h-0 w-0'} md:hidden right-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all duration-300`}>
            <div className='flex items-center justify-between px-5 py-6'>
               <img className='' src={assets.logo} alt="" />
               <img onClick={()=>setShowMenu(false)} className='w-7' src={assets.cross_icon} alt="" />
            </div>
             <ul className='flex flex-col items-center gap-4 px-4 mt-5 text-lg font-medium'>
              <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>  Home</p></NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/doctors'>All Doctors</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/about'> About</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/contact'>Contact</NavLink>
             </ul>
         </div>
       </div>
    </div>
  )
}

export default Navbar
