import React from 'react';
import { Hero } from './components/Hero';
import { AboutJourney } from './components/AboutJourney';
import { Bonuses } from './components/Bonuses';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-white font-sans selection:bg-gold selection:text-black">
      <Hero />
      <AboutJourney />
      <Bonuses />
      <TargetAudience />
      
      <div className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">מוכנה לצאת למסע?</h2>
        <Button href="https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc" className="px-12 py-6 text-xl">
          אני רוצה להצטרף למפגש הראשון במתנה
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default App;