import React, { forwardRef } from 'react';
import { Sparkles, Code, User, Lightbulb } from 'lucide-react'; // Nuevos iconos para la sección

// Usamos forwardRef para permitir que este componente reciba una ref de un componente padre,
// lo cual es necesario para la animación de aparición al hacer scroll.
const About = forwardRef(({ isAnimated }, ref) => {
  return (
    <section
      id="about"
      ref={ref} // Asignamos la ref al elemento principal de la sección
      // Aplicamos la clase de animación condicionalmente.
      // 'opacity-0' asegura que el elemento esté oculto antes de que la animación lo muestre.
      // 'transition-opacity duration-0' ayuda a controlar el estado inicial antes de la animación.
      className={`py-16 bg-zinc-800 rounded-xl shadow-inner mx-4 mt-8 px-6 md:px-0 ${isAnimated ? 'animate-fade-in-up' : 'opacity-0'} transition-opacity duration-0`}
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-10 pb-2 border-b-2 border-dashed border-gray-700 relative">
          About Me
          <Sparkles className="absolute top-0 right-0 h-8 w-8 text-yellow-400 opacity-70 animate-pulse hidden md:block" />
        </h2>
        {/* Contenedor principal del contenido 'About' con un sutil gradiente y bordes más redondeados */}
        <div className="bg-gradient-to-br from-zinc-700 to-zinc-700/80 p-8 md:p-12 rounded-2xl shadow-xl border border-zinc-600 text-gray-200 space-y-6">
          {/* Párrafo inicial con el nombre más prominente y un ligero sombreado de texto */}
          <p className="text-xl font-semibold leading-relaxed text-center">
            I'm <span className="text-[#FF8800] text-2xl font-extrabold drop-shadow-md">Fernando Binda</span>, a <span className="text-[#FF8800]">PASSIONATE Computer engenieer</span> 
          </p>

          {/* Contenedor para los puntos clave, cada uno con su propio icono y estilo */}
          <div className="space-y-4">
            {/* Punto 1: Experiencia en desarrollo */}
            <div className="flex items-start p-4 bg-zinc-700/50 rounded-lg shadow-inner border border-zinc-600">
              <Code className="h-6 w-6 text-[#FF8800] mr-3 mt-1 flex-shrink-0" /> {/* Icono de código */}
              <p className="text-lg leading-relaxed">
                I have strong experience in designing, developing, automating and testing applications, web platforms, and backend systems, consistently focused on optimizing the user experience.
              </p>
            </div>

            {/* Punto 2: Enfoque en soluciones prácticas y escalables */}
            <div className="flex items-start p-4 bg-zinc-700/50 rounded-lg shadow-inner border border-zinc-600">
              <Lightbulb className="h-6 w-6 text-[#FF8800] mr-3 mt-1 flex-shrink-0" /> {/* Icono de bombilla */}
              <p className="text-lg leading-relaxed">
                My primary focus is on programming practical and scalable solutions that solve real-world problems, combining innovation with robustness.
              </p>
            </div>

            {/* Punto 3: Aprendizaje continuo y calidad */}
            <div className="flex items-start p-4 bg-zinc-700/50 rounded-lg shadow-inner border border-zinc-600">
              <User className="h-6 w-6 text-[#FF8800] mr-3 mt-1 flex-shrink-0" /> {/* Icono de usuario/persona */}
              <p className="text-lg leading-relaxed">
                I am constantly learning new technologies and agile methodologies to deliver high-quality products that exceed client and user expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
