// App.js
import React, { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader';
import Header from './layout/Header';
import MobileMenu from './layout/MobileMenu';
import Footer from './layout/Footer';
import About from './sections/About';
import Freelance from './sections/Freelance';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Hero from './sections/Hero';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [loaderOpacity, setLoaderOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Refs for each section to animate on scroll into view
  const aboutRef = useRef(null);
  const freelanceRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // State to control when each section's animation triggers
  const [isAboutAnimated, setIsAboutAnimated] = useState(false);
  const [isFreelanceAnimated, setIsFreelanceAnimated] = useState(false);
  const [isExperienceAnimated, setIsExperienceAnimated] = useState(false);
  const [isContactAnimated, setIsContactAnimated] = useState(false);

  useEffect(() => {
    const startFadeOutTimer = setTimeout(() => {
      setLoaderOpacity(0);
    }, 1500);

    const hideLoaderCompletelyTimer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(startFadeOutTimer);
      clearTimeout(hideLoaderCompletelyTimer);
    };
  }, []);

  // Intersection Observers for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of element is visible
    };

    const observers = [];

    const setupObserver = (ref, setAnimatedState) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setAnimatedState(true);
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    setupObserver(aboutRef, setIsAboutAnimated);
    setupObserver(freelanceRef, setIsFreelanceAnimated);
    setupObserver(experienceRef, setIsExperienceAnimated);
    setupObserver(contactRef, setIsContactAnimated);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const offsetTop = targetElement.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when mobile menu is open
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-zinc-900 font-sans text-gray-200 scroll-smooth">
      {isLoading && (
        <div className={`fixed inset-0 bg-zinc-900 flex items-center justify-center z-50 transition-opacity duration-500`}
             style={{ opacity: loaderOpacity }}>
          <Loader />
        </div>
      )}

      <div className={`${showContent ? 'block' : 'hidden'}`}>
        <Header headerRef={headerRef} handleLinkClick={handleLinkClick} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} handleLinkClick={handleLinkClick} />

        <div className="pt-24"></div>

        <Hero handleLinkClick={handleLinkClick} />
        <About ref={aboutRef} isAnimated={isAboutAnimated} />
        <Freelance ref={freelanceRef} isAnimated={isFreelanceAnimated} />
        <Experience ref={experienceRef} isAnimated={isExperienceAnimated} />
        <Contact ref={contactRef} isAnimated={isContactAnimated} />

        <Footer />
      </div>
    </div>
  );
};

export default App;
