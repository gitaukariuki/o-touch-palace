// src/components/Carousel.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Example image imports
import img1 from "../assets/gallery/image1.jpg";
import img2 from "../assets/gallery/image2.jpg";
import img3 from "../assets/gallery/image3.jpg";

const ImageCarousel = () => {
  const images = [img1, img2, img3];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      dynamicHeight={false}
    >
      {images.map((src, i) => (
        <div key={i}>
          <img src={src} alt={`Slide ${i + 1}`} className="object-cover h-96 w-full" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
