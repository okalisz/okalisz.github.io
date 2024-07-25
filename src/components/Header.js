import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const text = document.querySelector(".animated-text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.05}s`;
    });
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="animated-text">Hello, I am Oliwier</h1>
        <h2>Junior Frontend Developer</h2>
        <p>Computer science student/enthusiast</p>
      </div>
    </header>
  );
};

export default Header;
