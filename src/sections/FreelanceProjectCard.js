import React from 'react';
import { Star, Code, Wrench } from 'lucide-react';

const FreelanceProjectCard = ({ project }) => {
  const getIconForTech = (tech) => {
    switch (tech.toLowerCase()) {
      case 'python':
        return <Code className="inline-block h-4 w-4 mr-1 text-gray-400" />;
      case 'html':
      case 'css':
      case 'javascript':
      case 'react':
      case 'tailwind css':
        return <Code className="inline-block h-4 w-4 mr-1 text-gray-400" />;
      case 'jira':
      case 'testrail':
      case 'manual testing':
      case 'automated testing':
        return <Wrench className="inline-block h-4 w-4 mr-1 text-gray-400" />;
      default:
        return <Code className="inline-block h-4 w-4 mr-1 text-gray-400" />;
    }
  };

  return (
    <div
      key={project.id}
      className="bg-zinc-700 border border-zinc-600 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col text-gray-200"
    >
      <img
        src={project.image}
        alt={project.altText}
        className="w-full h-40 object-cover rounded-t-xl"
        loading="lazy"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-2xl font-semibold text-[#FF8800] mb-3">{project.title}</h4>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="mb-3">
          <p className="font-medium text-gray-200">Technologies:</p>
          <ul className="list-disc list-inside text-sm text-gray-400 ml-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{getIconForTech(tech)}{tech}</li>
            ))}
          </ul>
        </div>
        {project.testimonial && (
          <div className="mt-auto pt-4 border-t border-zinc-600">
            <p className="text-sm italic text-gray-400">"{project.testimonial}"</p>
            <div className="flex items-center space-x-1 text-yellow-300 text-lg mt-2">
              {[...Array(project.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelanceProjectCard;
