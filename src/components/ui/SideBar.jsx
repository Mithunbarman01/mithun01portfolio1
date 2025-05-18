import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const SideBar = ({ 
  variant = 'sticky',
  items = [
    { id: 'about', label: 'About Me', icon: 'User' },
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'skills', label: 'Skills', icon: 'Code' },
    { id: 'projects', label: 'Projects', icon: 'FolderKanban' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'contact', label: 'Contact', icon: 'Mail' }
  ],
  onItemClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(items[0]?.id);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && variant !== 'mobile-drawer') {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [variant]);

  useEffect(() => {
    // Close mobile drawer when route changes
    if (variant === 'mobile-drawer') {
      setIsOpen(false);
    }
  }, [location.pathname, variant]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (onItemClick) {
      onItemClick(itemId);
    }
    if (isMobile && variant === 'mobile-drawer') {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e, itemId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(itemId);
    }
  };

  // Render different sidebar variants
  const renderSidebarContent = () => (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Resume Sections</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                  activeItem === item.id
                    ? 'bg-primary-600 text-white' :'text-slate-600 hover:bg-slate-100 hover:text-primary-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.id);
                }}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                tabIndex={0}
                aria-current={activeItem === item.id ? 'page' : undefined}
              >
                {item.icon && <Icon name={item.icon} className="mr-3" size={18} />}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  // Mobile drawer overlay
  const renderMobileDrawer = () => (
    <>
      <button
        type="button"
        className="fixed bottom-4 right-4 z-40 bg-primary-600 text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar"
      >
        <Icon name={isOpen ? 'X' : 'Menu'} aria-hidden="true" />
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-50 z-40 md:hidden animate-fade-in"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0 animate-slide-in-right' : '-translate-x-full'
        }`}
        tabIndex={isOpen ? 0 : -1}
        aria-label="Sidebar navigation"
      >
        {renderSidebarContent()}
      </div>
    </>
  );

  // Sticky sidebar for desktop
  const renderStickySidebar = () => (
    <div className="hidden md:block sticky top-20 h-[calc(100vh-5rem)] w-64 bg-white border-r border-slate-200">
      {renderSidebarContent()}
    </div>
  );

  // Collapsible sidebar
  const renderCollapsibleSidebar = () => (
    <div className="hidden md:block relative h-[calc(100vh-5rem)]">
      <button
        type="button"
        className="absolute -right-3 top-4 bg-white border border-slate-200 rounded-full p-1 shadow-sm z-10"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-controls="collapsible-sidebar"
      >
        <Icon name={isOpen ? 'ChevronLeft' : 'ChevronRight'} size={16} />
        <span className="sr-only">{isOpen ? 'Collapse sidebar' : 'Expand sidebar'}</span>
      </button>

      <div
        id="collapsible-sidebar"
        className={`transition-all duration-300 ease-in-out overflow-hidden border-r border-slate-200 bg-white h-full ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-slate-200">
            <h2 className={`text-lg font-semibold text-slate-900 ${!isOpen && 'sr-only'}`}>
              Resume
            </h2>
          </div>
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                      activeItem === item.id
                        ? 'bg-primary-600 text-white' :'text-slate-600 hover:bg-slate-100 hover:text-primary-600'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    tabIndex={0}
                    aria-current={activeItem === item.id ? 'page' : undefined}
                    title={!isOpen ? item.label : undefined}
                  >
                    {item.icon && <Icon name={item.icon} className={isOpen ? 'mr-3' : 'mx-auto'} size={18} />}
                    {isOpen && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

  if (variant === 'mobile-drawer') {
    return renderMobileDrawer();
  } else if (variant === 'collapsible') {
    return renderCollapsibleSidebar();
  } else {
    return renderStickySidebar();
  }
};

export default SideBar;