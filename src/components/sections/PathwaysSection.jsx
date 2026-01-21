
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Video, MapPin, Clock, Users } from 'lucide-react';

function PathwaysSection({
  onWebinarClick,
  onVisitClick
}) {
  const trackEvent = eventName => {
    console.log(`Event tracked: ${eventName}`);
  };

  const WEBINAR_URL = "https://meet.zoho.eu/lucl-ntu-got";

  const handleScrollToCalendar = () => {
    const element = document.getElementById('calendar-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pathways = [
    {
      icon: Video,
      title: "Webinar d'information",
      tag: "Gratuit",
      duration: "45 min + 15 min Q/R",
      features: [
        "Présentation complète du projet SDV",
        "Exigences techniques détaillées",
        "Timeline et échéances",
        "Session de questions-réponses en direct"
      ],
      cta: "Réserver ma place au webinaire",
      action: () => {
        trackEvent('click_webinar_link');
        window.open(WEBINAR_URL, '_blank');
      },
      gradient: "from-blue-500 to-cyan-500",
      isWebinar: true
    },
    {
      icon: MapPin,
      title: "Passage expert dans votre région",
      tag: "Sur site",
      duration: "Visite personnalisée",
      features: [
        "Audit réseau complet sur place",
        "Diagnostic de conformité actuelle",
        "Recommandations personnalisées",
        "Plan d'action détaillé"
      ],
      cta: "Réserver un passage terrain",
      action: () => {
        trackEvent('click_field_visit');
        handleScrollToCalendar();
      },
      gradient: "from-green-500 to-emerald-500",
      isWebinar: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            2 parcours au choix
          </h2>
          <p className="text-xl text-slate-600">Choisissez le parcours qui vous convient le mieux</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pathways.map((pathway, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{
                y: -10
              }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pathway.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-300`} />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-br ${pathway.gradient} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <pathway.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-4 py-2 bg-[#8DC73F] text-white text-sm font-bold rounded-full">
                    {pathway.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {pathway.title}
                </h3>

                <div className="flex items-center gap-2 text-slate-600 mb-6">
                  <Clock className="w-5 h-5" />
                  <span>{pathway.duration}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pathway.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#8DC73F]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#8DC73F]" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  onClick={pathway.action}
                  className="w-full bg-gradient-to-r from-[#8DC73F] to-[#0066B3] hover:from-[#7AB62F] hover:to-[#005299] text-white font-bold rounded-xl shadow-lg mt-auto"
                >
                  {pathway.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PathwaysSection;
