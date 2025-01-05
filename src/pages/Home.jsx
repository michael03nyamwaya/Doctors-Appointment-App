import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Bunner from '../components/Bunner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu />
      <TopDoctors />
      <Bunner />
    </div>
  )
}

export default Home
