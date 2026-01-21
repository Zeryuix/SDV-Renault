
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function ZohoMeetingModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden bg-white">
        <DialogHeader className="px-6 py-4 border-b border-slate-100">
          <DialogTitle className="text-xl font-bold text-slate-900">
            Inscription au Webinaire
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center p-6 bg-slate-50">
          <iframe 
            src="https://meeting.zoho.eu/meeting/register/embed?sessionId=1270109334&src=38b74cbf37924806b1c359402fc35de0c8c8227f25698b5eff1011f0b2f21352"
            width="360"
            height="240"
            frameBorder="0"
            style={{ border: 'none', maxWidth: '100%' }}
            title="Zoho Meeting Registration"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ZohoMeetingModal;
