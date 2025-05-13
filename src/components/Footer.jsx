// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2">O-Touch Palace</h4>
          <p>Luxury in the heart of town. Unmatched hospitality and comfort.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/restaurant">Restaurant</Link></li>
            <li><Link to="/club">Club</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Info</h4>
          <p>Email: info@otouchpalace.com</p>
          <p>Phone: +254 700 000 000</p>
          <p>Location: Town Center, Nairobi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
