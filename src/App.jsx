
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LandingPage from '@/pages/LandingPage';
import ThankYouWebinar from '@/pages/ThankYouWebinar';
import ThankYouVisit from '@/pages/ThankYouVisit';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Projet SDV Renault - Conformité Réseau 2026 | Citypassenger</title>
        <meta name="description" content="Webinar gratuit et passages terrain pour comprendre, vérifier et anticiper votre conformité réseau SDV Renault. Partenaire officiel depuis 20+ ans." />
      </Helmet>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/merci-webinar" element={<ThankYouWebinar />} />
        <Route path="/merci-passage" element={<ThankYouVisit />} />
        <Route 
          path="/simulateur" 
          element={<Navigate to="https://Renault.Citypassenger.com" replace />} 
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
