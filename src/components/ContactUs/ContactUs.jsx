import React from 'react';
import './ContactUs.css'; 

const Contact = () => {
  const contacts = [
    {
      country: "India",
      flag: "/flags/india.png",
      address: `4th Floor, 32/1, Mpark, NCPR Industrial Layout,
                Doddanekundi Industrial Area 2, Seetharampalya,
                Mahadevapura, Bengaluru, Karnataka 560048.`
    },
    {
      country: "USA",
      flag: "/flags/usa.png",
      address: `188 Spear st #350,
                San Francisco, CA 94105,
                United States`
    },
    {
      country: "UAE",
      flag: "/flags/uae.png",
      address: `Office No.2042, ABN Group, 20th Floor,
                Burjuman Business Tower,
                Al Mankhool, Burdubai Dubai.`
    }
  ];

  return (
    <div className='contact-wrapper'>
      <div className="contact-container">
        <div className="contact-info">
          <h4>Get in Touch</h4>
          <h2>Connect for Excellence Your Gateway to Exceptional Solutions.</h2>

          <div className='address'>
            {contacts.map((item, index) => (
              <div className="location" key={index}>
                <img src={item.flag} alt={item.country} />
                <div>
                  <h3>{item.country}</h3>
                  <p>{item.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h3>Your Vision, Our Mission: Let's Shape Success Together.</h3>
          <input className='form-input' type="text" placeholder="Name" />
          <input className='form-input' type="text" placeholder="Company Name" />
          <input className='form-input' type="email" placeholder="Email Address" />
          <input className='form-input' type="text" placeholder="Contact Number" />
          <textarea className='form-input' placeholder="Describe Your Requirement"></textarea>
          <div className='form-footer'>
            <div className="flex checkbox-container">
              <input type="checkbox" id="portfolio" />
              <label htmlFor="portfolio">Click here to quickly get portfolio in your inbox</label>
            </div>
            <div className="flex captcha">
              <span>5 + 3</span>
              <input type="text" />
            </div>
          </div>
          <button className='form-btn'>Request Proposal</button>
        </div>
    </div>
    </div>
  );
};

export default Contact;
