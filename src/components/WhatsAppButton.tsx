import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const message = encodeURIComponent("Bonjour SMS Pro Services ! Je souhaite me renseigner pour un nettoyage de fin de chantier / visite d'un agent à Conakry / sous-région.");

  return (
    <aside aria-label="Assistance WhatsApp et Appel rapide" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Popover options when clicking */}
      {isOpen && (
        <div className="mb-3 bg-neutral-900 border border-neutral-700 text-white rounded-2xl p-4 shadow-2xl w-80 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">WhatsApp & Appel Direct</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-neutral-400 hover:text-white rounded-lg cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-neutral-400">
            Choisissez un numéro pour échanger par WhatsApp ou appeler directement nos agents 7j/7 :
          </p>

          {/* Ligne 1 */}
          <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-white">Ligne 1 : {BRAND_INFO.phone1}</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">Principale</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phone1Clean}`}
                className="py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-neutral-700"
              >
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>Appeler</span>
              </a>
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-white">Ligne 2 : {BRAND_INFO.phone2}</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">Permanence</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp2Clean}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phone2Clean}`}
                className="py-1.5 px-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-neutral-700"
              >
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>Appeler</span>
              </a>
            </div>
          </div>

        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/30 cursor-pointer relative"
        aria-label="Contacter sur WhatsApp ou par Appel"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-lime-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-lime-400 rounded-full border-2 border-white" />
      </button>
    </aside>
  );
};
