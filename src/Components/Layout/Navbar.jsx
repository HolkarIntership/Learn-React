import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="text-xl font-bold text-blue-600">Navbar</NavLink>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className={`md:flex space-x-6 items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <NavLink to="/" className="text-gray-700 hover:text-blue-500">Home</NavLink>
            <NavLink to="/about" className="text-gray-700 hover:text-blue-500">About Us</NavLink>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                Dropdown
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white border rounded-md mt-2 shadow-md z-10">
                  <NavLink to="/counter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Counter</NavLink>
                  <NavLink to="/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product List</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/service" className="text-gray-700 hover:text-blue-500">Service</NavLink>

            <div className="flex space-x-2 items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-red-600" : "text-gray-700"} hover:text-blue-500`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black"
                })}
              >
                hyyy
              </NavLink>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
