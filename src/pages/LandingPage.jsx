
import React, { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import SDVExplained from '@/components/sections/SDVExplained';
import WhyModernizeNow from '@/components/sections/WhyModernizeNow';
import SDVTimeline from '@/components/sections/SDVTimeline';
import TargetAudience from '@/components/sections/TargetAudience';
import PathwaysSection from '@/components/sections/PathwaysSection';
import CitypassengerPartner from '@/components/sections/CitypassengerPartner';
import CalendarSection from '@/components/sections/CalendarSection';
import SimulatorSection from '@/components/sections/SimulatorSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/Footer';
import WebinarModal from '@/components/modals/WebinarModal';
import VisitModal from '@/components/modals/VisitModal';
import AssessmentModal from '@/components/modals/AssessmentModal';
import FieldVisitReservationModal from '@/components/modals/FieldVisitReservationModal';

function LandingPage() {
  const [webinarModalOpen, setWebinarModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  // Note: CalendarSection manages its own state for FieldVisitReservationModal internally now,
  // but we can also manage it here if we want to trigger it from outside CalendarSection.
  // For now, VisitModal is triggered by 'onVisitClick' prop passed to PathwaysSection and CalendarSection.
  
  // The 'onVisitClick' in CalendarSection was previously triggering 'visitModalOpen'.
  // We updated CalendarSection to use FieldVisitReservationModal internally for its own buttons.
  // However, PathwaysSection also has a "Réserver un passage terrain" button that calls 'onVisitClick'.
  // That 'onVisitClick' currently scrolls to CalendarSection (as per previous task).
  
  // Wait, the previous task said: "Réserver un passage terrain" button: On click, scroll smoothly to the CalendarSection element
  // So PathwaysSection doesn't open a modal anymore, it scrolls.
  
  // The CalendarSection buttons DO trigger a modal.
  // It seems VisitModal might be redundant now if we are using FieldVisitReservationModal inside CalendarSection, 
  // or maybe VisitModal was the old version.
  // I will keep VisitModal available in case it is used elsewhere, but CalendarSection now uses FieldVisitReservationModal.

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection 
        onWebinarClick={() => setWebinarModalOpen(true)}
        onAssessmentClick={() => setAssessmentModalOpen(true)}
      />
      <SDVExplained id="sdv-explained-section" />
      <WhyModernizeNow />
      <SDVTimeline />
      <TargetAudience />
      <PathwaysSection 
        onWebinarClick={() => setWebinarModalOpen(true)}
        onVisitClick={() => {
           // This scrolls to calendar section
           const element = document.getElementById('calendar-section');
           if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
           }
        }}
      />
      <CitypassengerPartner />
      <div id="calendar-section">
        {/* We don't strictly need to pass onVisitClick here anymore if the buttons inside use internal state for the new modal, 
            but keeping it for backward compatibility if logic changes again. */}
        <CalendarSection onVisitClick={() => setVisitModalOpen(true)} />
      </div>
      <SimulatorSection />
      <FAQSection />
      <Footer />
      
      <WebinarModal open={webinarModalOpen} onOpenChange={setWebinarModalOpen} />
      <VisitModal open={visitModalOpen} onOpenChange={setVisitModalOpen} />
      <AssessmentModal open={assessmentModalOpen} onOpenChange={setAssessmentModalOpen} />
      {/* FieldVisitReservationModal is now rendered inside CalendarSection, but if we needed it globally we could put it here */}
    </div>
  );
}

export default LandingPage;
