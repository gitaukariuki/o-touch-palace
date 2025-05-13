// src/pages/Restaurant.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import restaurant1 from '../assets/gallery/restaurant1.jpg';
import restaurant2 from '../assets/gallery/restaurant2.jpg';
import restaurant3 from '../assets/gallery/restaurant3.jpg';

const restaurantImages = [restaurant1, restaurant2, restaurant3];

function Restaurant() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Restaurant</h1>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {restaurantImages.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Restaurant ${idx + 1}`} className="rounded-lg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Restaurant;
