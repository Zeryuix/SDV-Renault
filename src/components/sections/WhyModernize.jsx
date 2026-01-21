import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Wifi, Users, Lock } from 'lucide-react';
function WhyModernize() {
  const reasons = [{
    icon: RefreshCw,
    title: "Diagnostic OTA / mises à jour & reprog rapides",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    icon: Wifi,
    title: "Objets connectés (outils atelier)",
    gradient: "from-green-500 to-emerald-500"
  }, {
    icon: Users,
    title: "Expérience client (connexion stable)",
    gradient: "from-purple-500 to-pink-500"
  }, {
    icon: Lock,
    title: "Sécurité des données (RGPD / Cloud)",
    gradient: "from-orange-500 to-red-500"
  }];
  return <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
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
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Enlever cette partie </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => <motion.div key={index} initial={{
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
          y: -10
        }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8DC73F]/20 to-[#0066B3]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col items-center text-center">
                <div className={`bg-gradient-to-br ${reason.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {reason.title}
                </h3>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export default WhyModernize;