import React from 'react';
import { Menu } from 'lucide-react'; // Menu icon

const Header = ({ headerRef, handleLinkClick, setIsMenuOpen }) => {
  return (
    <header ref={headerRef} className="fixed top-0 w-full bg-gradient-to-r from-[#FF8800] to-[#FF6F00] text-white p-6 shadow-lg rounded-b-xl z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="hidden sm:block">Fernando Binda</span> {/* Visible on sm and larger screens */}
          <span className="sm:hidden">FB</span> {/* Visible only on smaller than sm screens */}
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-lg font-medium">
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-gray-900 transition duration-300">About Me</a></li>
            <li><a href="#freelance" onClick={(e) => handleLinkClick(e, 'freelance')} className="hover:text-gray-900 transition duration-300">Freelance</a></li>
            <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="hover:text-gray-900 transition duration-300">Experience</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-gray-900 transition duration-300">Contact</a></li>
          </ul>
        </nav>
        <button
          onClick={() => setIsMenuOpen(true)} // Open mobile menu
          className="sm:hidden text-white hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
          aria-label="Open menu"
          aria-expanded="false" // Updated via App state
          aria-controls="mobile-menu"
        >
          <Menu size={32} /> {/* Menu icon */}
        </button>
      </div>
    </header>
  );
};

export default Header;
