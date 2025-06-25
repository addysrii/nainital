import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Welcome text with gradient effect */}
      <div className="absolute top-4 left-4 z-10">
        <span className="font-bold text-xl relative group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            WELCOME!
          </span>
          <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-lg blur-lg group-hover:from-orange-500/20 group-hover:to-pink-500/20 transition-all duration-500 -z-10"></span>
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute top-4 right-4 text-gray-300 hover:text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Navigation */}
      <nav 
        className={`
          flex flex-col md:flex-row md:justify-end p-6 gap-8 
          transition-all duration-300 
          ${scrolled ? 'bg-black/80 backdrop-blur-sm border-b border-orange-500/20' : ''}
          ${isMobileMenuOpen ? 'mt-16 bg-black/95 backdrop-blur-sm' : ''}
          md:mt-0
        `}
      >
        {['HOME', 'ABOUT', 'PROJECTS', 'POETRY', 'CONTACT ME'].map((item) => (
          <a
            key={item}
            href={`${item.toLowerCase()}`}
            className={`
              relative group hidden md:inline-block
              ${activeLink === item.toLowerCase() ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500' : 'text-gray-300'} 
              hover:text-white transition-colors duration-300
            `}
            onClick={() => setActiveLink(item.toLowerCase())}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-6">
            {['HOME', 'ABOUT', 'PROJECTS', 'POETRY', 'CONTACT ME'].map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className={`
                  relative group
                  ${activeLink === item.toLowerCase() ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500' : 'text-gray-300'} 
                  hover:text-white transition-colors duration-300
                `}
                onClick={() => {
                  setActiveLink(item.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;