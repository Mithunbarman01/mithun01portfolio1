import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Footer = ({ variant = 'default' }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/Mithunbarman01' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/mithun-barman-90b568302/' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/MithunBarman321' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/mithun45___/' },
  ];

  const navigation = {
    main: [
      { name: 'Home', path: '/home-page' },
      { name: 'Resume', path: '/resume-page' },
      { name: 'Contact', path: '/contact-page' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
    ],
  };

  if (variant === 'minimal') {
    return (
      <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-primary-600 h-6 w-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-slate-900">Portfolio</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-600 transition-colors"
                  aria-label={item.name}
                >
                  <Icon name={item.icon} size={20} />
                </a>
              ))}
            </div>
            
            <div className="mt-4 md:mt-0 text-sm text-slate-600">
              © {currentYear} all rights Reserved M Barman
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-primary-600 h-8 w-8">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-xl text-slate-900">MB</span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              A professional portfolio showcasing my work, skills, and experience. Feel free to explore and get in touch.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-600 transition-colors"
                  aria-label={item.name}
                >
                  <Icon name={item.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="Mail" className="mr-2 text-primary-600 mt-0.5" size={18} />
                <a href="mailto:contact@example.com" className="text-slate-600 hover:text-primary-600 transition-colors">
                  mittunbarman91@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Icon name="Phone" className="mr-2 text-primary-600 mt-0.5" size={18} />
                <a href="tel:+1234567890" className="text-slate-600 hover:text-primary-600 transition-colors">
                  +91 9883463542
                </a>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-2 text-primary-600 mt-0.5" size={18} />
                <span className="text-slate-600">
                  West Bengal, IND
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600">
              © {currentYear} Portfolio. All rights reserved by M Barman
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-sm text-slate-600 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;