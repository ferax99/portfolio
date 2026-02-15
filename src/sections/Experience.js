import React from 'react';
import { Briefcase, School, Award, Code, Cloud, Database, Wrench, GitFork, Bot } from 'lucide-react';
import { experiences } from '../data/portfolioData';

// Map icon name strings to Lucide React components
const getLucideIcon = (iconName) => {
  const icons = {
    Code: Code,
    Cloud: Cloud,
    Database: Database,
    Wrench: Wrench,
    GitFork: GitFork,
    Bot: Bot,
    Briefcase: Briefcase,
    School: School,
    Award: Award,
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className="inline-block h-4 w-4 mr-2 text-gray-400" /> : null;
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-zinc-800 rounded-xl shadow-inner mx-4 mt-8">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Professional Experience */}
          <div className="bg-zinc-700 p-8 rounded-xl shadow-lg border border-zinc-600">
            <h3 className="text-3xl font-semibold text-[#FF6F00] mb-6 flex items-center">
              <Briefcase className="h-8 w-8 mr-4 text-[#FF8800]" />Professional Experience
            </h3>
            <ul className="space-y-8">
              {experiences.professional.map((job) => (
                <li key={job.id} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-3 w-3 bg-[#FF8800] rounded-full mt-2 sm:mt-0"></div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-200">{job.role}</h4>
                    <p className="text-lg text-gray-400">{job.company} | {job.location} | {job.years}</p>
                    <ul className="list-disc list-inside text-base text-gray-300 mt-2 space-y-1">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx}>{getLucideIcon(bullet.icon)}{bullet.text}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="bg-zinc-700 p-8 rounded-xl shadow-lg border border-zinc-600 text-gray-200">
            <h3 className="text-3xl font-semibold text-[#FF6F00] mb-6 flex items-center">
              <School className="h-8 w-8 mr-4 text-[#FF8800]" />Education
            </h3>
            <ul className="space-y-6">
              {experiences.education.map((edu) => (
                <li key={edu.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="h-3 w-3 bg-[#FF8800] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200">{edu.title}</h4>
                    <p className="text-lg text-gray-400">{edu.institution} - {edu.location}</p>
                    <p className="text-md text-gray-500">{edu.years}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-zinc-700 p-8 rounded-xl shadow-lg border border-zinc-600 text-gray-200">
            <h3 className="text-3xl font-semibold text-[#FF6F00] mb-6 flex items-center">
              <Award className="h-8 w-8 mr-4 text-[#FF8800]" />Certifications
            </h3>
            <ul className="space-y-6">
              {experiences.certifications.map((cert) => (
                <li key={cert.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="h-3 w-3 bg-[#FF8800] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200">{cert.title}</h4>
                    <p className="text-lg text-gray-400">{cert.issuer}</p>
                    <p className="text-md text-gray-500">{cert.years}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="bg-zinc-700 p-8 rounded-xl shadow-lg border border-zinc-600 text-gray-200">
            <h3 className="text-3xl font-semibold text-[#FF6F00] mb-6 flex items-center">
              <Briefcase className="h-8 w-8 mr-4 text-[#FF8800]" />Notable Achievements
            </h3>
            <ul className="space-y-6">
              {experiences.achievements.map((ach) => (
                <li key={ach.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="h-3 w-3 bg-[#FF8800] rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-400">{ach.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
