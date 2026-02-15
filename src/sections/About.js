import React, { forwardRef } from 'react';
import { Sparkles, Code, User, Lightbulb } from 'lucide-react';

// forwardRef so this component can receive a ref from the parent for scroll-into-view animation.
const About = forwardRef(({ isAnimated }, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 bg-zinc-800 rounded-xl shadow-inner mx-4 mt-8 px-6 md:px-0 ${isAnimated ? 'animate-fade-in-up' : 'opacity-0'} transition-opacity duration-0`}
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-10 pb-2 border-b-2 border-dashed border-gray-700 relative">
          About Me
          <Sparkles className="absolute top-0 right-0 h-8 w-8 text-yellow-400 opacity-70 animate-pulse hidden md:block" />
        </h2>
        <div className="bg-gradient-to-br from-zinc-700 to-zinc-700/80 p-8 md:p-12 rounded-2xl shadow-xl border border-zinc-600 text-gray-200 space-y-6">
          <p className="text-xl font-semibold leading-relaxed text-center">
            I'm <span className="text-[#FF8800] text-2xl font-extrabold drop-shadow-md">Fernando Binda</span>, a <span className="text-[#FF8800]">PASSIONATE Computer Engineer</span> 
          </p>

          <div className="space-y-4">
            <div className="flex items-start p-4 bg-zinc-700/50 rounded-lg shadow-inner border border-zinc-600">
              <Code className="h-6 w-6 text-[#FF8800] mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                I have strong experience in designing, developing, automating and testing applications, web platforms, and backend systems, consistently focused on optimizing the user experience.
              </p>
            </div>

            <div className="flex items-start p-4 bg-zinc-700/50 rounded-lg shadow-inner border border-zinc-600">
              <Lightbulb className="h-6 w-6 text-[#FF8800] mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                My primary focus is on programming practical and scalable solutions that solve real-world problems, combining innovation with robustness.
              </p>
            </div>

            <div className="flex items-start p-4 bg-zinc-700/50 rounded-lg shadow-inner border border-zinc-600">
              <User className="h-6 w-6 text-[#FF8800] mr-3 mt-1 flex-shrink-0" />
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
