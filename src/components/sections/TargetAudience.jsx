
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, Plug } from 'lucide-react';

function TargetAudience() {
  const audiences = [
    {
      icon: Building2,
      title: "Agents & concessions Renault",
      description: "Tous les sites du réseau officiel"
    },
    {
      icon: Wrench,
      title: "Garages avec atelier mécanique/carrosserie",
      description: "Sites équipés pour la maintenance"
    },
    {
      icon: Plug,
      title: "Sites équipés Plug & Connect",
      description: "Bornes / outils diagnostic connectés"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pour qui ?
          </h2>
          <p className="text-xl text-slate-600">
            <span className="inline-block px-4 py-2 bg-[#8DC73F]/10 text-[#0066B3] font-semibold rounded-lg">
              R1/R2 concernés
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 text-center"
            >
              <div className="bg-gradient-to-br from-[#8DC73F] to-[#0066B3] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <audience.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-slate-600">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TargetAudience;
