import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HeroSlider() {
  return (
    <Swiper autoplay={{ delay: 3000 }}>
      <SwiperSlide><img src="/assets/slide1.jpg" alt="Luxury Room" /></SwiperSlide>
      <SwiperSlide><img src="/assets/slide2.jpg" alt="Restaurant View" /></SwiperSlide>
      <SwiperSlide><img src="/assets/slide3.jpg" alt="Night Club" /></SwiperSlide>
    </Swiper>
  );
}