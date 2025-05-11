import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; // Replace with your actual logo path

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="O-Touch Palace Logo" className="h-8 mr-2" />
          <span className={`text-xl font-bold ${isSticky ? 'text-gray-800' : 'text-white'}`}>O-Touch Palace</span>
        </Link>
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className={`hover:text-blue-500 ${isSticky ? 'text-gray-700' : 'text-white'}`}>Home</Link>
          <Link to="/about" className={`hover:text-blue-500 ${isSticky ? 'text-gray-700' : 'text-white'}`}>About</Link>
          <Link to="/restaurant" className={`hover:text-blue-500 ${isSticky ? 'text-gray-700' : 'text-white'}`}>Restaurant</Link>
          <Link to="/club" className={`hover:text-blue-500 ${isSticky ? 'text-gray-700' : 'text-white'}`}>Club</Link>
          <Link to="/rooms" className={`hover:text-blue-500 ${isSticky ? 'text-gray-700' : 'text-white'}`}>Rooms</Link>
          <Link to="/contact" className={`hover:text-blue-500 ${isSticky ? 'text-gray-700' : 'text-white'}`}>Contact</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl ${isSticky ? 'text-gray-800' : 'text-white'}`}></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-2">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-500 text-gray-700">Home</Link>
            <Link to="/about" className="hover:text-blue-500 text-gray-700">About</Link>
            <Link to="/restaurant" className="hover:text-blue-500 text-gray-700">Restaurant</Link>
            <Link to="/club" className="hover:text-blue-500 text-gray-700">Club</Link>
            <Link to="/rooms" className="hover:text-blue-500 text-gray-700">Rooms</Link>
            <Link to="/contact" className="hover:text-blue-500 text-gray-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;