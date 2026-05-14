import React from 'react'

const Navbar = () => {
  return (
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">
        Logo
      </h1>

      {/* Links */}
      <ul className="flex gap-6">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Services</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar