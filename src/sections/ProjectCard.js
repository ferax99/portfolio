import React from 'react';
import { Briefcase, Package, Award, Link as LinkIcon, Github } from 'lucide-react'; // Iconos

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="bg-zinc-800 border border-zinc-700 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col text-gray-200"
    >
      <img
        src={project.image}
        alt={project.altText}
        className="w-full h-48 object-cover rounded-t-xl"
        loading="lazy"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold text-[#FF6F00] mb-3">{project.title}</h3>
        <p className="mb-4 flex-grow text-gray-300">{project.description}</p>

        <p className="font-medium mb-2 text-gray-200"><Briefcase className="inline-block h-4 w-4 mr-2 text-[#FF8800]" />Role: {project.role}</p>
        <div className="mb-4">
          <p className="font-medium mb-1 text-gray-200"><Package className="inline-block h-4 w-4 mr-2 text-[#FF8800]" />Technologies:</p>
          <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-1 text-gray-200"><Award className="inline-block h-4 w-4 mr-2 text-[#FF8800]" />Challenges & Learnings:</p>
          <p className="text-sm text-gray-400">{project.challenges}</p>
          <p className="text-sm text-gray-400 mt-1">{project.learnings}</p>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] bg-[#FF8800] text-white py-2 px-4 rounded-full text-center hover:bg-[#FF6F00] transition duration-300 text-sm font-medium shadow-md"
            aria-label={`View demo for ${project.title}`}
          >
            <LinkIcon className="inline-block h-4 w-4 mr-2" />Demo
          </a>
          {project.repoLink && <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] bg-gray-800 text-white py-2 px-4 rounded-full text-center hover:bg-gray-900 transition duration-300 text-sm font-medium shadow-md"
            aria-label={`View repository for ${project.title}`}
          >
            <Github className="inline-block h-4 w-4 mr-2" />Repository
          </a> } 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
