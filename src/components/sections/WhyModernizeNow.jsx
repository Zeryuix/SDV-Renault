
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

function WhyModernizeNow() {
  const benefits = [
    "Garantir la compatibilité SDV avec les outils de diagnostic, de mise à jour et les systèmes Renault",
    "Éviter les interventions en urgence à l'approche des échéances 2026",
    "Sécuriser les échanges de données (véhicules, cloud, constructeurs)",
    "Assurer la continuité d'activité de l'atelier et des services connectés",
    "Optimiser l'existant plutôt que tout remplacer (Wi-Fi, câblage, segmentation)",
    "Préparer sereinement les évolutions futures du réseau et des véhicules"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-200/50 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text and Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium text-sm mb-6 border border-amber-200">
              <AlertTriangle className="w-4 h-4" />
              <span>Conformité 2026</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Pourquoi moderniser <span className="text-[#0066B3]">maintenant ?</span>
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Le déploiement du Projet SDV ne concerne pas seulement les véhicules : il impacte directement l'infrastructure réseau des concessions et ateliers. Anticiper dès aujourd'hui permet d'éviter les blocages opérationnels, les mises à niveau urgentes et les interruptions de service demain.
            </p>

            {/* Highlight Box */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-[#0066B3] to-[#005091] p-6 rounded-xl shadow-lg border border-[#0066B3]/20 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-lg mt-1">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">L'avantage stratégique</h4>
                  <p className="text-white/90 font-medium">
                    "Anticiper, c'est transformer une contrainte technique en avantage opérationnel."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Benefits List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8DC73F]/10 rounded-bl-full pointer-events-none" />
            
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#8DC73F] rounded-full"></span>
              Les bénéfices clés
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#8DC73F] group-hover:text-[#7AB62F] transition-colors" />
                  </div>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyModernizeNow;
