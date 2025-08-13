import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-lg rounded-xl w-screen">
      <div className="container mx-auto px-3 py-2 flex items-center justify-between">

        {/* Brand Logo */}
        <div className="text-2xl font-bold hover:text-amber-400 cursor-pointer flex items-center">
          <img src="./logo.jpg" alt="Logo" className="inline-block w-[40px] h-[35px] border-2 border-amber-50 hover:border-amber-400 mr-2"/>
          14 August
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:bg-yellow-400 px-3 py-1 rounded transition-colors duration-300 font-semibold">Home</a>
          <a href="#about" className="hover:bg-yellow-400 px-3 py-1 rounded transition-colors duration-300 font-semibold">About</a>
          <a href="#wish" className="hover:bg-yellow-400 px-3 py-1 rounded transition-colors duration-300 font-semibold">Wishes</a>
          <a href="#heroes" className="hover:bg-yellow-400 px-3 py-1 rounded transition-colors duration-300 font-semibold">Heroes</a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 md:hidden text-2xl focus:outline-none cursor-pointer"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col items-center space-y-4 bg-green-800 py-4 md:hidden transition-all duration-300">
          <a href="#home" className="block text-white hover:bg-green-400 w-full text-center py-2 rounded transition-colors duration-300">Home</a>
          <a href="#about" className="block text-white hover:bg-green-400 w-full text-center py-2 rounded transition-colors duration-300">About</a>
          <a href="#heros" className="block text-white hover:bg-green-400 w-full text-center py-2 rounded transition-colors duration-300">Heroes</a>
          <a href="#wish" className="block text-white hover:bg-green-400 w-full text-center py-2 rounded transition-colors duration-300">Wishes</a>
        </div>
      )}
    </nav>
  );
}
