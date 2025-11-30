import React from 'react';
import { Section } from './Section';
import { Gift, Play, MessageCircle, Star, Video, Layers } from 'lucide-react';

const bonuses = [
  { 
    id: '1', 
    title: 'קורס דיגיטלי מוקלט: 12 הדרכים', 
    desc: 'קורס תקשור מקיף המהווה בסיס לידע',
    icon: Video
  },
  { 
    id: '2', 
    title: 'קורס דיגיטלי: קריאה בקלפים', 
    desc: 'כולל הקלטות של מאחורי הקלעים של קריאה בקלפים',
    icon: Layers
  },
  { 
    id: '3', 
    title: 'הקלטות של כל שיעור', 
    desc: 'החומר נשאר איתך לתרגול חוזר והעמקה',
    icon: Play
  },
  { 
    id: '4', 
    title: 'תוכן שמתעדכן', 
    desc: 'קורס של הכשרת התקשור עם תכנים חדשים שנוספים',
    icon: Gift
  },
  { 
    id: '5', 
    title: 'פידבאק ומשוב אישי בלייב', 
    desc: 'כלים אישיים לשיפור יכולת התקשור שלך',
    icon: Star,
    highlight: true
  },
  { 
    id: '6', 
    title: 'ליווי בוואצפ קבוצתי', 
    desc: 'מענה ותמיכה לאורך כל המסע',
    icon: MessageCircle
  },
];

export const Bonuses: React.FC = () => {
  return (
    <Section className="bg-spiritual-900/30" light>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          בונוסים למסלול המלא
        </h2>
        <p className="text-xl text-gold-400 font-medium">
          מעטפת של ידע ותמיכה להצלחה שלך
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map((bonus) => (
          <div 
            key={bonus.id} 
            className={`p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group ${
              bonus.highlight 
                ? 'bg-gradient-to-b from-spiritual-800 to-spiritual-900 border-gold-500/50 shadow-xl shadow-gold-500/10' 
                : 'bg-spiritual-950/60 border-spiritual-800 hover:border-gold-500/30'
            }`}
          >
            {bonus.highlight && (
              <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                מומלץ
              </div>
            )}
            <div className={`mb-6 p-3 rounded-lg inline-block ${bonus.highlight ? 'bg-gold-500/20 text-gold-400' : 'bg-spiritual-800/50 text-spiritual-200 group-hover:text-gold-400 group-hover:bg-gold-500/10'} transition-colors`}>
              <bonus.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
            <p className="text-spiritual-100/60 text-sm leading-relaxed">{bonus.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center p-6 bg-gold-500/10 rounded-2xl border border-gold-500/20 max-w-3xl mx-auto">
        <p className="text-lg text-white">
          בכל מפגש את מקבלת תקשור ונותנת תקשור
          <br />
          <span className="text-gold-400 font-bold mt-2 block">זהו המפתח לפיתוח הביטחון והיכולת שלך</span>
        </p>
      </div>
    </Section>
  );
};