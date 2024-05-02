import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>HagereSub</h3>
        <h2>
          One of the best in Property Management, Property Valuation and
          Consultancy Services.
        </h2>
        <p>
          HagereSeb Property Management and Valuation Services P.L.C. is a
          professional firm established to provide comprehensive professional
          service package in the field of property management, asset/property
          valuation and other comprehensive management consultancy services in
          Ethiopia.
        </p>
        <p>
          Our company is dedicated to provide an excellent/professional service
          to customers using its well-trained, professional, experienced and
          motivated staffs in order to create value and satisfaction.
        </p>
        <p>
          The company has designed its programs and different programmatic
          activities in line with the guiding principles of international and
          national legal, developmental, social, economic and financial
          transaction needs.
        </p>
        <button className="btn dark-btn">
          <Link to="contact" smooth={true} offset={-150} duration={500}>
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
