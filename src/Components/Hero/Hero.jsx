import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="hero">
      <section className=" hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side*/}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />

              <h1>
                Discover <br /> How much you'r
                <br />
                Property Value
              </h1>
            </div>
            <div className="flexColStart  hero-des">
              <span className="secondaryText">
                We provide comprehensive professional service package in the
                field of
              </span>
              <span className="secondaryText">
                Property Management, Property Valuation and Consultancy
                Services.
              </span>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter1 stat">
                <span>
                  <CountUp start={8200} end={8600} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Properties Valuated </span>
              </div>
              <div className="flexColCenter1 stat">
                <span>
                  <CountUp start={50} end={110} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers </span>
              </div>
              <div className="flexColCenter1 stat">
                <span>
                  <CountUp end={19} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Companies </span>
              </div>
            </div>
            <button className="btn light-btn">
              <Link to="about" smooth={true} offset={-150} duration={500}>
                Explore More
              </Link>
            </button>
          </div>
          {/* right side*/}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero.png " alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
