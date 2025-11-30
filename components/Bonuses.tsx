import React from 'react';
import { Section } from './Section';
import { Gift, PlayCircle, MessageCircle, Star } from 'lucide-react';
import { BonusItem } from '../types';

const bonuses: BonusItem[] = [
  { id: '1', text: 'קורס דיגיטלי מוקלט: 12 הדרכים', subText: 'קורס בסיס ומבוא לעולם התקשור' },
  { id: '2', text: 'קורס דיגיטלי: קריאה בקלפים', subText: 'כולל הקלטות "מאחורי הקלעים" של קריאות אמיתיות' },
  { id: '3', text: 'גישה לכל ההקלטות', subText: 'כל שיעור מוקלט וזמין לך לחזרה והעמקה' },
  { id: '4', text: 'תכנים מתעדכנים', subText: 'גישה לספריית הידע שגדלה כל הזמן' },
  { id: '5', text: 'פידבאק ומשוב אישי בלייב', subText: 'דיוק היכולות שלך בזמן אמת', highlight: true },
  { id: '6', text: 'ליווי בוואצפ קבוצתי', subText: 'תמיכה ומענה לשאלות לאורך כל המסע' },
];

export const Bonuses: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-spiritual-950 to-spiritual-900" light>
      <div className="text-center mb-12">
        <span className="text-gold-400 font-bold tracking-wider text-sm uppercase mb-2 block">המסלול המלא</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">בונוסים ומתנות למשתתפות</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map((bonus) => (
          <div 
            key={bonus.id} 
            className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              bonus.highlight 
                ? 'bg-spiritual-800/80 border-gold-500 shadow-lg shadow-gold-500/10' 
                : 'bg-spiritual-950/50 border-spiritual-800 hover:border-spiritual-700'
            }`}
          >
            <div className="mb-4 text-gold-400">
              {bonus.highlight ? <Star className="w-8 h-8 fill-current" /> : <Gift className="w-6 h-6" />}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{bonus.text}</h3>
            {bonus.subText && (
              <p className="text-sm text-spiritual-100/60">{bonus.subText}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};