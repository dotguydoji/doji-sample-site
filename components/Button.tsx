import React, { memo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = 'px-6 py-3 font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-theme-bg-dark';

  const variantClasses = {
    primary: 'bg-theme-accent text-theme-text-primary hover:bg-theme-accent-dark focus:ring-theme-accent',
    secondary: 'bg-theme-bg-light text-theme-text-primary hover:bg-theme-bg-med focus:ring-theme-bg-light',
    outline: 'bg-transparent border-2 border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-theme-text-primary focus:ring-theme-accent',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);