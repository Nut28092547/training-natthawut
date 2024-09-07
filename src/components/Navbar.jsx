import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-5 shadow-md flex justify-between items-center">
      <div className="flex items-center ml-10">
        <span className="text-white font-semibold text-lg">NVC Training Center</span>
      </div>
      <ul className="flex space-x-4 mr-10">
      <li>
        <NavLink to="/" className="text-gray-800 bg-blue-100 hover:bg-blue-200 border border-gray-800 p-2 rounded-lg transition-all duration-300 ease-in-out">หน้าหลัก</NavLink> 
      </li>
      <li>
        <NavLink to="/Course" className="text-gray-800 bg-blue-100 hover:bg-blue-200 border border-gray-800 p-2 rounded-lg transition-all duration-300 ease-in-out">หลักสูตรที่เปิดสอน</NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className="text-gray-800 bg-blue-100 hover:bg-blue-200 border border-gray-800 p-2 rounded-lg transition-all duration-300 ease-in-out">ติดต่อ</NavLink>
      </li>
      </ul>
        </nav>
  )
}

export default Navbar
