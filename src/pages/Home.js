import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import RestaurantSection from '../components/RestaurantSection';
import ClubSection from '../components/ClubSection';
import RoomsSection from '../components/RoomsSection';
import Gallery from '../components/Gallery';
import ImageCarousel from '../components/ImageCarousel';
import Newsletter from '../components/Newsletter';

function Home() {
  const galleryImages = [
    // Add your image paths here
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    // ... more images
  ];

  const carouselImages = [
    // Add your carousel image paths here
    '/images/carousel1.jpg',
    '/images/carousel2.jpg',
    // ... more images
  ];

  return (
    <div>
      <Hero />
      <AboutSection />
      <RestaurantSection />
      <ClubSection />
      <RoomsSection />
      <ImageCarousel images={carouselImages} />
      <Gallery images={galleryImages} />
      <Newsletter />
    </div>
  );
}

export default Home;