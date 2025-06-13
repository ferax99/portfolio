import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center rounded-t-xl mx-4 mt-8">
      <p className="text-md">&copy; {new Date().getFullYear()} Fernando Binda. All rights reserved.</p>
      <p className="text-sm mt-2">Designed and developed with React.</p>
    </footer>
  );
};

export default Footer;
