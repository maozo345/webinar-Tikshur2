import React from 'react';
import { Section } from './Section';
import { Brain, Users, Zap, Radio } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="glass-panel p-6 rounded-2xl hover:bg-spiritual-900/40 transition-colors duration-300">
    <div className="w-12 h-12 bg-spiritual-800 rounded-full flex items-center justify-center mb-4 text-gold-400">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-spiritual-100/70 leading-relaxed">{desc}</p>
  </div>
);

export const AboutJourney: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">מה קורה במסע הזה?</h2>
        <p className="text-lg text-spiritual-100/80 max-w-2xl mx-auto">
          זה לא קורס תיאורטי. זהו מרחב אימון לתודעה. 
          בכל מפגש את נכנסת למצב תודעתי של גלי מוח איטיים, מתרגלת עם שותפה, ולומדת דרך החוויה.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard 
          icon={Brain}
          title="תרגול מעשי - שוב ושוב"
          desc="בכל מפגש את מקבלת תקשור ונותנת תקשור. רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני."
        />
        <FeatureCard 
          icon={Radio}
          title="תודעה וגלי מוח"
          desc="לומדים להאט את הקצב, להיכנס לגלי מוח המאפשרים קליטה, ולזהות אנרגיות בצורה ברורה ויציבה."
        />
        <FeatureCard 
          icon={Zap}
          title="ביטחון בידיעה הפנימית"
          desc="אין צורך 'להאמין'. ברגע שזה קורה, את מרגישה שזה אמיתי. ההתקדמות מתרחשת דרך ניסיון חי."
        />
        <FeatureCard 
          icon={Users}
          title="מרחב דיגיטלי תומך (ZOOM)"
          desc="נבנה כדי לאפשר לך להתקדם מכל מקום בעולם, עם קבוצה תומכת, הדרכה עדינה ופרקטיקה שמייצרת שינוי."
        />
      </div>

      <div className="mt-16 glass-panel p-8 rounded-3xl border border-gold-500/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        <h3 className="text-2xl font-bold text-gold-400 mb-4">עיקר ההכשרה היא פרקטיקה</h3>
        <p className="text-lg text-white/90">
          מפגש כל שבוע שבו אנחנו מתרגלים אחד על השני. יחד עם הפרקטיקה אני מעבירה ידע וחידודים המותאמים לרמת הקבוצה ולדינמיקה שנוצרת בזמן אמת.
        </p>
      </div>
    </Section>
  );
};