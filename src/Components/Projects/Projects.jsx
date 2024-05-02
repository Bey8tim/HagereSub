import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Projects.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Projects = () => {
  return (
    <section className="projects r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart"></div>
        {/*Sliding swiper*/}
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-location">
                  <span>{card.location}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="pText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default Projects;
