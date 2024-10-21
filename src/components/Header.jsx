import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="p-2 m-0 justify-between bg-gradient-to-r from-green-600 from-0% to-black text-white underline ">
    <div className=" flex space-x-36 justify-center">


        <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-gray-400 transform transition duration-300'>
            <NavLink to="/synth">Synth</NavLink>
        </span>
        <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-gray-400 transform transition duration-300'>
            <NavLink to="/guitar">Guitar</NavLink>
        </span>
        <span className='border-2 border-white border-opacity-25 bg-gray-400 bg-opacity-50 rounded-sm px-6 py-4  hover:bg-gray-400 transform transition duration-300'>
            <NavLink to="/" >Home</NavLink>
        </span>
        <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-gray-400 transform transition duration-300'>
            <NavLink to="/bass">Bass</NavLink>
        </span>
        <span className='border-2 border-white border-opacity-55 bg-gray bg-opacity-50 rounded-sm px-6 py-4  hover:bg-gray-400 transform transition duration-300'>
            <NavLink to="/percussion">Percussion</NavLink>
        </span>

       
    </div >
</nav >
  )
}
