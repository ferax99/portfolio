import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-zinc-900 rounded-xl shadow-lg mx-4 mt-8">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-12">My Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
