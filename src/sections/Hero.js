// src/sections/Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import localGifBackground from '../assets/images/my-awesome-background.gif';

const Hero = ({ handleLinkClick }) => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState("Crafting innovative solutions for the web and beyond.");
  const [isSubtitleAnimating, setIsSubtitleAnimating] = useState(false);
  const subtitleRef = useRef(null); // Ref for subtitle element for animations

  useEffect(() => {
    // Timer to change text and trigger animation after 6 seconds
    const textChangeTimer = setTimeout(() => {
      setDisplayedSubtitle("Swipe Down");
      setIsSubtitleAnimating(true);

      // Optional: turn off animation after its duration for a single pulse
      const animationDuration = 1000; // Match your 'pulse-grow' animation duration (ms)
      setTimeout(() => {
        setIsSubtitleAnimating(false);
      }, animationDuration);

    }, 6000);

    return () => {
      clearTimeout(textChangeTimer);
    };
  }, []);

  return (
    <section 
      id="hero-section"
      className="h-screen py-20 bg-cover bg-center bg-no-repeat relative rounded-b-xl shadow-lg mx-4 z-0 flex items-center justify-center"
      style={{ backgroundImage: `url(${localGifBackground})` }}>
      <div className="absolute inset-0 bg-black opacity-40 rounded-b-xl"></div>
      <div className="container mx-auto px-6 relative z-10 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          <span className="text-white">Full Stack Developer</span>
        </h2>
        <p ref={subtitleRef}
           className={`text-xl md:text-2xl mb-8 opacity-90 ${isSubtitleAnimating ? 'animate-pulse-grow' : 'animate-fade-in-up'}`}
           style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {displayedSubtitle}
        </p>
        <a
          href="#freelance"
          onClick={(e) => handleLinkClick(e, 'freelance')}
          className="inline-flex items-center bg-white text-[#FF8800] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 group"
          aria-label="View my work"
        >
          View my work <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
