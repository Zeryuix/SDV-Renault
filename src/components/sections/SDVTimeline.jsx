
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Server, Wifi, Zap, CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    year: "2025",
    title: "Publication cahier des charges",
    description: "Publication du cahier de charges Renault. Phase de sensibilisation vis-à-vis de nouvelles exigences.",
    icon: FileText,
    status: "completed"
  },
  {
    year: "2026",
    title: "Conformités réseau minimales",
    description: "Mise en conformité réseau minimales: Fibre, Cat 6a, WiFi 5, VLAN Métier et Diagnostique.",
    icon: Server,
    status: "current"
  },
  {
    year: "2027",
    title: "Arrivée du VLAN Véhicule + WiFi Véhicule SDV",
    description: "Fonctionnement SDV et optimisation : Arrivée du Vlan Véhicule + WiFi Véhicule SDV",
    icon: Wifi,
    status: "upcoming"
  },
  {
    year: "2028",
    title: "Performance 300 Mb/s WiFi 7, redondance complète",
    description: "Performance 300 Mb/s WiFi 7, redondance complète",
    icon: Zap,
    status: "upcoming"
  }
];

function SDVTimeline() {
  return (
    <section className="py-20 bg-[#0B1221] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Échéances <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">SDV Renault</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Timeline des étapes de conformité
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;
              const isCurrent = milestone.status === "current";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className={`
                      relative p-6 rounded-2xl border transition-all duration-300 group
                      ${isCurrent 
                        ? 'bg-slate-800/80 border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]' 
                        : 'bg-slate-900/50 border-white/5 hover:border-white/10 hover:bg-slate-800/50'
                      }
                      backdrop-blur-sm
                    `}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className={`text-3xl font-bold ${isCurrent ? 'text-blue-400' : 'text-slate-500'}`}>
                          {milestone.year}
                        </span>
                        {isCurrent && (
                          <span className="px-3 py-1 text-xs font-bold text-blue-100 bg-blue-600/80 rounded-full shadow-lg shadow-blue-900/20">
                            EN COURS
                          </span>
                        )}
                        {milestone.status === "completed" && (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`
                      w-12 h-12 rounded-full border-4 flex items-center justify-center bg-[#0B1221] transition-all duration-500
                      ${isCurrent 
                        ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-110' 
                        : 'border-slate-700'
                      }
                    `}>
                      <Icon className={`w-5 h-5 ${isCurrent ? 'text-blue-400' : 'text-slate-500'}`} />
                    </div>
                  </div>

                  {/* Empty space for layout balance */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Message Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50">
            <div className="bg-[#0f172a] px-8 py-6 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl"></div>
              <p className="text-lg md:text-xl font-medium text-white relative z-10">
                L'enjeu aujourd'hui : <span className="text-blue-400 font-bold">anticiper sereinement</span>, pas attendre une contrainte de dernière minute.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SDVTimeline;
