import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='m-4 p-4'>
      <div classname='bg-gray-200 border-solid border-2'>
        <h1 className='font-bold underline text-center m-4 p-4 text-3xl'>Welcome to my online jam pad</h1>
        <h3 className='font-semibold text-center m-4 p-4 text-3xl'>Choose your instrument!</h3>
        <h5 className=' text-center m-4 p-4 text-xl'>Please have your sound turned on while browsing this page </h5>
      </div>
        <div className='grid grid-cols-4 m-auto p-10 space-x-4 rounded-sm border-solid border-2'>
          <div className='flex justify-center items-center hover:scale-105 hover:bg-gray-300 transform transition duration-500 rounded-sm bg-gradient-to-bl from-purple-200 via-purple-800 to-black'> <NavLink to="/synth" >  <img src='/img/synth.png'></img></NavLink></div>
          <div className='flex justify-center items-center hover:scale-105 hover:bg-gray-300 transform transition duration-500 rounded-sm bg-gradient-to-bl from-red-200 via-red-800 to-black'>        <NavLink to="/guitar" className='flex justify-center items-center' >  <img src='/img/gtr.png'></img></NavLink></div>
          <div className='flex justify-center items-center hover:scale-105 hover:bg-gray-300 transform transition duration-500 rounded-sm bg-gradient-to-br from-blue-200 via-blue-800 to-black'>       <NavLink to="/bass" className='flex justify-center items-center' > <img src='/img/bass.png'></img></NavLink></div>
          <div className='flex justify-center items-center hover:scale-105 hover:bg-gray-300 transform transition duration-500 rounded-sm bg-gradient-to-br from-orange-200 via-orange-800 to-black'> <NavLink to="/percussion" className='flex justify-center items-center' >  <img src='/img/drum.png'></img></NavLink></div>
        </div>
    </div>
  )
}
