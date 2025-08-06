import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './Header.css'

const Header = () => {

  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); 
      if (window.scrollY > 10) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
    <div className="logo">
        <img src="assets/logo.png" alt="Nextwebi Logo" width={100} />
    </div>
      <ul className="navbar">
        <li>Company ▼</li>
        <li>Services ▼</li>
        <li>Hire Developers ▼</li>
        <li>Solutions ▼</li>
        <li>Technologies ▼</li>
        <li>Our Work</li>
      </ul>
      <button className="contact-btn">Contact Us</button>
  </header>
  
  )
}

export default Header