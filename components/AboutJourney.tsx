import React from 'react';
import { Section } from './Section';
import { Brain, Users, Sparkles, Radio } from 'lucide-react';

export const AboutJourney: React.FC = () => {
  return (
    <Section>
      <div className="space-y-16">
        
        {/* Main Concept */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              התקדמות דרך <span className="text-gold-400">ניסיון חי</span>
            </h2>
            <div className="prose text-lg text-spiritual-100/80 leading-relaxed space-y-4">
              <p>
                המסע כולל 9 מפגשים בכל מפגש מתקיים תרגול מעשי. שוב ושוב.
              </p>
              <p>
                בכל מפגש את תכנסי למצב תודעתי של גלי מוח איטיים תתרגלי עם שותפה תקבלי מסרים תעבירי מסרים תלמדי לזהות אנרגיות ותגלי איך ידיעה פנימית הופכת להיות ברורה, יציבה ופשוטה.
              </p>
              <p className="font-medium text-white">
                אין צורך “להאמין” כי ברגע שזה קורה, את מרגישה שזה אמיתי. ההתקדמות במרחב מתרחשת דרך ניסיון חי.
              </p>
            </div>
          </div>
          
          <div className="bg-spiritual-900/40 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-gold-400 mb-6 flex items-center gap-3">
              <Radio className="w-6 h-6" />
              מרחבי התקשור הדיגיטליים
            </h3>
            <p className="text-spiritual-100/80 mb-4 leading-relaxed">
              מתוך המקום הזה נפתחו מרחבי התקשור הדיגיטליים. זהו מרחב שנבנה כדי לאפשר לך להתקדם בלי קשר לאיפה את נמצאת בעולם עם קבוצה תומכת עם הדרכה עדינה עם תרגול שמייצר שינוי אמיתי.
            </p>
            <p className="text-spiritual-100/80 leading-relaxed">
              בכל מפגש יש תרגול מעשי. פנים אל פנים בזום רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני כי כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן.
            </p>
          </div>
        </div>

        {/* Practice Details */}
        <div className="bg-gradient-to-r from-spiritual-900 to-spiritual-800 p-8 md:p-10 rounded-3xl shadow-xl border border-white/5">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-gold-500/20 p-4 rounded-2xl text-gold-400 shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">עיקר ההכשרה היא פרקטיקה ותרגול</h3>
                <p className="text-lg text-spiritual-100/80 leading-relaxed mb-4">
                  מפגש כל שבוע שבו אנחנו מתרגלים אחד על שני לפי מה התרגילים שאני מביאה.
                </p>
                <p className="text-lg text-spiritual-100/80 leading-relaxed">
                  יחד עם הפרקטיקה אני מעבירה ידע וחידודים מותאמים לרמת הקבוצה.
                </p>
              </div>
           </div>
        </div>

      </div>
    </Section>
  );
};