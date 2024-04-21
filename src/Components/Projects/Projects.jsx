import React from "react";
import "./Projects.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-scroll";
const Projects = () => {
  return (
    <div className="projects">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        <Link to="about" smooth={true} offset={-150} duration={500}>
          See More Here <img src={white_arrow} alt="" />
        </Link>
      </button>
    </div>
  );
};

export default Projects;
