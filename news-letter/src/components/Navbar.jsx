import React, { useState } from 'react'
import search from "../assets/images/search.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-white">
      {/* Top Row: Logo and Hamburger */}
      <div className="flex items-center justify-between px-4 md:px-0">
        <h2 className="font-bold text-[22px]">Daily Potato</h2>

        {/* Hamburger Menu (visible on mobile/tablet only) */}
        <button
          className="md:hidden text-white text-[22px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Nav Links */}
      <div className={`mt-4 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-[22px] px-4 md:px-0">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
          <li>
            <img src={search} alt="search" className="w-5 h-5 mt-[4px] md:mt-[8px]" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar