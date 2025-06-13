import React from 'react';
import { Linkedin, Github, Mail, Briefcase } from 'lucide-react'; // Iconos

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-zinc-900 rounded-xl shadow-lg mx-4 my-8">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#FF6F00] mb-12">Contact</h2>
        <div className="max-w-2xl mx-auto bg-zinc-800 p-8 rounded-xl shadow-xl border border-zinc-700 text-gray-200">
          <p className="text-lg text-center mb-8">
            Connect with me! I'm open to new opportunities and collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a
              href="https://www.linkedin.com/in/fernando-b-9298721b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
              <span className="font-semibold text-lg">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ferax99" // Placeholder GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 shadow-md"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
              <span className="font-semibold text-lg">GitHub</span>
            </a>
            <a
              href="https://us11.list-manage.com/contact-form?u=8b3c8a6fcafe30907def2005d&form_id=8f3692c6e4c5cb142d89638f2744bdf4" // Placeholder Email
              className="flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 shadow-md"
              aria-label="Send email"
            >
              <Mail className="h-6 w-6" />
              <span className="font-semibold text-lg">Email</span>
            </a>
            <a
              href="https://www.fiverr.com/ferax99?public_mode=true" // Placeholder Fiverr
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-md"
              aria-label="Fiverr Profile"
            >
              <Briefcase className="h-6 w-6" />
              <span className="font-semibold text-lg">Fiverr</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
