import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [location.pathname]);

  const active = (path) => location.pathname === path;

  const projectLinks = [
    { name: 'Web Development', path: '/webdev', dot: 'bg-sky-400' },
    { name: 'Mobile Apps', path: '/mobdev', dot: 'bg-pink-400' },
    { name: 'AI / ML', path: '/aiml', dot: 'bg-purple-400' },
    { name: 'Blockchain', path: '/blockchain', dot: 'bg-emerald-400' },
    { name: 'IoT', path: '/iot', dot: 'bg-amber-400' },
  ];

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`text-sm font-medium tracking-wide transition-colors ${active(to) ? 'text-[#c9a84c]' : 'text-gray-400 hover:text-white'}`}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#0d0d0d]/90 backdrop-blur-lg border-b border-white/5 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-xl text-white tracking-widest">
          A<span className="text-[#c9a84c]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLink('/', 'Home')}

          {/* Projects dropdown */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${projectLinks.some(l => active(l.path)) ? 'text-[#c9a84c]' : 'text-gray-400 hover:text-white'
                }`}
            >
              Projects
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropOpen && (
              <div className="absolute top-full right-0 mt-3 w-52 glass border border-white/8 py-2 rounded-2xl shadow-2xl">
                {projectLinks.map(l => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${active(l.path) ? 'text-[#c9a84c]' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${l.dot}`} />
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLink('/travel', 'Travel')}
          {/* {navLink('/poetry', 'Poetry')} */}

          <a
            href="/#contact"
            className="btn-gold text-xs !py-2 !px-5"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLink('/', 'Home')}
          <div>
            <p className="section-label mb-3">Projects</p>
            <div className="flex flex-col gap-2 pl-2">
              {projectLinks.map(l => (
                <Link key={l.path} to={l.path} className={`flex items-center gap-2 text-sm ${active(l.path) ? 'text-[#c9a84c]' : 'text-gray-400'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${l.dot}`} /> {l.name}
                </Link>
              ))}
            </div>
          </div>
          {navLink('/travel', 'Travel')}
          {navLink('/poetry', 'Poetry')}
          <a href="/#contact" className="btn-gold !py-3 justify-center" onClick={() => setMobileOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;