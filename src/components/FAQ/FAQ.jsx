import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "Is it possible to enable incoming email in a SharePoint Online document library?",
    answer: "No, SharePoint Online does not support incoming emails in document libraries. However, you can use Power Automate or third-party connectors as an alternative."
  },
  {
    question: "Where can I get more details about your offshore development services?",
    answer: "You can visit our services page or contact our support team to get a detailed overview of our offshore development offerings."
  },
  {
    question: "Can I change the developer?",
    answer: "Yes, you can request a developer change if needed. We ensure smooth transitions without affecting project timelines."
  },
  {
    question: "Will I get access directly to my resources?",
    answer: "Yes, you will have direct communication and access to your assigned resources throughout the engagement."
  },
  {
    question: "Where is your offshore development center located?",
    answer: "Our primary offshore development center is located in Bengaluru, India, with additional facilities in the UAE and USA."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion-container">
        <div>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-header-content">We offer a range of pricing plans to fit every budget and level of need. Whether you're a solo professional</p>
        </div>
   
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className={`accordion-header ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className="accordion-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
