
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function ThankYouVisit() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Réservation confirmée - Passage terrain SDV | Citypassenger</title>
        <meta name="description" content="Votre réservation pour un passage terrain est confirmée. Notre équipe vous contactera pour finaliser les détails." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#8DC73F] to-[#0066B3] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block bg-green-100 rounded-full p-4 mb-6"
            >
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Réservation confirmée !
            </h1>
            
            <p className="text-xl text-slate-600 mb-8">
              Votre passage terrain est en cours de planification
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Notre équipe vous contactera
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Un expert Citypassenger vous appellera dans les 24-48h pour confirmer la date et l'heure exactes du passage sur votre site.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Préparez votre audit
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Pour un diagnostic optimal, merci de prévoir :
                  </p>
                  <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                    <li>Accès à votre local technique</li>
                    <li>Plans réseau existants (si disponibles)</li>
                    <li>Liste de vos équipements connectés</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="border-[#0066B3] text-[#0066B3] hover:bg-[#0066B3] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ThankYouVisit;
