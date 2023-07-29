import React from "react";
import Carousel from "better-react-carousel";
import { sliderImage } from "./sliderImage";

const breakpoints = [
  {
    breakpoint: 400,
    cols: 1,
    rows: 1,
    gap: 2,
    loop: true,
    autoplay: 3000,
  },
  {
    breakpoint: 1024,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000,
  },
  {
    breakpoint: 1280,
    cols: 4,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000,
  },
];

const Gallery = () => {
  return (
    <div className="px-0 sm:px-[3.9rem] w-full flex flex-col">
      <div>
        <div className="one mb-[3rem]">
          <h1 className="text-2xl sm:text-4xl">Provided Features</h1>
        </div>
      </div>
      <Carousel hideArrow={true} showDots={true} responsiveLayout={breakpoints}>
        {sliderImage.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="flex flex-col items-center gap-5">
              <img className="w-full h-[200px]" src={slide.urls} alt="" />
              <h2 className="text-white text-2xl">{slide.title}</h2>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
