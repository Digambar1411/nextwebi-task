import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "I wanted to redesign and revamp the website of my institution. I contacted Nextwebi and they understood the vision of an organization and through several discussions and timely suggestions, the website was delivered and deployed successfully. Nextwebi, without a doubt, have what it takes to make a great web application, not to mention with a competitive price too. Now on seeing the end product I am satisfied and know that the web app is in safe hands. Thank you to the entire team.",
    companyLogo: "/icons/company-logo.png",
    companyName: "DYNAMATIC TECHNOLOGIES",
    userImage: "https://i.pravatar.cc/200?img=4",
    userName: "Qenowned & D Firm",
    role: "Team Lead",
  },
  {
    text: "The team delivered an exceptional project on time with great professionalism. We are impressed with their skills and dedication.",
    companyLogo: "/icons/company-logo.png",
    companyName: "TECH INNOVATORS",
    userImage: "https://i.pravatar.cc/200?img=1",
    userName: "Michael Johnson",
    role: "Project Manager",
  },
  {
    text: "Nextwebi's expertise helped us scale our app seamlessly with modern UI and great performance improvements.",
    companyLogo: "/icons/company-logo.png",
    companyName: "APP SOLUTIONS",
    userImage: "https://i.pravatar.cc/200?img=2",
    userName: "Sophia Brown",
    role: "CTO",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2>Hear It From Those Who Matter Most</h2>
        <p>
          Offshore development services refers to the practice of hiring a remote team or a software
          development company in a different company to help reduce development costs
        </p>

        <div className="testimonial-carousel">
          {/* Previous Button */}
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>

          {/* Testimonial Card */}
          <div className="testimonial-card">
            <p className="quote">❝</p>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>

            <div className="testimonial-footer">
              <div className="company-info">
                <img src={testimonials[currentIndex].companyLogo} alt={testimonials[currentIndex].companyName} />
                <span>{testimonials[currentIndex].companyName}</span>
              </div>
              <div className="user-info">
                <img src={testimonials[currentIndex].userImage} alt={testimonials[currentIndex].userName} />
                <div>
                  <h4>{testimonials[currentIndex].userName}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
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

export default Testimonials;
