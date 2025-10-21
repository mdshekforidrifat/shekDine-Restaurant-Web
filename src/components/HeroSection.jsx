import React from 'react'
import heroImg from "../assets/hero.jpg"

const HeroSection = () => {
  return (
    <div className=' relative w-full h-[50vh] lg:h-[65vh]' >
      <img className='w-full h-full object-cover' src={heroImg} alt="" />
      <div className=' container mx-auto absolute inset-0 flex flex-col mt-10 lg:mt-0 text-white justify-center items-center lg:items-start px-8'>
        <h1 className='text-2xl sm:text-3xl lg:text-6xl font-extrabold'>Welcome to Shek Dine </h1>
        <p className='text-sm lg:text-lg font-semibold text-neutral-300'> Discover the best recipes, restaurants, and culinary tips — all in one place.</p>
        <button className=' cursor-pointer px-3 py-2 bg-orange-500 rounded-md lg:ml-10 mt-2 lg:mt-5'>Explore now</button>
      </div>
    </div>
  )
}

export default HeroSection