import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  fullWidth = false 
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:from-gold-300 hover:to-gold-500 shadow-lg hover:shadow-gold-500/30",
    secondary: "bg-transparent border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowLeft className="w-5 h-5 animate-pulse relative z-10" />
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}>
      {content}
    </button>
  );
};