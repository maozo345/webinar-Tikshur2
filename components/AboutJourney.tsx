import React from 'react';
import { Section } from './Section';
import { Users, Radio } from 'lucide-react';

export const AboutJourney: React.FC = () => {
  return (
    <Section>
      <div className="space-y-20">
        
        {/* Main Concept */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              התקדמות דרך <span className="text-gold-400 border-b-4 border-gold-500/30 pb-1">ניסיון חי</span>
            </h2>
            <div className="prose text-lg md:text-xl text-spiritual-100/80 leading-relaxed space-y-6 font-light">
              <p>
                <strong className="text-white font-bold">המסע כולל 9 מפגשים.</strong> בכל מפגש מתקיים תרגול מעשי. שוב ושוב.
              </p>
              <p>
                בכל מפגש את תכנסי למצב תודעתי של גלי מוח איטיים, תתרגלי עם שותפה, תקבלי מסרים, תעבירי מסרים, תלמדי לזהות אנרגיות ותגלי איך ידיעה פנימית הופכת להיות ברורה, יציבה ופשוטה.
              </p>
              <div className="bg-white/5 p-6 rounded-r-xl border-r-4 border-gold-500">
                <p className="font-medium text-white italic">
                  "אין צורך להאמין כי ברגע שזה קורה, את מרגישה שזה אמיתי. ההתקדמות במרחב מתרחשת דרך ניסיון חי."
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-spiritual-900/80 to-spiritual-800/40 p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-purple-500 to-gold-400"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-gold-400 mb-6 flex items-center gap-3">
              <span className="bg-gold-500/10 p-2 rounded-lg"><Radio className="w-6 h-6" /></span>
              מרחבי התקשור הדיגיטליים
            </h3>
            
            <div className="space-y-6 text-spiritual-100/90 leading-relaxed">
              <p>
                מתוך המקום הזה נפתחו מרחבי התקשור הדיגיטליים. זהו מרחב שנבנה כדי לאפשר לך להתקדם בלי קשר לאיפה את נמצאת בעולם:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                  עם קבוצה תומכת
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                  עם הדרכה עדינה
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                  עם תרגול שמייצר שינוי אמיתי
                </li>
              </ul>
              <p className="pt-4 border-t border-white/5">
                בכל מפגש יש תרגול מעשי. פנים אל פנים בזום. רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני כי כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Details Box */}
        <div className="transform hover:scale-[1.01] transition-transform duration-500">
          <div className="bg-gradient-to-r from-spiritual-900 to-spiritual-800 p-8 md:p-12 rounded-3xl shadow-xl border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-gold-500 p-4 rounded-2xl text-black shrink-0 shadow-lg shadow-gold-500/20">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">עיקר ההכשרה היא פרקטיקה ותרגול</h3>
                  <div className="space-y-4 text-lg text-spiritual-100/80 leading-relaxed">
                    <p>
                      מפגש כל שבוע שבו אנחנו מתרגלים אחד על שני לפי מה התרגילים שאני מביאה.
                    </p>
                    <p>
                      יחד עם הפרקטיקה אני מעבירה ידע וחידודים מותאמים לרמת הקבוצה.
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </Section>
  );
};