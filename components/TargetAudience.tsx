import React from 'react';
import { Section } from './Section';
import { Check } from 'lucide-react';

const audienceList = [
  "למי שרוצה לקחת את האינטואיציה שמגיעה לה פה ושם ולהפוך אותה לתקשור מודע",
  "למי שמטפלת ורוצה להרחיב את סל הכלים שלה ולשפר את יכולת הטיפול שלה",
  "למי שרוצה להיות מתקשרת ולקבל אנשים לתקשורים אישים",
  "למי ששואלת שאלות פנימיות ומחפשת בהירות",
  "למי שמרגישה עומק ולא יודעת איך לגשת אליו",
  "למי שמרגישה שהלב שלה מדבר והיא רוצה ללמוד להקשיב לו"
];

export const TargetAudience: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-16">
        <div className="w-full md:w-5/12 min-h-[400px]">
          <div className="sticky top-24 h-full">
            <img 
              src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1974&auto=format&fit=crop" 
              alt="Meditation moment" 
              className="rounded-2xl shadow-2xl shadow-purple-900/20 object-cover w-full h-full min-h-[400px]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 space-y-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            למי המסע הזה <span className="text-gold-400 block mt-2">מתאים?</span>
          </h2>
          
          <div className="space-y-4">
            {audienceList.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 group"
              >
                <div className="bg-gold-500/20 p-1 rounded-full mt-1 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300 text-gold-500">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-lg text-spiritual-50 font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};