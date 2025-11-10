import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate your style.<br />Simplify shopping.
          </h1>
          <p className="hero-subtitle">
            Discover premium products at the best prices — fast, easy, reliable.
          </p>
          <button className="hero-cta">Shop Now</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800" 
            alt="Shopping" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

