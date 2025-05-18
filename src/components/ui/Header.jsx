import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Header = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/home-page' },
    { name: 'Resume', path: '/resume-page' },
    { name: 'Contact', path: '/contact-page' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getHeaderClasses = () => {
    if (variant === 'transparent' && !scrolled) {
      return 'bg-transparent text-white';
    } else if (variant === 'compact') {
      return 'bg-white border-b border-slate-200 py-2';
    } else {
      return 'bg-white border-b border-slate-200';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-primary-600 focus:text-white focus:z-50">
        Skip to content
      </a>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/home-page" className="flex items-center space-x-2">
            <div className="text-primary-600 h-8 w-8">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={`font-bold text-xl ${variant === 'transparent' && !scrolled ? 'text-white' : 'text-slate-900'}`}>
              MB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : variant === 'transparent'&& !scrolled ?'text-white hover:text-primary-400' :'text-slate-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              aria-label="Toggle theme"
              className={`p-2 rounded-full ${
                variant === 'transparent' && !scrolled ?'text-white hover:bg-white/10' :'text-slate-600 hover:bg-slate-100'
              }`}
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              <Icon name="Sun" className="hidden dark:block" />
              <Icon name="Moon" className="block dark:hidden" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              aria-label="Toggle theme"
              className={`p-2 mr-2 rounded-full ${
                variant === 'transparent' && !scrolled ?'text-white hover:bg-white/10' :'text-slate-600 hover:bg-slate-100'
              }`}
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              <Icon name="Sun" className="hidden dark:block" />
              <Icon name="Moon" className="block dark:hidden" />
            </button>
            <button
              type="button"
              className={`p-2 rounded-md ${
                variant === 'transparent' && !scrolled ?'text-white hover:bg-white/10' :'text-slate-600 hover:bg-slate-100'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <Icon name="X" aria-hidden="true" />
              ) : (
                <Icon name="Menu" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-b border-slate-200 animate-fade-in ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 px-3 rounded-md font-medium ${
                location.pathname === item.path
                  ? 'bg-primary-600 text-white' :'text-slate-600 hover:bg-slate-100 hover:text-primary-600'
              }`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;