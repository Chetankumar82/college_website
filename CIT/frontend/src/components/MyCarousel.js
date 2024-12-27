import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Arts from "./../assets/Event/Art6.jpg";
import Recreation from "./../assets/Event/re4.jpeg";
import cp from "./../assets/Event/cp6.jpg";
import seminar from "./../assets/Event/seminar2.jpg";
import lakshaya from "./../assets/carosusle/lakshya.png";
import tarunaya from "./../assets/carosusle/tarunya.png";
import culture from "./../assets/Event/Culture-7.jpg";
import "./MyCarousel.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  {
    url: Arts,
    text: "ARTS",
    link: "/Event", // Add anchor links
  },
  {
    url: Recreation,
    text: "RECREATION",
    link: "/Event",
  },
  {
    url: cp,
    text: "CAMPUS",
    link: "/Event",
  },
  {
    url: seminar,
    text: "SEMINAR",
    link: "/Event",
  },
  {
    url: lakshaya,
    text: "LAKSHYA",
    link: "/Event",
  },
  {
    url: tarunaya,
    text: "TARUNYA",
    link: "/Event",
  },
  {
    url: culture,
    text: "CULTURAL",
    link: "/Event",
  },
  
];

const MyCarousel = () => {
  return (
    <div className="cta-newsletter-wrapper">
      <div className="mx-auto text-center">
        <h2 className="text-center text-5xl mb-2 carosule">Life @ CIT</h2>
        <img src="" alt="" />
        <p className="mb-5">Choose CIT for a better future! With top rankings, we offer quality education, expert faculty, and a proven track record of success to shape your career path.</p>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider relative h-full" key={index}>
              <a href={imageUrl.url} target="_blank" rel="noopener noreferrer ">
                <img
                  src={imageUrl.url}
                  className="w-full h-full    object-cover  "
                  alt="movie"
                />
              </a>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 text-center">
                <a
                  href={imageUrl.link}
                  className="text-white text-4xl font-sans"
                >
                  {imageUrl.text}
                </a>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
