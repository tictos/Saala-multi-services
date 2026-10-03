import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Phone } from 'lucide-react';
import { SERVICES_LIST, BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  quoteSummary?: any;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  quoteSummary,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'fin-de-chantier',
    date: '',
    timeSlot: 'matin',
    zone: 'Conakry - Ratoma / Kipé / Lambanyi',
    notes: '',
  });

  const [selectedWhatsAppLine, setSelectedWhatsAppLine] = useState<'1' | '2'>('1');

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const targetNumber = selectedWhatsAppLine === '1' ? BRAND_INFO.whatsapp1Clean : BRAND_INFO.whatsapp2Clean;
    const selectedServiceObj = SERVICES_LIST.find(s => s.id === formData.service);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.service;

    const messageText = `*Bonjour SMS Pro Services (Conakry)* !%0A%0AJe souhaite convenir d'un rendez-vous pour la visite d'un agent sur mon chantier :%0A- *Nom* : ${encodeURIComponent(formData.name)}%0A- *Mon Numéro* : ${encodeURIComponent(formData.phone)}%0A- *Prestation* : ${encodeURIComponent(serviceName)}%0A- *Lieu / Ville* : ${encodeURIComponent(formData.zone)}%0A- *Date souhaitée* : ${encodeURIComponent(formData.date || 'Au plus vite')}%0A- *Créneau* : ${encodeURIComponent(formData.timeSlot)}%0A- *Précisions* : ${encodeURIComponent(formData.notes || 'Visite sur chantier pour constat et devis')}%0A%0AMerci de me confirmer le passage de l'agent.`;

    window.open(`https://wa.me/${targetNumber}?text=${messageText}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-neutral-900 border border-neutral-700 rounded-3xl max-w-lg w-full p-5 sm:p-8 space-y-5 relative animate-scaleIn my-6 max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleWhatsAppBooking} className="space-y-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Prise de RDV · WhatsApp ou Appel</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">Demander un Agent sur le Terrain</h3>
            <p className="text-xs text-neutral-400">
              Renseignez vos coordonnées pour convenir de la visite sur WhatsApp ou appelez directement un responsable.
            </p>
          </div>

          {/* Quick Call Direct Box */}
          <div className="p-3 bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-neutral-400 block font-medium">Besoin d'un échange vocal immédiat ?</span>
              <span className="text-xs font-bold text-white">Appel direct 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${BRAND_INFO.phone1Clean}`}
                className="py-1.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs border border-neutral-700 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>Ligne 1</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phone2Clean}`}
                className="py-1.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs border border-neutral-700 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>Ligne 2</span>
              </a>
            </div>
          </div>

          {/* Choose WhatsApp Destination */}
          <div className="p-3 bg-neutral-950 rounded-2xl border border-neutral-800 space-y-2">
            <label className="text-xs font-bold text-neutral-300 block">
              Ou sélectionnez le numéro WhatsApp de contact :
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedWhatsAppLine('1')}
                className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedWhatsAppLine === '1'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Ligne 1 ({BRAND_INFO.phone1})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedWhatsAppLine('2')}
                className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedWhatsAppLine === '2'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Ligne 2 ({BRAND_INFO.phone2})</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-neutral-300">Votre Nom Complet *</label>
              <input
                type="text"
                required
                placeholder="Ex: Diallo Mohamadou"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300">Votre Numéro de Téléphone *</label>
              <input
                type="tel"
                required
                placeholder="Ex: +224 621 90 39 96"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-neutral-300">Date souhaitée</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300">Créneau</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                >
                  <option value="Matinée (08h00 - 12h00)">Matinée (08h00 - 12h00)</option>
                  <option value="Après-midi (13h00 - 17h00)">Après-midi (13h00 - 17h00)</option>
                  <option value="Urgent (Aujourd'hui / 24h)">Urgent (Aujourd'hui / 24h)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300">Quartier / Ville</label>
              <input
                type="text"
                placeholder="Ex: Conakry (Kipé, Lambanyi, Dixinn...) ou Région"
                value={formData.zone}
                onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300">Prestation souhaitée</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                {SERVICES_LIST.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
                <option value="pack">Pack Complet (Nettoyage + Plomberie + Maçonnerie)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-300">Remarques sur le chantier</label>
              <textarea
                rows={2}
                placeholder="Précisez l'état du chantier (peinture, vitres, ciment...)"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/25 active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ouvrir sur WhatsApp & Transmettre le RDV</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
