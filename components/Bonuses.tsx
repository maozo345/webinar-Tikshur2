import React from 'react';
import { Gift, Video, Mic, Layout, Star } from 'lucide-react';

export const Bonuses: React.FC = () => {
  const bonuses = [
    { text: "קורס דיגיטלי מוקלט 12 הדרכים - קורס תקשור", icon: Video },
    { text: "קורס דיגיטלי קריאה בקלפים * הקלטות של מאחורי הקלעים של קריאה בקלפים", icon: Layout },
    { text: "הקלטות של כל שיעור", icon: Mic },
    { text: "קורס של הכשרת התקשור - תוכן שמתעדכן", icon: Gift },
    { text: "פידבאק ומשוב עם כלים אישי בלייב לגבי היכולת תקשור שלך", icon: Star },
    { text: "בכל מפגש את מקבלת תקשור ונותנת תקשור", icon: Users },
    { text: "ליווי בקבוצת וואצפ קבוצתית לאורך כל המסע", icon: Layout },
  ];

  return (
    <section className="py-20 px-4 bg-primary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          בונוסים למסלול המלא של הכשרת תקשור
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((item, idx) => (
            <div key={idx} className="bg-bg/50 p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-colors group">
              <div className="mb-4 text-gold group-hover:scale-110 transition-transform origin-right">
                <item.icon className="w-8 h-8" />
              </div>
              <p className="text-lg leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Users } from 'lucide-react';
