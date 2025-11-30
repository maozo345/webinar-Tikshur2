import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center bg-black/40 border-t border-white/5 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-4">מרחבי התקשור הדיגיטליים</h3>
        <p className="text-spiritual-100/60 text-sm max-w-lg mx-auto leading-relaxed">
          כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן
        </p>
        <div className="mt-8 text-xs text-spiritual-100/30">
          © כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
};