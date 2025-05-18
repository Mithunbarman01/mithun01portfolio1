import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Card = ({
  variant = 'default',
  title,
  subtitle,
  content,
  image,
  icon,
  footer,
  actions,
  onClick,
  href,
  to,
  className = '',
  children,
  ...props
}) => {
  // Base classes for all card variants
  const baseClasses = 'bg-white rounded-lg border border-slate-200 overflow-hidden';
  
  // Variant-specific classes
  const variantClasses = {
    default: '',
    interactive: 'transition-all duration-200 hover:shadow-md',
    featured: 'shadow-md border-primary-400 border-2',
    compact: 'p-3'
  };
  
  // Combine classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  // Interactive card with click handler
  if (onClick) {
    return (
      <div 
        className={`${cardClasses} cursor-pointer`}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(e);
          }
        }}
        tabIndex={0}
        role="button"
        {...props}
      >
        {renderCardContent()}
      </div>
    );
  }
  
  // Card with link (external)
  if (href) {
    return (
      <a 
        href={href}
        className={`${cardClasses} block`}
        {...props}
      >
        {renderCardContent()}
      </a>
    );
  }
  
  // Card with router link
  if (to) {
    return (
      <Link 
        to={to}
        className={`${cardClasses} block`}
        {...props}
      >
        {renderCardContent()}
      </Link>
    );
  }
  
  // Standard card
  return (
    <div className={cardClasses} {...props}>
      {children || renderCardContent()}
    </div>
  );
  
  // Helper function to render card content
  function renderCardContent() {
    if (children) return children;
    
    return (
      <>
        {/* Card Image */}
        {image && (
          <div className="w-full aspect-video overflow-hidden">
            {typeof image === 'string' ? (
              <img 
                src={image} 
                alt={title || 'Card image'} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/assets/images/no_image.png';
                }}
              />
            ) : (
              image
            )}
          </div>
        )}
        
        {/* Card Body */}
        <div className={variant === 'compact' ? 'p-2' : 'p-5'}>
          {/* Card Header */}
          {(icon || title || subtitle) && (
            <div className="mb-3">
              {icon && (
                <div className="mb-2">
                  {typeof icon === 'string' ? (
                    <Icon name={icon} className="text-primary-600" size={variant === 'compact' ? 18 : 24} />
                  ) : (
                    icon
                  )}
                </div>
              )}
              
              {title && (
                <h3 className={`font-semibold text-slate-900 ${variant === 'compact' ? 'text-base' : 'text-xl'}`}>
                  {title}
                </h3>
              )}
              
              {subtitle && (
                <p className={`text-slate-600 ${variant === 'compact' ? 'text-sm' : 'text-base'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {/* Card Content */}
          {content && (
            <div className={`text-slate-600 ${variant === 'compact' ? 'text-sm' : 'text-base'}`}>
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
          )}
        </div>
        
        {/* Card Footer */}
        {(footer || actions) && (
          <div className={`border-t border-slate-200 ${variant === 'compact' ? 'px-2 py-2' : 'px-5 py-3'}`}>
            {footer || (
              <div className="flex justify-end space-x-2">
                {actions}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
};

export default Card;