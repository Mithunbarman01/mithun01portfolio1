import React, { useState, forwardRef } from 'react';
import Icon from '../../components/AppIcon';

const Input = forwardRef(({
  type = 'text',
  label,
  placeholder,
  id,
  name,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  hint,
  icon,
  iconPosition = 'left',
  className = '',
  validation,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [localValue, setLocalValue] = useState(defaultValue || '');
  const [validationState, setValidationState] = useState({
    valid: true,
    message: ''
  });

  // Generate a unique ID if not provided
  const inputId = id || `input-${name || Math.random().toString(36).substring(2, 9)}`;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    
    // Run validation if provided
    if (validation) {
      const result = validation(newValue);
      setValidationState(result);
    }
    
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  // Determine if we should show an error
  const showError = error || (!validationState.valid && !focused && localValue);
  const errorMessage = error || validationState.message;

  // Base classes for the input container
  const containerClasses = `relative ${className}`;

  // Classes for the input element
  const inputClasses = `
    w-full rounded-md border px-3 py-2 text-slate-900 placeholder:text-slate-400
    focus:outline-none focus:ring-2 focus:border-primary-600
    disabled:opacity-50 disabled:bg-slate-50
    ${icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : ''}
    ${showError 
      ? 'border-rose-500 focus:ring-rose-500' :'border-slate-200 focus:ring-primary-600'}
  `;

  // Render textarea
  if (type === 'textarea') {
    return (
      <div className={containerClasses}>
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            {label}
            {required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon name={icon} className={`${showError ? 'text-rose-500' : 'text-slate-400'}`} size={18} />
            </div>
          )}
          
          <textarea
            id={inputId}
            name={name}
            ref={ref}
            className={inputClasses}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            value={value !== undefined ? value : localValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={showError ? 'true' : 'false'}
            aria-describedby={`${inputId}-${showError ? 'error' : hint ? 'hint' : ''}`}
            rows={4}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Icon name={icon} className={`${showError ? 'text-rose-500' : 'text-slate-400'}`} size={18} />
            </div>
          )}
        </div>
        
        {showError && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-rose-500">
            {errorMessage}
          </p>
        )}
        
        {!showError && hint && (
          <p id={`${inputId}-hint`} className="mt-1 text-sm text-slate-500">
            {hint}
          </p>
        )}
      </div>
    );
  }

  // Render standard input
  return (
    <div className={containerClasses}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name={icon} className={`${showError ? 'text-rose-500' : 'text-slate-400'}`} size={18} />
          </div>
        )}
        
        <input
          type={type}
          id={inputId}
          name={name}
          ref={ref}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          value={value !== undefined ? value : localValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={`${inputId}-${showError ? 'error' : hint ? 'hint' : ''}`}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon name={icon} className={`${showError ? 'text-rose-500' : 'text-slate-400'}`} size={18} />
          </div>
        )}
        
        {type === 'email' && validation && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {!focused && localValue && (
              validationState.valid 
                ? <Icon name="CheckCircle" className="text-emerald-500" size={18} />
                : <Icon name="AlertCircle" className="text-rose-500" size={18} />
            )}
          </div>
        )}
      </div>
      
      {showError && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-rose-500">
          {errorMessage}
        </p>
      )}
      
      {!showError && hint && (
        <p id={`${inputId}-hint`} className="mt-1 text-sm text-slate-500">
          {hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;