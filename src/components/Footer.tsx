import React from 'react';
import { Leaf, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6">
            <Leaf className="h-6 w-6 text-emerald-300" />
            <span className="text-xl font-semibold text-white">Nisaru EcoLife</span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://www.youtube.com/@NisaruEcoLife"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white transition-colors"
              aria-label="YouTube Channel"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="mailto:nisaruecolife@gmail.com"
              className="text-emerald-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-emerald-300 text-sm">
            &copy; {currentYear} Nisaru EcoLife. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;