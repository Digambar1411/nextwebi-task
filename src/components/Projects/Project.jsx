import React, { useState } from "react";
import "./Project.css";

const ProjectsData = [
  {
    heading: "Web application development for a real estate company in dubai",
    text: "Our client, a real estate agency based in Dubai, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
    image: "/assets/project1.jpg",
  },
  {
    heading: "Web application development for a real estate company in dubai",
    text: "Our client, a real estate agency based in Dubai, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
    image: "/assets/project1.jpg",
  },{
    heading: "Web application development for a real estate company in dubai",
    text: "Our client, a real estate agency based in Dubai, recognized the growing demand for a streamlined platform that would facilitate the process of buying and renting properties in Dubai.",
    image: "/assets/project1.jpg",
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === Projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <div className="projects-container">
        <h2>Where great ideas became real results</h2>
        <p>
          Offshore development services refers to the practice of hiring a remote team or a software development company in a different company to help reduce development costs
        </p>

        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>

          <div className="project-card-container">
          <div className="project-card">
            <div className="project-left-section">
              <h3>{ProjectsData[currentIndex].heading}</h3>
              <p>{ProjectsData[currentIndex].text}</p>
            </div>
            <div className="project-right-section">
                <img src='assets/project1.jpg' alt={`project${currentIndex}`} />
            </div>
          </div>
          </div>

          {/* Next Button */}
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {ProjectsData.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
