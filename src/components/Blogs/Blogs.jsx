import React from 'react';
import './Blogs.css';

const blogs = [
  {
    title: "AI in Healthcare",
    description: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    image: "src/assets/blog1.png",
    link: "#"
  },
  {
    title: "AI Ethics",
    description: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    image: "src/assets/blog2.png",
    link: "#"
  },
  {
    title: "Machine Learning Explained",
    description: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    image: "src/assets/blog3.png",
    link: "#"
  }
];

const Blogs = () => {
  return (
    <>
      <div className="blog-section-header">
        <h2>Related Blogs</h2>
      </div>
   
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href={blog.link} className="read-more">Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
