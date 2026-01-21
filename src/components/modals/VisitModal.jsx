
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function VisitModal({ open, onOpenChange }) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    department: '',
    city: '',
    timeslot: '',
    notes: ''
  });

  const timeslots = [
    "Semaine 1 - 27-31 janvier 2026",
    "Semaine 2 - 3-7 février 2026",
    "Semaine 3 - 10-14 février 2026"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event tracked: submit_visit');
    
    // Store in localStorage
    localStorage.setItem('visit_booking', JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }));

    toast({
      title: "Réservation confirmée !",
      description: "Vous allez être redirigé...",
    });

    setTimeout(() => {
      navigate('/merci-passage');
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Réserver un passage terrain
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Département *
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              maxLength="2"
              placeholder="Ex: 75"
              className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Ville *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Créneau souhaité *
            </label>
            <select
              name="timeslot"
              value={formData.timeslot}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none"
            >
              <option value="">Sélectionnez un créneau...</option>
              {timeslots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Notes / Informations complémentaires (optionnel)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8DC73F] to-[#0066B3] hover:from-[#7AB62F] hover:to-[#005299] text-white font-bold py-3 rounded-xl"
          >
            Confirmer la réservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default VisitModal;
