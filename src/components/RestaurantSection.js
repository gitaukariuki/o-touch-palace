import React from 'react';
import restaurantImage from '../restaurant.jpg'; // Replace with your actual image path

function RestaurantSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Indulge in Culinary Delights</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our exquisite restaurant offers a diverse menu of local and international cuisine, prepared with the freshest ingredients by our talented chefs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Enjoy a memorable dining experience in our elegant setting, whether you're joining us for breakfast, lunch, or dinner.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">View Menu</button>
        </div>
        <div>
          <img src={restaurantImage} alt="Restaurant Interior" className="rounded-lg shadow-md w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default RestaurantSection;