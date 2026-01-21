
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

function AssessmentModal({ open, onOpenChange }) {
  const handleSimulator = () => {
    console.log('Event tracked: click_simulator');
    window.open('https://Renault.Citypassenger.com', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Évaluer ma conformité
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="bg-gradient-to-br from-[#0066B3]/10 to-[#8DC73F]/10 rounded-xl p-6 mb-6 text-center">
            <Calculator className="w-16 h-16 mx-auto mb-4 text-[#0066B3]" />
            <p className="text-slate-700 mb-4">
              Notre simulateur gratuit vous permet d'évaluer votre niveau de conformité en quelques minutes.
            </p>
            <p className="text-sm text-slate-600">
              Vous recevrez un rapport détaillé avec des recommandations personnalisées.
            </p>
          </div>

          <Button
            onClick={handleSimulator}
            className="w-full bg-gradient-to-r from-[#8DC73F] to-[#0066B3] hover:from-[#7AB62F] hover:to-[#005299] text-white font-bold py-3 rounded-xl"
          >
            Accéder au simulateur
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AssessmentModal;
