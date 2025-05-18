import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Dropdown = ({
  variant = 'selection',
  label,
  items = [],
  selected,
  onChange,
  placeholder = 'Select an option',
  icon,
  disabled = false,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close dropdown when route changes (for navigation variant)
  useEffect(() => {
    if (variant === 'navigation') {
      setIsOpen(false);
    }
  }, [location, variant]);
  
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown' && !isOpen) {
      setIsOpen(true);
      e.preventDefault();
    }
  };
  
  const handleItemClick = (item) => {
    if (variant === 'selection' || variant === 'filter') {
      if (onChange) {
        onChange(item);
      }
      setIsOpen(false);
    }
  };
  
  const handleItemKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  };
  
  // Get the selected item label
  const getSelectedLabel = () => {
    if (variant === 'navigation') {
      return label;
    }
    
    if (!selected && placeholder) {
      return placeholder;
    }
    
    const selectedItem = items.find(item => 
      (item.id && item.id === selected) || 
      (item.value && item.value === selected) || 
      item === selected
    );
    
    return selectedItem ? (selectedItem.label || selectedItem.name || selectedItem) : placeholder;
  };
  
  // Navigation Dropdown
  if (variant === 'navigation') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          type="button"
          className={`flex items-center justify-between font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${
            isOpen ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'
          } ${fullWidth ? 'w-full' : ''}`}
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="true"
          disabled={disabled}
          {...props}
        >
          <span>{label}</span>
          <Icon 
            name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
            className="ml-1" 
            size={16} 
            aria-hidden="true" 
          />
        </button>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-slate-200 focus:outline-none animate-fade-in">
            <ul 
              className="py-1" 
              role="menu" 
              aria-orientation="vertical" 
              aria-labelledby="options-menu"
            >
              {items.map((item, index) => (
                <li key={item.id || item.path || index} role="none">
                  <Link
                    to={item.path || '#'}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary-600"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                    tabIndex={0}
                  >
                    {item.icon && (
                      <Icon name={item.icon} className="inline-block mr-2" size={16} aria-hidden="true" />
                    )}
                    {item.label || item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  // Selection or Filter Dropdown
  return (
    <div className={`relative ${className} ${fullWidth ? 'w-full' : ''}`} ref={dropdownRef}>
      <button
        type="button"
        className={`flex items-center justify-between px-3 py-2 border rounded-md bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${
          isOpen 
            ? 'border-primary-600 ring-1 ring-primary-600' :'border-slate-200 hover:border-slate-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${fullWidth ? 'w-full' : ''}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        disabled={disabled}
        {...props}
      >
        <span className={`block truncate ${!selected && 'text-slate-400'}`}>
          {icon && (
            <Icon name={icon} className="inline-block mr-2" size={16} aria-hidden="true" />
          )}
          {getSelectedLabel()}
        </span>
        <Icon 
          name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
          className="ml-2 text-slate-400" 
          size={16} 
          aria-hidden="true" 
        />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-slate-200 focus:outline-none max-h-60 overflow-auto animate-fade-in">
          <ul 
            className="py-1" 
            role="listbox" 
            aria-labelledby="listbox-label"
            tabIndex={-1}
          >
            {items.map((item, index) => {
              const itemValue = item.id || item.value || item;
              const itemLabel = item.label || item.name || item;
              const isSelected = 
                (item.id && item.id === selected) || 
                (item.value && item.value === selected) || 
                item === selected;
              
              return (
                <li 
                  key={itemValue.toString() + index}
                  role="option"
                  aria-selected={isSelected}
                  className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                    isSelected 
                      ? 'bg-primary-600 text-white' :'text-slate-900 hover:bg-slate-100'
                  }`}
                  onClick={() => handleItemClick(item)}
                  onKeyDown={(e) => handleItemKeyDown(e, item)}
                  tabIndex={0}
                >
                  <div className="flex items-center">
                    {item.icon && (
                      <Icon 
                        name={item.icon} 
                        className={`mr-2 ${isSelected ? 'text-white' : 'text-slate-400'}`} 
                        size={16} 
                        aria-hidden="true" 
                      />
                    )}
                    <span className={`block truncate ${isSelected ? 'font-medium' : 'font-normal'}`}>
                      {itemLabel}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <Icon 
                        name="Check" 
                        className="text-white" 
                        size={16} 
                        aria-hidden="true" 
                      />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;