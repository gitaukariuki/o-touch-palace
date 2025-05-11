import React from 'react';
import { Link } from 'react-router-dom';
import room1 from '../room1.jpg'; // Replace with your actual image paths
import room2 from '../room2.jpg';
import room3 from '../room3.jpg'; // Add more imports as needed

function RoomsSection() {
  const rooms = [
    {
      name: 'Deluxe Room',
      description: 'Spacious room with a king-size bed and city view.',
      image: room1,
      link: '/rooms/deluxe', // Example link
    },
    {
      name: 'Suite',
      description: 'Luxurious suite with a separate living area and balcony.',
      image: room2,
      link: '/rooms/suite', // Example link
    },
    {
      name: 'Family Room',
      description: 'Perfect for families, featuring multiple beds and ample space.',
      image: room3,
      link: '/rooms/family', // Example link
    },
    // Add more rooms
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Luxurious Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{room.description}</p>
                <Link to={room.link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;