
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="https://horizons-cdn.hostinger.com/9f3d3dfc-856b-4e9a-8a4a-b537069763fc/51c496356c6f00a87f0643d679565cb6.png"
              alt="Citypassenger"
              className="h-12 mb-4"
            />
            <p className="text-white/70 text-sm">
              Partenaire officiel Renault Net & CISCAR depuis plus de 20 ans. Expert en infrastructures réseau pour le secteur automobile.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@citypassenger.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>01 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris & Montpellier</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Informations légales</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div>
                <a href="#" className="hover:text-[#8DC73F] transition-colors">
                  Mentions légales
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-[#8DC73F] transition-colors">
                  Politique de confidentialité
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-[#8DC73F] transition-colors">
                  Politique RGPD
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-[#8DC73F] transition-colors">
                  Gestion des cookies
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Citypassenger. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
