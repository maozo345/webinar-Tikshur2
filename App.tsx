import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { AboutJourney } from './components/AboutJourney';
import { Bonuses } from './components/Bonuses';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

// Sticky CTA for mobile
const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-spiritual-950/90 backdrop-blur-lg border-t border-white/10 z-50 md:hidden animate-slide-up">
      <Button 
        href="https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc" 
        fullWidth
        className="text-sm py-3 font-bold"
      >
        אני רוצה להצטרף למפגש הראשון במתנה
      </Button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-spiritual-950 text-white font-sans selection:bg-purple-500 selection:text-white">
      <main>
        <Hero />
        <AboutJourney />
        <Bonuses />
        <TargetAudience />
        
        {/* Final CTA Section */}
        <div className="py-24 px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">הלב קורא לך?</h2>
          <Button href="https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc" className="text-xl px-12 py-6">
            אני רוצה להצטרף למפגש הראשון במתנה
          </Button>
        </div>
      </main>
      
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;