import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-600">O-Touch / Palace</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/restaurant">Restaurant</Link></li>
          <li><Link to="/club">Club</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contacts">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
