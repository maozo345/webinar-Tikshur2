import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, light = false }) => {
  return (
    <section 
      id={id} 
      className={`relative py-20 px-4 md:px-8 overflow-hidden ${light ? 'bg-spiritual-900/50' : ''} ${className}`}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};