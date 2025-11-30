import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
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
          <span>מסע של 9 מפגשים מעשיים</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-spiritual-100 to-purple-300 leading-tight"
        >
          מרחבי התקשור
          <br />
          <span className="text-3xl md:text-5xl font-bold text-gold-400/90 block mt-2">הדיגיטליים</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-spiritual-100/90 max-w-3xl mx-auto leading-relaxed font-light"
        >
          הקשבה אמיתית היא מיומנות. שפה של הנשמה.
          <br className="hidden md:block" />
          וכשמתחילים לדבר אותה החיים מקבלים בהירות, משמעות, וקסם יומיומי.
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
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-spiritual-100/60">
            <Star className="w-4 h-4 text-gold-500" />
            <span>בונוסים מיוחדים לנרשמות למסלול המלא</span>
            <Star className="w-4 h-4 text-gold-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};