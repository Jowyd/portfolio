import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-6 px-6 lg:px-12 transition-all duration-300 ${
        scrolled ? 'bg-fiddle-dark bg-opacity-90 backdrop-blur-sm' : ''
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-fiddle-light font-khteka text-xl md:text-2xl">
              Fiddle.Digital
            </div>
            <span className="ml-2 hidden md:block text-fiddle-gray text-sm">
              フィドル
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <span className="mr-4 text-fiddle-gray text-sm">
              DESIGN AGENCY
            </span>
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              to="/work"
              className={`text-sm uppercase ${isActive('/work') ? 'text-fiddle-light' : 'text-fiddle-gray hover:text-fiddle-light transition-colors'}`}
            >
              Work
              {isActive('/work') && <span className="ml-1 text-xs">(15)</span>}
            </Link>
            <Link
              to="/about"
              className={`text-sm uppercase ${isActive('/about') ? 'text-fiddle-light' : 'text-fiddle-gray hover:text-fiddle-light transition-colors'}`}
            >
              About
            </Link>
            <Link
              to="/connect"
              className={`text-sm uppercase ${isActive('/connect') ? 'text-fiddle-light' : 'text-fiddle-gray hover:text-fiddle-light transition-colors'}`}
            >
              Let's talk
              {isActive('/connect') && <span className="ml-1">+</span>}
            </Link>
            <a
              href="https://exp.fiddle.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase text-fiddle-gray hover:text-fiddle-light transition-colors"
            >
              Exp.
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
