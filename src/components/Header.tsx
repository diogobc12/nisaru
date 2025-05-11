import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-semibold text-emerald-800">Nisaru EcoLife</span>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#mission" 
                className="text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                Mission
              </a>
            </li>
            <li>
              <a 
                href="#donate" 
                className="text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                Donate
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;