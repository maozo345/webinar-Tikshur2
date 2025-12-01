import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-center border-t border-white/5 text-sm text-gray-500">
      <p>מרחבי התקשור הדיגיטליים &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};