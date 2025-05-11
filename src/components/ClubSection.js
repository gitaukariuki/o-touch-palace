import React from 'react';
import clubImage from '../club.jpg'; // Replace with your actual image path

function ClubSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-right">Experience the Vibrant Nightlife</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-right">
            Our exclusive club offers a vibrant atmosphere, signature cocktails, and live entertainment. It's the perfect place to unwind and enjoy the evening.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center md:text-right">
            Dance the night away or simply relax with friends in our stylish lounge.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full block mx-auto md:ml-auto md:mr-0">Explore the Club</button>
        </div>
        <div className="md:order-1">
          <img src={clubImage} alt="Club Interior" className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default ClubSection;