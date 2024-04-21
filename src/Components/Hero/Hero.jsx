import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          We provide comprehensive professional service package in the field of
          Property Management, Property Valuation and Consultancy Services in
          Ethiopia.
        </h1>
        <p>
          HagereSeb is working in all undertakings to earn client’s business by
          exceeding their expectations through integrity, diligence,
          professionalism, technology and communication. In addition, provide
          them with solutions to not only meet their needs but to exceed them.
        </p>
        <button className="btn">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            Explore More <img src={dark_arrow} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
