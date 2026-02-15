import React, { useEffect } from 'react';
import { X } from 'lucide-react'; // Close icon

const MobileMenu = ({ isOpen, onClose, handleLinkClick }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent main content scroll
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Restore scroll
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`fixed top-0 right-0 h-full w-full bg-zinc-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation menu"
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-white hover:text-[#FF8800] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF8800] rounded-full p-2"
          aria-label="Close menu"
        >
          <X size={32} /> {/* Close icon */}
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8 text-3xl font-bold">
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-white hover:text-[#FF8800] transition duration-300">About Me</a>
        <a href="#freelance" onClick={(e) => handleLinkClick(e, 'freelance')} className="text-white hover:text-[#FF8800] transition duration-300">Freelance</a>
        <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="text-white hover:text-[#FF8800] transition duration-300">Experience</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-white hover:text-[#FF8800] transition duration-300">Contact</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
