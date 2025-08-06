import React from "react";
import "./Technologies.css";

const techCategories = [
  "Frontend Programming Languages",
  "Backend Programming Languages",
  "Mobile",
  "Big Data",
];

const techStack = [
  { name: "HTML5", icon: "assets/html5.png" },
  { name: "CSS3", icon: "assets/css3.png" },
  { name: "Vue", icon: "assets/vue.png" },
  { name: "Angular", icon: "assets/angular.png" },
  { name: "JavaScript", icon: "assets/javascript.png" },
  { name: "React", icon: "assets/react.png" },
];

const Technologies = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h1>Absolutely, We Have Thoroughly Mastered The Technologies You Prefer.</h1>
          <p>
            Our exceptionally skilled IT specialists are proficient in both classic and modern 
            programming languages, as well as frameworks. We aim for excellence, choosing only 
            the top-tier candidates when selecting our IT specialists.
          </p>
        </div>

        <div className="tech-content">
          {/* Left Section */}
          <div className="tech-left">
            {techCategories.map((category, index) => (
              <div>
                <div className='tech-category'key={index}>
                  {category}
                </div>
              { index < techCategories.length-1 && <hr className="divider" />}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="tech-right">
            {techStack.map((tech, index) => (
              <div className="tech-card" key={index}>
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
