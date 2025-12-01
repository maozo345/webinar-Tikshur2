import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-sm font-medium"
        >
          <Sparkles className="w-4 h-4" />
          <span>מסע של 9 מפגשים</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200">
            מרחבי התקשור
          </span>
          <br />
          <span className="text-gold mt-2 block">
            הדיגיטליים (ZOOM)
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-purple-100/90 font-light max-w-2xl mx-auto leading-relaxed"
        >
          הקשבה אמיתית היא מיומנות. שפה של הנשמה. וכשמתחילים לדבר אותה החיים מקבלים בהירות, משמעות, וקסם יומיומי.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <Button href="https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc" className="text-lg md:text-xl px-10 py-5">
            אני רוצה להצטרף למפגש הראשון במתנה
          </Button>
        </motion.div>
      </div>
    </section>
  );
};