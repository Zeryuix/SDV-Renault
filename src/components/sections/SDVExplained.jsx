
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Radio, Database } from 'lucide-react';

function SDVExplained({ id }) {
  // Added id prop
  const cards = [{
    icon: Download,
    title: "Mises à jour logicielles automatiques",
    description: "OTA (Over-The-Air) pour véhicules connectés"
  }, {
    icon: Radio,
    title: "Communication avec les outils Renault",
    description: "Diagnostic et reprogrammation en temps réel"
  }, {
    icon: Database,
    title: "Échange de données en continu",
    description: "Cloud et synchronisation permanente"
  }];

  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">SDV, qu'est-ce que c'est? </h2>
          {/* New descriptive text */}
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Le Projet SDV (Software Defined Vehicle) est une évolution majeure des véhicules Renault :
            les fonctions du véhicule (diagnostic, mises à jour, sécurité, performance) sont désormais pilotées par le logiciel et mises à jour à distance.
            <br /><br />
            Concrètement, cela implique une connexion réseau fiable, sécurisée et conforme dans les concessions et ateliers :
            Wi-Fi professionnel, segmentation réseau, accès cloud maîtrisé et continuité de service.
            <br /><br />
            À partir de 2026, ces exigences deviennent structurantes pour les sites Renault.
            Le Projet SDV vise donc à préparer les infrastructures IT des concessions, afin de garantir la compatibilité des outils, la sécurité des données et la fluidité des opérations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05,
          y: -5
        }} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="bg-gradient-to-br from-[#8DC73F] to-[#0066B3] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600">
                {card.description}
              </p>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#8DC73F]/10 to-[#0066B3]/10 rounded-2xl p-8 border border-[#8DC73F]/20">
            <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed">Les exigences SDV concernent l'environnement réseau du site entier — souvent, il s'agit d'adapter l'existant intelligemment.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default SDVExplained;
