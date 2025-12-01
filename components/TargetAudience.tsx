import React from 'react';
import { Check } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const list = [
    "למי שרוצה לקחת את האינטואיציה שמגיעה לה פה ושם ולהפוך אותה לתקשור מודע",
    "למי שמטפלת ורוצה להרחיב את סל הכלים שלה ולשפר את יכולת הטיפול שלה",
    "למי שרוצה להיות מתקשרת ולקבל אנשים לתקשורים אישים",
    "למי ששואלת שאלות פנימיות ומחפשת בהירות",
    "למי שמרגישה עומק ולא יודעת איך לגשת אליו",
    "למי שמרגישה שהלב שלה מדבר והיא רוצה ללמוד להקשיב לו"
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          למי המסע הזה מתאים?
        </h2>
        
        <div className="grid gap-4">
          {list.map((text, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
              <div className="bg-gold text-black rounded-full p-1 mt-1 shrink-0">
                <Check className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <span className="text-lg md:text-xl font-light">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};