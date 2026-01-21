
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calculator, CheckCircle2, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
function SimulatorSection() {
  const [email, setEmail] = useState('');
  const {
    toast
  } = useToast();
  const trackEvent = eventName => {
    console.log(`Event tracked: ${eventName}`);
  };
  const benefits = ["Évaluer la situation actuelle", "Identifier points conformes / à ajuster", "Savoir si audit nécessaire", "Estimer le prix sans engagement"];
  const handleSimulator = () => {
    trackEvent('click_simulator');
    // Updated URL and target for redirection as per Task 2
    window.open('https://renault.citypassenger.com/fr/', '_blank');
  };
  const handleEmailSubmit = e => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Email envoyé !",
        description: "Nous vous rappellerons sous 24h."
      });
      setEmail('');
    }
  };
  return <section className="py-16 md:py-24 bg-gradient-to-br from-[#0066B3] to-[#8DC73F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          <div className="inline-block bg-white/10 backdrop-blur-md p-4 rounded-2xl mb-6">
            <Calculator className="w-16 h-16 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simulateur de conformité gratuit
          </h2>
          <p className="text-xl text-white/90">
            Testez votre niveau de conformité en quelques minutes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Benefits */}
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
        }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#8DC73F]" />
                <span className="font-medium">{benefit}</span>
              </div>)}
          </motion.div>

          {/* Main CTA */}
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
        }} className="text-center mb-12">
            <Button size="lg" onClick={handleSimulator} className="bg-white text-[#0066B3] hover:bg-slate-100 font-bold text-lg px-12 py-6 rounded-xl shadow-2xl">
              <Calculator className="w-5 h-5 mr-2" />
              Tester ma conformité gratuitement
            </Button>
          </motion.div>

          {/* Email Form */}
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
        }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Besoin d'aide? Nos experts sont là pour vous! </h3>
            <p className="text-white/90 text-center mb-6">On vous rappelle sous 48h pour vous accompagner lors du remplissage du simulateur gratuit</p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre.email@exemple.com" required className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-xl outline-none focus:ring-2 focus:ring-white" />
              <Button type="submit" size="lg" className="bg-[#8DC73F] hover:bg-[#7AB62F] text-slate-900 font-bold rounded-xl">
                <Send className="w-5 h-5 mr-2" />
                Envoyer
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}
export default SimulatorSection;
