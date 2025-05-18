import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  href,
  to,
  className = '',
  fullWidth = false,
  onClick,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md';
  
  // Size classes
  const sizeClasses = {
    small: 'text-sm px-3 py-1.5',
    default: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-800',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    link: 'text-primary-600 hover:underline p-0 h-auto',
    icon: 'p-2 text-slate-600 hover:bg-slate-100 hover:text-primary-600',
  };

  // Combine classes
  const classes = [
    baseClasses,
    sizeClasses[size],
    variant !== 'icon' ? variantClasses[variant] : '',
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  // Icon only button
  if (variant === 'icon') {
    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses.icon} ${className} ${fullWidth ? 'w-full' : ''}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {icon && <Icon name={icon} aria-hidden="true" />}
        <span className="sr-only">{children}</span>
      </button>
    );
  }

  // Link button (external)
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <Icon name={icon} className="mr-2 -ml-1" aria-hidden="true" />
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <Icon name={icon} className="ml-2 -mr-1" aria-hidden="true" />
        )}
      </a>
    );
  }

  // Router Link button
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <Icon name={icon} className="mr-2 -ml-1" aria-hidden="true" />
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <Icon name={icon} className="ml-2 -mr-1" aria-hidden="true" />
        )}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className="mr-2 -ml-1" aria-hidden="true" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className="ml-2 -mr-1" aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;