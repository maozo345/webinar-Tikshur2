import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-4 pt-10 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cosmic-gradient z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        {/* Stars */}
        <div className="absolute top-[20%] left-[15%] w-[3px] h-[3px] bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-[30%] right-[25%] w-[2px] h-[2px] bg-gold-400 rounded-full animate-twinkle delay-75"></div>
        <div className="absolute bottom-[40%] left-[30%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle delay-150"></div>
        <div className="absolute top-[15%] right-[10%] w-[4px] h-[4px] bg-gold-300 rounded-full animate-twinkle delay-300"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-panel text-gold-300 text-sm md:text-base font-medium tracking-wide mx-auto border-gold-500/20 shadow-lg shadow-gold-500/5"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>מסע של 9 מפגשים מעשיים</span>
          <Sparkles className="w-4 h-4 text-gold-400" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-spiritual-100 to-spiritual-200 leading-[1.1] tracking-tight drop-shadow-2xl pb-2">
            מרחבי התקשור
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-gold-400 mt-4 text-glow drop-shadow-lg">
            הדיגיטליים (ZOOM)
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative px-4"
        >
          <p className="text-lg md:text-2xl text-spiritual-100/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            הקשבה אמיתית היא מיומנות. שפה של הנשמה.
            <br className="hidden md:block" />
            <span className="md:mt-2 block">וכשמתחילים לדבר אותה החיים מקבלים בהירות, משמעות, וקסם יומיומי.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 flex flex-col items-center gap-8"
        >
          <Button 
            href="https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc" 
            className="shadow-gold-500/25 shadow-2xl hover:shadow-gold-500/40 transform hover:-translate-y-1"
          >
            אני רוצה להצטרף למפגש הראשון במתנה
          </Button>
          
          <div className="flex items-center justify-center gap-3 text-sm md:text-base text-spiritual-100/70 font-light bg-spiritual-900/30 px-6 py-2 rounded-full border border-white/5">
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span className="tracking-wide">עיקר ההכשרה היא פרקטיקה ותרגול</span>
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};