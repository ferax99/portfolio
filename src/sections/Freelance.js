import React from 'react';
import { DollarSign, ChevronRight, Star } from 'lucide-react'; // Icons
import FreelanceProjectCard from './FreelanceProjectCard'; // Freelance project card component
import { freelanceProjects } from '../data/portfolioData'; // Freelance project data

const Freelance = () => {
  return (
    <section id="freelance" className="py-16 bg-zinc-800 rounded-xl shadow-inner mx-4 mt-8 px-6 md:px-0">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-10 pb-2 border-b-2 border-dashed border-gray-700 relative">
          My Freelance Work
          <DollarSign className="absolute top-0 right-0 h-8 w-8 text-yellow-400 opacity-70 animate-pulse hidden md:block" />
        </h2>
        <div className="text-lg text-gray-300 text-center mb-12 leading-relaxed">
          <p>
            As a freelance developer, I specialize in providing customized, efficient, and high-quality technical solutions to clients worldwide. My focus is on transforming your ideas into reality, ensuring professional service and clear communication at every stage of the project.
          </p>
          <p className="mt-4">
            I've had the pleasure of working with a diverse range of clients through platforms like Fiverr, helping them achieve their technological goals and building a solid reputation based on delivering exceptional results.
          </p>
        </div>

        {/* Fiverr Highlight Card */}
        <div className="bg-gradient-to-br from-[#FF8800] to-[#FF6F00] p-8 rounded-2xl shadow-2xl text-white text-center mb-16 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* <img src="https://placehold.co/100x100/ffffff/000000?text=Avatar" alt="Fernando Binda Avatar" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" /> */}
            <h3 className="text-4xl font-extrabold tracking-tight">My Fiverr Profile</h3>
            <p className="text-xl font-medium leading-relaxed max-w-2xl">
              I offer Python script development, custom web applications, automation, and QA services.
            </p>
            <div className="flex items-center space-x-1 text-yellow-300 text-2xl">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
              <span className="ml-2 font-bold">(4.9 Rating)</span>
            </div>
            <a
              href="https://www.fiverr.com/ferax99?public_mode=true" // Placeholder link to your Fiverr profile
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#FF8800] font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 group mt-6"
              aria-label="Hire me on Fiverr"
            >
              Hire Me on Fiverr <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Freelance Project Grid */}
        <h3 className="text-3xl font-bold text-center text-[#FF6F00] mb-10 pb-2 border-b-2 border-dashed border-gray-700">
          Featured Freelance Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {freelanceProjects.map((project) => (
            <FreelanceProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
