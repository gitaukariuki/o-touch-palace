// src/components/HeroCarousel.jsx
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroCarousel = () => (
  <Carousel autoPlay infiniteLoop showThumbs={false}>
    <div>
      <img src="
https://placehold.co/600x400?text=Sample+Image

https://placehold.co/600x400?text=Sample+Image
" alt="Luxury Room" />
      <p className="legend">Luxurious Rooms</p>
    </div>
    <div>
      <img src="/images/hero2.jpg" alt="Restaurant" />
      <p className="legend">5-Star Restaurant</p>
    </div>
    <div>
      <img src="/images/hero3.jpg" alt="Club" />
      <p className="legend">Vibrant Night Club</p>
    </div>
  </Carousel>
);

export default HeroCarousel;
