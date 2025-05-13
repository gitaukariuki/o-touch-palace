// src/pages/Club.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import club1 from '../assets/gallery/club1.jpg';
import club2 from '../assets/gallery/club2.jpg';
import club3 from '../assets/gallery/club3.avif';

const clubImages = [club1, club2, club3];

function Club() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Club</h1>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {clubImages.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Club ${idx + 1}`} className="rounded-lg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Club;
 