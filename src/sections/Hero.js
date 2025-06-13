// src/sections/Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react'; // ChevronDown ya no es necesario aquí
import localGifBackground from '../assets/images/my-awesome-background.gif';

const Hero = ({ handleLinkClick }) => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState("Crafting innovative solutions for the web and beyond.");
  const [isSubtitleAnimating, setIsSubtitleAnimating] = useState(false);
  const subtitleRef = useRef(null); // Referencia para el elemento del subtítulo para animaciones si fuera necesario

  useEffect(() => {
    // Temporizador para cambiar el texto y activar la animación después de 3 segundos
    const textChangeTimer = setTimeout(() => {
      setDisplayedSubtitle("Swipe Down");
      setIsSubtitleAnimating(true); // Activa la animación

      // Opcional: Desactivar la animación después de su duración si es un pulso único
      // Ajusta la duración (en milisegundos) para que coincida con la duración de tu animación 'pulse-grow'
      const animationDuration = 1000; // Ejemplo: si tu animación dura 1 segundo
      setTimeout(() => {
        setIsSubtitleAnimating(false);
      }, animationDuration);

    }, 6000);

    // Limpieza: Asegúrate de limpiar el temporizador al desmontar el componente
    return () => {
      clearTimeout(textChangeTimer);
    };
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  return (
    <section 
      id="hero-section" // Mantenemos el ID, pero la lógica de scroll hint con IO ha sido eliminada
      className="h-screen py-20 bg-cover bg-center bg-no-repeat relative rounded-b-xl shadow-lg mx-4 z-0 flex items-center justify-center"
      style={{ backgroundImage: `url(${localGifBackground})` }}>
      <div className="absolute inset-0 bg-black opacity-40 rounded-b-xl"></div>
      <div className="container mx-auto px-6 relative z-10 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          <span className="text-white">Full Stack Developer</span>
        </h2>
        {/* El párrafo que contendrá el texto dinámico y la animación */}
        <p ref={subtitleRef} // Asigna la referencia al párrafo
           className={`text-xl md:text-2xl mb-8 opacity-90 ${isSubtitleAnimating ? 'animate-pulse-grow' : 'animate-fade-in-up'}`}
           style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {displayedSubtitle}
        </p>
        <a
          href="#projects"
          onClick={(e) => handleLinkClick(e, 'projects')}
          className="inline-flex items-center bg-white text-[#FF8800] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 group"
          aria-label="View Projects"
        >
          View Projects <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* La animación de desplazamiento anterior se ha eliminado completamente de aquí */}
    </section>
  );
};

export default Hero;
