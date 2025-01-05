import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppointment from './pages/MyAppointment'
import Appointments from './pages/Appointments'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:speciality' element={<Doctors/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-appointment' element={<MyAppointment/>}/>
      <Route path='/appointments/:docId' element={<Appointments/>}/>
     </Routes>
     <Footer />
    </div>
  )
}

export default App