import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-20 pb-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cosmic-gradient z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-gold-400 text-sm font-medium tracking-wide mx-auto"
        >
          <Sparkles className="w-4 h-4" />
          <span>המסע מתחיל בקרוב</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-spiritual-100 to-purple-300 leading-tight"
        >
          לגלות את שפת הנשמה
          <br />
          <span className="text-3xl md:text-5xl font-normal text-spiritual-100 block mt-2">מסע מעשי לפיתוח תקשור</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-spiritual-100/80 max-w-2xl mx-auto leading-relaxed"
        >
          9 מפגשים של תרגול חי, גילוי אנרגטי וידיעה פנימית עמוקה.
          <br className="hidden md:block" />
          כי הקשבה אמיתית היא מיומנות, וקסם הוא לא רק אגדה - הוא דרך חיים.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8"
        >
          <Button href="https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc">
            אני רוצה להצטרף למפגש הראשון במתנה
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            *הצטרפות לקבוצת הווטסאפ השקטה לפרטים והרשמה
          </p>
        </motion.div>
      </div>
    </section>
  );
};