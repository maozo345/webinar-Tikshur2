import React from 'react';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';

const audienceList = [
  "למי שרוצה לקחת את האינטואיציה שמגיעה לה פה ושם ולהפוך אותה לתקשור מודע",
  "למטפלות שרוצות להרחיב את סל הכלים שלהן ולשפר את יכולת הטיפול והאבחון",
  "למי שרוצה להיות מתקשרת מקצועית ולקבל אנשים לתקשורים אישיים",
  "למי ששואלת שאלות פנימיות ומחפשת בהירות בחיים",
  "למי שמרגישה עומק ולא יודעת איך לגשת אליו",
  "למי שמרגישה שהלב שלה מדבר והיא רוצה ללמוד להקשיב לו באמת"
];

export const TargetAudience: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img 
            src="https://picsum.photos/seed/spiritual/600/800" 
            alt="Atmospheric meditation" 
            className="rounded-2xl shadow-2xl shadow-purple-900/50 grayscale-[30%] hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            למי המסע הזה <span className="text-gold-400">מתאים?</span>
          </h2>
          
          <ul className="space-y-4">
            {audienceList.map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                <span className="text-lg text-spiritual-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};