import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">

      <div className="hero-content">
        <h1 className="hero-title">
          Offshore Software <br />
          Development Company in <br />
          New York
        </h1>
        <p className="hero-description">
          At Nextwebi, we provide agile result-oriented offshore software development services for
          companies ranging from startups to enterprises to help you keep up with constant
          technological evolution. We deploy a team of expert developers
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get in Touch</button>
          <button className="btn btn-secondary">Our Works</button>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="slider-controls">
        <button className="slider-btn left">‹</button>
        <button className="slider-btn right">›</button>
      </div>

      {/* Dots navigation */}
      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default HeroSection;
