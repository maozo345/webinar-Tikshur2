import React from 'react';
import { Section } from './Section';
import { Brain, Heart, Radio, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="glass-panel p-8 rounded-2xl hover:bg-spiritual-900/60 transition-all duration-300 h-full border-t border-white/5">
    <div className="w-14 h-14 bg-gradient-to-br from-spiritual-800 to-spiritual-900 rounded-xl flex items-center justify-center mb-6 text-gold-400 shadow-lg shadow-black/20">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-spiritual-100/80 leading-relaxed">{desc}</p>
  </div>
);

export const AboutJourney: React.FC = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            התקדמות דרך <span className="text-gold-400">ניסיון חי</span>
          </h2>
          <p className="text-lg text-spiritual-100/80 leading-relaxed">
            המסע כולל 9 מפגשים. בכל מפגש מתקיים תרגול מעשי. שוב ושוב.
          </p>
          <p className="text-lg text-spiritual-100/80 leading-relaxed">
            בכל מפגש את תכנסי למצב תודעתי של גלי מוח איטיים, תתרגלי עם שותפה, תקבלי מסרים ותעבירי מסרים. תלמדי לזהות אנרגיות ותגלי איך ידיעה פנימית הופכת להיות ברורה, יציבה ופשוטה.
          </p>
          <div className="bg-spiritual-800/30 p-4 rounded-lg border-r-4 border-gold-500 mt-6">
            <p className="font-medium text-white italic">
              "אין צורך להאמין כי ברגע שזה קורה, את מרגישה שזה אמיתי."
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2099&auto=format&fit=crop" 
            alt="Spiritual connection" 
            className="relative rounded-2xl shadow-2xl border border-white/10 z-10"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Globe}
          title="מכל מקום בעולם"
          desc="מרחב שנבנה כדי לאפשר לך להתקדם בלי קשר לאיפה את נמצאת, עם קבוצה תומכת והדרכה עדינה."
        />
        <FeatureCard 
          icon={Brain}
          title="תרגול מעשי משנה תודעה"
          desc="בכל מפגש יש תרגול מעשי, פנים אל פנים בזום. רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני."
        />
        <FeatureCard 
          icon={Heart}
          title="פרקטיקה ודיוק אישי"
          desc="עיקר ההכשרה היא פרקטיקה. יחד עם התרגול אני מעבירה ידע וחידודים מותאמים לרמת הקבוצה."
        />
      </div>
    </Section>
  );
};