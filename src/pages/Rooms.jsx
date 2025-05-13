// src/pages/Rooms.jsx
import React from 'react';

import room1 from '../assets/gallery/image1.jpg';
import room2 from '../assets/gallery/room2.avif';
import room3 from '../assets/gallery/room3.avif';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    image: room1,
    description: 'Spacious deluxe room with a beautiful town view.',
    price: 'Ksh 1200/night'
  },
  {
    id: 2,
    name: 'Standard Room',
    image: room2,
    description: 'Comfortable and affordable with modern amenities.',
    price: 'Ksh 1800/night'
  },
  {
    id: 3,
    name: 'Suite',
    image: room3,
    description: 'Luxury suite with king-size bed and private balcony.',
    price: 'Ksh 2000/night'
  }
];

function Rooms() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
      {rooms.map((room) => (
        <div key={room.id} className="border rounded shadow hover:shadow-lg transition">
          <img src={room.image} alt={room.name} className="w-full h-48 object-cover rounded-t" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{room.name}</h3>
            <p>{room.description}</p>
            <p className="mt-2 text-blue-600 font-semibold">{room.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rooms;
