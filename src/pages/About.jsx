import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl font-medium text-gray-500'>
        <p>About <span className='text-gray-800'>Us</span></p>
      <div className='flex flex-col md:flex-row gap-12 my-10'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col text-start justify-center gap-6 md:w-2/4 text-lg text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium doloribus ipsam commodi officiis suscipit sequi possimus voluptatibus sit amet consectetur adipisicing elit. Enim, laudantium doloribus ipsam commodi officiis suscipit sequi possimus voluptatibusrepellendus hic.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse qui maiores, atque harum, ad iste nihil repudiandae soluta blanditiis beatae ab, facilis inventore deserunt fuga perspiciatis.</p>
            <b className='text-gray-800'>Our vision</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aut voluptas consectetur, eos tenetur sed dolore voluptates. Repellat, voluptatibus quisquam. Adipisci, iusto! Dolorem provident facilis maiores exercitationem fuga soluta. Animi.</p>
          </div>
        </div>
      </div>
      <div className='text-xl  my-4'>
        WHY <span className='text-gray-600 font-semibold'>CHOOSE US</span>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ratione?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis ipsa minus!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nisi culpa esse officiis possimus sint.</p>
        </div>
      </div>
    </div>
  )
}

export default About
