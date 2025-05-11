import React from 'react';
import heroImage from '../hero.jpg'; // Replace with your actual image path
import heroVideo from '../hero.mp4'; // Replace with your actual video path

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
        {/* You can choose either an image or a video */}
        {/* <img src={heroImage} alt="Hotel View" className="w-full h-full object-cover" /> */}
        <video src={heroVideo} autoPlay loop muted className="w-full h-full object-cover"></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to O-Touch Palace</h1>
          <p className="text-lg md:text-xl mb-8">Experience unparalleled luxury and comfort.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">Book Your Stay</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;