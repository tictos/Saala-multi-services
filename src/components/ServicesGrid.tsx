import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { Sparkles, ArrowRight, CheckCircle2, Droplets, Hammer, Paintbrush, Clock, Check, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cleaning' | 'electricity' | 'subscription' | 'plumbing' | 'masonry' | 'decoration'>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const filteredServices = activeTab === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cleaning': return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case 'electricity': return <Zap className="w-4 h-4 text-amber-400" />;
      case 'subscription': return <Clock className="w-4 h-4 text-teal-400" />;
      case 'plumbing': return <Droplets className="w-4 h-4 text-sky-400" />;
      case 'masonry': return <Hammer className="w-4 h-4 text-amber-400" />;
      case 'decoration': return <Paintbrush className="w-4 h-4 text-emerald-400" />;
      default: return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'cleaning': return 'Fin de Chantier';
      case 'electricity': return 'Électricité';
      case 'subscription': return 'Abonnement';
      case 'plumbing': return 'Plomberie & Eau';
      case 'masonry': return 'Maçonnerie';
      case 'decoration': return 'Décoration';
      default: return 'Prestation';
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Background glow accents matching logo colors (Emerald & Royal Blue & Amber) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Nos Domaines d'Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Des Prestations Complètes pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300">
              Chaque Étape de Votre Habitat
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            Du nettoyage intensif post-construction aux installations d'électricité, de plomberie, de maçonnerie et d'abonnements réguliers.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Tous les Services' },
              { id: 'cleaning', label: 'Nettoyage Fin de Chantier' },
              { id: 'electricity', label: '⚡ Électricité Bâtiment' },
              { id: 'subscription', label: 'Abonnements Entretien' },
              { id: 'plumbing', label: 'Plomberie & Eau' },
              { id: 'masonry', label: 'Maçonnerie & Dalettes' },
              { id: 'decoration', label: 'Déco & Jardin' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 shadow-md shadow-emerald-500/25 font-bold'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`bg-neutral-950/90 rounded-3xl border border-neutral-800 overflow-hidden flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl ${
                index === 0 && activeTab === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Badge if available */}
                {service.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-400 text-neutral-950 text-xs font-black tracking-wide shadow-md">
                    {service.badge}
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 backdrop-blur-md text-xs font-semibold text-neutral-200 border border-neutral-700 shrink-0">
                    {getCategoryIcon(service.category)}
                    <span className="whitespace-nowrap">{getCategoryLabel(service.category)}</span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-300 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 whitespace-nowrap shrink-0">
                    {service.basePriceHint}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-2">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onSelectServiceForQuote(service)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:brightness-110 text-neutral-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <span>Configurer ce Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-950" />
                  </button>

                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="py-2.5 px-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold transition-colors cursor-pointer"
                    title="Voir tous les détails"
                  >
                    Détails
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for All-in-one Project Assistance */}
        <div className="mt-16 bg-gradient-to-r from-neutral-950 via-emerald-950/60 to-neutral-950 rounded-3xl p-8 sm:p-10 border border-emerald-900/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Vous avez un projet combinant nettoyage, électricité, plomberie et finitions ?
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl">
              Profitez de notre formule packagée multi-services : un seul interlocuteur, un devis groupé transparent et une coordination parfaite des corps de métier.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 py-3.5 px-8 rounded-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-extrabold text-sm shadow-xl shadow-emerald-400/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Demander une Visite Technique
          </button>
        </div>

      </div>

      {/* Detail Modal if a user clicks Details */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Détail de la prestation</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">{selectedServiceModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed">
              {selectedServiceModal.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Ce qui est inclus dans l'intervention :</h4>
              <ul className="space-y-2.5">
                {selectedServiceModal.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 text-sm font-semibold hover:bg-neutral-700 cursor-pointer"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  const s = selectedServiceModal;
                  setSelectedServiceModal(null);
                  onSelectServiceForQuote(s);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 font-bold text-sm hover:brightness-110 flex items-center gap-2 cursor-pointer"
              >
                <span>Configurer ma demande</span>
                <ArrowRight className="w-4 h-4 text-neutral-950" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
