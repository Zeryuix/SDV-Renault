
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Shield, Globe, Settings, Check } from 'lucide-react';
function CitypassengerPartner() {
  const services = [{
    icon: Wifi,
    label: "WiFi Pro"
  }, {
    icon: Shield,
    label: "Pare-feu"
  }, {
    icon: Globe,
    label: "Portail captif"
  }, {
    icon: Settings,
    label: "Service Managé"
  }];
  return <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Left Column - Information */}
        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-slate-50">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Citypassenger – votre partenaire <span className="text-blue-600">SDV Renault</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
              Renault a sélectionné Citypassenger comme prestataire officiel national pour accompagner le réseau d'agents sur l'évolution de l'infrastructures réseau.
            </p>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-2xl bg-white aspect-[4/3]">
                <img src="https://horizons-cdn.hostinger.com/9f3d3dfc-856b-4e9a-8a4a-b537069763fc/c064ff6d5afa5dc24bc44d10b0c9a811.png" alt="Concession Renault" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    {/* Updated text as per Task 1 */}
                    Fiche partenaire Citypassenger est publié sur le site officiel Renault Net.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Stats & Partners */}
        <div className="p-8 md:p-16 lg:p-20 bg-[#00427A] text-white flex flex-col justify-center relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-12"> {/* Reduced space-y here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Reduced gap here */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                {/* 1. "20+ ans" - reduced to text-3xl md:text-4xl */}
                <div className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">20+ ans</div>
                {/* 2. "D'accompagnement..." - reduced to text-base md:text-lg */}
                <div className="text-blue-200 font-medium tracking-wide text-base md:text-lg uppercase border-l-4 border-blue-400 pl-4">
                  D'accompagnement de professionnels d'automobile
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                {/* 3. "400+ agences" - reduced to text-3xl md:text-4xl */}
                <div className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">400+ agences</div>
                {/* 4. "SONT DÉJÀ ÉQUIPÉES..." - reduced to text-base md:text-lg */}
                <div className="text-blue-200 font-medium tracking-wide text-base md:text-lg uppercase border-l-4 border-cyan-400 pl-4">
                  Sont déjà équipées par nos solutions en France
                </div>
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl shrink-0">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 w-full">
                  {services.map((service, idx) => <div key={idx} className="flex items-center gap-2"> {/* Reduced gap here */}
                      <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                      {/* 5. Services text - reduced to text-base */}
                      <span className="font-medium text-base">{service.label}</span>
                    </div>)}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="pt-8 border-t border-white/10">
              {/* 6. "PARTENAIRES OFFICIELS" - reduced to text-base md:text-lg */}
              <p className="text-blue-200 mb-6 font-medium uppercase tracking-widest text-base md:text-lg">Partenaires officiels</p>
              
              <div className="flex flex-wrap gap-4">
                {/* First Partner - CISCAR */}
                <div className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-lg w-32 h-24 transition-transform hover:scale-105 duration-300">
                  <img src="https://horizons-cdn.hostinger.com/9f3d3dfc-856b-4e9a-8a4a-b537069763fc/ciscar_centrale_achats_logo-JXkcI.jpeg" alt="CISCAR Logo" className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>

                {/* Second Partner */}
                <div className="bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg w-32 h-24 overflow-hidden transition-transform hover:scale-105 duration-300 relative group">
                  <img src="https://horizons-cdn.hostinger.com/9f3d3dfc-856b-4e9a-8a4a-b537069763fc/2021-nouveau-logo-renault-l55b8.jpg" alt="Network Infrastructure Partner" className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     {/* Overlay if needed to make it look more like a logo placeholder, but keeping clean for now */}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}
export default CitypassengerPartner;
