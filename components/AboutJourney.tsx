import React from 'react';
import { Activity, Brain, Users } from 'lucide-react';

export const AboutJourney: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              התקדמות במרחב מתרחשת דרך <span className="text-gold">ניסיון חי</span>
            </h2>
            <div className="text-lg text-purple-100/80 space-y-4 font-light leading-relaxed">
              <p>
                <strong>המסע כולל 9 מפגשים.</strong> בכל מפגש מתקיים תרגול מעשי. שוב ושוב.
              </p>
              <p>
                בכל מפגש את תכנסי למצב תודעתי של גלי מוח איטיים, תתרגלי עם שותפה, תקבלי מסרים, תעבירי מסרים, תלמדי לזהות אנרגיות ותגלי איך ידיעה פנימית הופכת להיות ברורה, יציבה ופשוטה.
              </p>
              <p className="border-r-2 border-gold pr-4 italic text-white">
                אין צורך “להאמין” כי ברגע שזה קורה, את מרגישה שזה אמיתי.
              </p>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
             <h3 className="text-xl font-bold mb-6 text-gold">מתוך המקום הזה נפתחו מרחבי התקשור הדיגיטליים</h3>
             <ul className="space-y-4">
               <li className="flex items-center gap-3">
                 <Users className="text-gold w-5 h-5" />
                 <span>מרחב שנבנה כדי לאפשר לך להתקדם</span>
               </li>
               <li className="flex items-center gap-3">
                 <Activity className="text-gold w-5 h-5" />
                 <span>עם קבוצה תומכת והדרכה עדינה</span>
               </li>
               <li className="flex items-center gap-3">
                 <Brain className="text-gold w-5 h-5" />
                 <span>עם תרגול שמייצר שינוי אמיתי</span>
               </li>
             </ul>
             <p className="mt-6 text-sm text-purple-200">
               בכל מפגש יש תרגול מעשי. פנים אל פנים בזום רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני כי כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן.
             </p>
          </div>
        </div>

        {/* Practice Block */}
        <div className="bg-gradient-to-l from-primary to-transparent p-10 rounded-3xl border border-white/5 text-center">
          <h3 className="text-3xl font-bold mb-4">עיקר ההכשרה היא פרקטיקה ותרגול</h3>
          <p className="text-xl text-purple-100/90 max-w-2xl mx-auto">
            מפגש כל שבוע שבו אנחנו מתרגלים אחד על שני לפי מה התרגילים שאני מביאה יחד עם הפרקטיקה אני מעבירה ידע וחידודים מותאמים לרמת הקבוצה
          </p>
        </div>

      </div>
    </section>
  );
};