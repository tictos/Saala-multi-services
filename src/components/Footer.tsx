import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenBooking }) => {
  const defaultWhatsAppText = encodeURIComponent("Bonjour SMS Pro Services ! Je souhaite des informations pour mon chantier à Conakry / sous-région.");

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_INFO.logoUrl}
                alt={BRAND_INFO.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
                className="h-12 w-auto object-contain brightness-125"
              />
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Entreprise leader du nettoyage de fin de chantier, de l'électricité bâtiment, de la plomberie, de la maçonnerie et des abonnements réguliers. Basée à <strong>Conakry (Guinée)</strong> et intervenant dans toute la sous-région.
            </p>

            <div className="pt-2 text-xs text-emerald-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Assistance 7j / 7 (WhatsApp & Appel Direct)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => onScrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('fin-de-chantier-spotlight')} className="hover:text-white transition-colors cursor-pointer">
                  Fin de Chantier
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('processus')} className="hover:text-white transition-colors cursor-pointer">
                  Notre Processus (4 étapes)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('simulateur')} className="hover:text-white transition-colors cursor-pointer">
                  Configuration Chantier
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('abonnements')} className="hover:text-white transition-colors cursor-pointer">
                  Abonnements Mensuels
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Direct
                </button>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Nos Métiers</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Nettoyage Fin de Chantier</li>
              <li>⚡ Électricité Bâtiment & Câblage</li>
              <li>Alimentation en Eau & Plomberie</li>
              <li>Abonnement Bureaux & Maisons</li>
              <li>Pose de Dalettes & Pavés</li>
              <li>Décoration & Espaces Verts</li>
            </ul>
          </div>

          {/* Contact Directs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Nos Lignes Directes</h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center justify-between">
                <a
                  href={`tel:${BRAND_INFO.phone1Clean}`}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{BRAND_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
                  title="WhatsApp Ligne 1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={`tel:${BRAND_INFO.phone2Clean}`}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{BRAND_INFO.phone2}</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp2Clean}?text=${defaultWhatsAppText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white"
                  title="WhatsApp Ligne 2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-start gap-2 text-neutral-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.locationCity} · Mobilité sous-région</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 text-neutral-950 font-black rounded-xl text-xs transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-950" />
                <span>Demander le Passage d'un Agent</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name} — Conakry (Guinée). WhatsApp & Appel Direct.
          </div>
          <div className="flex items-center gap-4">
            <span>Guinée & Sous-Région Ouest-Africaine</span>
            <span>·</span>
            <span>Garantie 100% Satisfait</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
