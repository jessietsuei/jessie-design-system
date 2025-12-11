import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: ButtonProps) {
  
  const baseStyles = 'font-body rounded-md transition-colors';
  
  const variants = {
    primary: 'bg-cello-600 text-white hover:bg-cello-700',
    secondary: 'bg-black-100 text-black-800 hover:bg-black-200',
  };
  
  const sizes = {
    sm: 'px-sm py-xs text-sm',
    md: 'px-md py-sm text-base',
    lg: 'px-lg py-md text-lg',
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;