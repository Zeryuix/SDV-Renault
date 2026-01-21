
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

function ThankYouWebinar() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inscription confirmée - Webinar SDV Renault | Citypassenger</title>
        <meta name="description" content="Votre inscription au webinar SDV Renault est confirmée. Nous vous enverrons les détails de connexion par email." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0066B3] to-[#8DC73F] flex items-center justify-center p-4">
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
              Inscription confirmée !
            </h1>
            
            <p className="text-xl text-slate-600 mb-8">
              Votre place au webinar SDV Renault est réservée
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Email de confirmation envoyé
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Vous recevrez sous peu un email contenant le lien de connexion et tous les détails pratiques du webinar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-[#0066B3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Ajoutez l'événement à votre agenda
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Webinar SDV Renault - 45 min + 15 min Q/R
                  </p>
                  <p className="text-slate-500 text-xs">
                    Un rappel vous sera envoyé 24h avant le début du webinar.
                  </p>
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

export default ThankYouWebinar;
