import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, href, className = '', fullWidth = false }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative inline-flex items-center justify-center gap-3
        bg-gradient-to-r from-gold to-gold-dark
        text-black font-bold rounded-full
        transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)]
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span>{children}</span>
      <ArrowLeft className="w-5 h-5 animate-pulse" />
    </a>
  );
};