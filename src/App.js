// App.js
import React, { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader';
import Header from './layout/Header';
import MobileMenu from './layout/MobileMenu';
import Footer from './layout/Footer';
import About from './sections/About';
import Projects from './sections/Projects';
import Freelance from './sections/Freelance';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Hero from './sections/Hero'; // Importa el nuevo componente Hero

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [loaderOpacity, setLoaderOpacity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Refs para cada sección que queremos animar al entrar en vista
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const freelanceRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Estados para controlar cuándo debe activarse la animación de cada sección
  const [isAboutAnimated, setIsAboutAnimated] = useState(false);
  const [isProjectsAnimated, setIsProjectsAnimated] = useState(false);
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

  // Hook useEffect para configurar los Intersection Observers
  useEffect(() => {
    const observerOptions = {
      root: null, // El viewport es el root
      rootMargin: '0px',
      threshold: 0.2 // Cuando el 20% del elemento esté visible, se activa
    };

    const observers = [];

    // Función auxiliar para configurar un observador para un ref específico
    const setupObserver = (ref, setAnimatedState) => {
      if (ref.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            // Activar solo si está en vista.
            // La animación se disparará una sola vez gracias a observer.unobserve(entry.target)
            if (entry.isIntersecting) {
              setAnimatedState(true);
              observer.unobserve(entry.target); // Dejar de observar una vez que la animación se ha activado
            }
          });
        }, observerOptions);
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    // Configurar observadores para cada sección
    setupObserver(aboutRef, setIsAboutAnimated);
    setupObserver(projectsRef, setIsProjectsAnimated);
    setupObserver(freelanceRef, setIsFreelanceAnimated);
    setupObserver(experienceRef, setIsExperienceAnimated);
    setupObserver(contactRef, setIsContactAnimated);

    // Limpieza: desconectar todos los observadores al desmontar el componente
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      // Ajuste de 20px para que el elemento no quede justo al borde del encabezado
      const offsetTop = targetElement.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Esta propiedad ya asegura el desplazamiento suave para los clics de enlace
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
      document.body.style.overflow = 'hidden'; // Evita el scroll del body cuando el menú móvil está abierto
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Restaura el scroll del body
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    // Agregamos 'scroll-smooth' a este div para un desplazamiento suave con la rueda del mouse
    // para todo el contenido dentro de este contenedor.
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

        {/* Padding para el encabezado fijo y espacio inicial */}
        <div className="pt-24"></div>

        {/* Hero Section - No necesita Intersection Observer ya que siempre está visible al inicio */}
        <Hero handleLinkClick={handleLinkClick} />

        {/* Sections: Pasamos el ref y el estado de animación correspondiente */}
        <About ref={aboutRef} isAnimated={isAboutAnimated} />
        <Projects ref={projectsRef} isAnimated={isProjectsAnimated} />
        <Freelance ref={freelanceRef} isAnimated={isFreelanceAnimated} />
        <Experience ref={experienceRef} isAnimated={isExperienceAnimated} />
        <Contact ref={contactRef} isAnimated={isContactAnimated} />

        <Footer />
      </div>
    </div>
  );
};

export default App;
