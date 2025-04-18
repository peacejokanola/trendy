import React from 'react';
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
  onClick?: () => void;
};
export const Button = ({
  children,
  variant = 'default',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500';
  const variantStyles = {
    default: 'bg-orange-500 text-white hover:bg-orange-600',
    ghost: 'bg-transparent text-white hover:bg-gray-800',
    outline: 'bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>;
};