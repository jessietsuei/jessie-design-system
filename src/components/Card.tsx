import React from 'react';

type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
};

function Card({ 
  children,
  variant = 'default',
  padding = 'md',
}: CardProps) {
  
  const baseStyles = 'rounded-xl';
  
  const variants = {
    default: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-black-200',
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]}`}>
      {children}
    </div>
  );
}

export default Card;