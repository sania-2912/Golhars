import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./RecommendCarousal.css";

const RecommendCarousel = ({ paintings }) => {
  const limitedPaintings = paintings.slice(0, 4);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      loop={true}
      className="recommend-swiper"
    >
      {limitedPaintings.map((painting) => (
        <SwiperSlide key={painting._id}>
          <img
            src={painting.images[0]}
            alt={painting.title}
            className="carousel-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecommendCarousel;
