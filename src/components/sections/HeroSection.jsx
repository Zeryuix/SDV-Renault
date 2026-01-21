
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';

function HeroSection({ onWebinarClick, onAssessmentClick }) {
  const trackEvent = (eventName) => {
    console.log(`Event tracked: ${eventName}`);
  };

  const scrollToInfo = () => {
    trackEvent('click_more_info');
    // Scroll to the next section (SDVExplained)
    const sdvExplainedSection = document.getElementById('sdv-explained-section');
    if (sdvExplainedSection) {
      sdvExplainedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: scroll down 100vh if the target ID is not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSimulator = () => {
    trackEvent('click_simulator');
    // Opens the modal passed via props, which contains the logic/link
    onAssessmentClick();
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://horizons-cdn.hostinger.com/9f3d3dfc-856b-4e9a-8a4a-b537069763fc/714ee8770131c97a84cb0af12f1151ef.png"
          alt="Automotive Workshop SDV with Dashboard"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay focused on bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16 flex flex-col justify-end min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white mb-8"
        >
          {/* Main Title - Significantly Reduced Size */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            <span className="text-[#8DC73F]">SDV Renault</span>
          </h1>

          {/* Subtitle - Significantly Reduced Size */}
          <h2 className="text-xl md:text-2xl font-medium text-white/90">
            Conformité 2026 pour le secteur automobile
          </h2>
        </motion.div>

        {/* CTAs - Centered at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={handleSimulator}
              className="bg-[#8DC73F] hover:bg-[#7AB62F] text-slate-900 font-bold text-lg px-8 py-6 rounded-xl shadow-2xl w-full sm:w-auto"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Tester ma conformité
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={scrollToInfo}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-lg px-8 py-6 rounded-xl backdrop-blur-md w-full sm:w-auto"
            >
              Savoir plus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
