import React from 'react';

function AboutSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About O-Touch Palace</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to O-Touch Palace, a haven of tranquility and luxury nestled in the heart of [Location]. Our hotel offers exquisite accommodations, world-class dining, and exceptional service to make your stay unforgettable.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          From our elegantly appointed rooms and suites to our state-of-the-art facilities, every detail is designed with your comfort and satisfaction in mind. Whether you're here for a relaxing getaway, a business trip, or a special occasion, O-Touch Palace is the perfect choice.
        </p>
        {/* Add more content and images as needed */}
      </div>
    </section>
  );
}

export default AboutSection;