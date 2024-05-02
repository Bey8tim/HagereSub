import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Navbar />
        <Hero />
      </div>
      <div className="container">
        <Title subTitle="Our Services" title="What We Offer" />
        <Services />
        <Title subTitle="About Us" title="Our Company " />
        <About />
        <Title subTitle="Gallery" title="Project Photos" />
        <Projects />
        <Title subTitle="Testimonials" title="What Clients Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

{
  /**  npm run dev  
To run the web localhost */
}
