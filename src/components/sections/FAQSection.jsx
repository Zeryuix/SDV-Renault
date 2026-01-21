
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que le projet SDV Renault exactement ?",
      answer: "Le SDV (Software Defined Vehicle) est une évolution majeure des véhicules Renault qui deviennent de véritables ordinateurs sur roues. Cela implique des mises à jour logicielles OTA, une communication constante avec les outils de diagnostic et un échange de données en continu avec le cloud Renault."
    },
    {
      question: "Quelles sont les exigences techniques minimales pour 2026 ?",
      answer: "Pour 2026, votre site doit disposer d'une connexion fibre, d'un câblage Cat6a minimum, d'un WiFi 5 (WiFi 6 recommandé), et d'une séparation réseau avec VLAN métier et diagnostic. L'infrastructure doit supporter les outils de diagnostic connectés et les échanges de données en temps réel."
    },
    {
      question: "Combien de temps dure un audit de conformité ?",
      answer: "Un audit complet sur site dure généralement entre 2 et 4 heures selon la taille de votre installation. Nos experts analysent votre infrastructure réseau, testent les débits, vérifient la configuration des VLAN et vous fournissent un rapport détaillé avec recommandations."
    },
    {
      question: "Quel est le coût moyen de mise en conformité ?",
      answer: "Le coût varie considérablement selon votre situation actuelle. Grâce à notre simulateur gratuit, vous obtiendrez une première estimation. Dans de nombreux cas, il s'agit d'adapter l'existant intelligemment plutôt que de tout refaire, ce qui peut réduire significativement les coûts."
    },
    {
      question: "Que se passe-t-il si je ne suis pas conforme en 2026 ?",
      answer: "La non-conformité pourrait limiter votre capacité à effectuer certaines opérations de maintenance et de diagnostic sur les véhicules SDV Renault. Cela pourrait également affecter votre classification dans le réseau et limiter l'accès à certains outils et services Renault."
    },
    {
      question: "Comment réserver un passage terrain ou un webinar ?",
      answer: "Vous pouvez réserver directement via les boutons présents sur cette page. Pour le webinar, remplissez simplement le formulaire avec vos coordonnées. Pour un passage terrain, consultez le calendrier des disponibilités par région et sélectionnez le créneau qui vous convient."
    },
    {
      question: "Le webinar est-il vraiment gratuit et sans engagement ?",
      answer: "Oui, absolument ! Le webinar d'information de 45 minutes (+ 15 min de Q&R) est totalement gratuit et sans aucun engagement. C'est l'occasion d'obtenir toutes les informations nécessaires sur le projet SDV et de poser vos questions à nos experts."
    },
    {
      question: "Citypassenger est-il un partenaire officiel Renault ?",
      answer: "Oui, Citypassenger est partenaire officiel de Renault Net et CISCAR depuis plus de 20 ans. Nous avons équipé plus de 400 agences et possédons une expertise reconnue dans les infrastructures réseau pour le secteur automobile."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-slate-600">
            Tout ce que vous devez savoir sur la conformité SDV
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#0066B3] flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
