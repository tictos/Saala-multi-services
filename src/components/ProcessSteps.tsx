import React from 'react';
import { UserCheck, FileSpreadsheet, PlayCircle, ArrowRight, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ProcessStepsProps {
  onOpenBooking: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenBooking }) => {
  const defaultWhatsAppMsg = encodeURIComponent("Bonjour SMS Pro Services ! Je souhaite des informations pour un devis / visite d'un agent sur mon chantier.");

  const stepsConfig = [
    {
      step: "01",
      isMultiChannel: true,
      icon: WhatsAppIcon,
      secondaryIcon: Phone,
      title: "Contact par WhatsApp ou Appel Direct",
      subtitle: "Échange Immédiat & Envoi de Photos",
      desc: "Vous nous contactez par WhatsApp ou par appel téléphonique au +224 621 90 39 96 ou +224 664 04 15 05 pour nous décrire votre chantier.",
      badge: "WhatsApp & Appel 7j/7",
      actionText: "Discuter sur WhatsApp",
      actionLink: `https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppMsg}`
    },
    {
      step: "02",
      isMultiChannel: false,
      icon: UserCheck,
      title: "Envoi d'un Agent sur le Terrain",
      subtitle: "Constat de Visu sur Place",
      desc: "Un agent qualifié est dépêché chez vous à Conakry ou dans la sous-région pour constater l'état des sols, des vitres, les résidus de ciment et métrer les surfaces.",
      badge: "Déplacement & Constat",
      actionText: "Demander une visite",
      actionLink: null
    },
    {
      step: "03",
      isMultiChannel: false,
      icon: FileSpreadsheet,
      title: "Étude & Devis Précis Transmis",
      subtitle: "Proposition Claire et Détaillée",
      desc: "Notre équipe analyse les constats de l'agent et vous envoie le devis officiel précis sans frais caché directement par WhatsApp.",
      badge: "Devis après constat",
      actionText: "Configurer mon projet",
      actionLink: "#simulateur"
    },
    {
      step: "04",
      isMultiChannel: false,
      icon: PlayCircle,
      title: "Validation & Démarrage Immédiat",
      subtitle: "Intervention Outillée",
      desc: "Dès que vous validez la proposition, nos équipes outillées (monobrosses, aspirateurs HEPA, produits éco) démarrent immédiatement les travaux.",
      badge: "Démarrage immédiat",
      actionText: "Lancer mon projet",
      actionLink: null
    }
  ];

  return (
    <section id="processus" className="py-20 sm:py-28 bg-neutral-950 text-white relative overflow-hidden scroll-mt-12">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Notre Méthode de Travail en 4 Étapes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            De Votre Premier Contact à la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400">
              Livraison Clé en Main
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg">
            Un processus rapide par WhatsApp ou appel direct, sans paperasse, pour vos chantiers à Conakry et dans toute la sous-région.
          </p>
        </div>

        {/* 4-Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stepsConfig.map((item, idx) => {
            const Icon = item.icon;
            const isFirst = item.step === "01";

            return (
              <div
                key={idx}
                className="bg-neutral-900/90 rounded-3xl p-6 sm:p-7 border border-neutral-800 flex flex-col justify-between space-y-6 hover:border-lime-400/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-lime-400/30 group-hover:text-lime-400 transition-colors">
                      {item.step}
                    </span>

                    {/* Step Icon Badge */}
                    {isFirst ? (
                      <div className="h-12 px-3 rounded-2xl bg-neutral-800 text-white flex items-center justify-center gap-2 group-hover:bg-neutral-700 transition-all shadow-md">
                        <WhatsAppIcon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="text-neutral-500 font-bold text-xs">/</span>
                        <Phone className="w-4 h-4 text-lime-400 group-hover:scale-110 transition-transform" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-neutral-800 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md inline-block mb-1.5">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs text-neutral-400 font-medium">{item.subtitle}</div>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80">
                  {isFirst ? (
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={item.actionLink!}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <span className="text-neutral-700">·</span>
                      <a
                        href={`tel:${BRAND_INFO.phone1Clean}`}
                        className="text-xs font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Appel Direct</span>
                      </a>
                    </div>
                  ) : item.actionLink && item.actionLink.startsWith('http') ? (
                    <a
                      href={item.actionLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : item.actionLink ? (
                    <a
                      href={item.actionLink}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Under Banner */}
        <div className="mt-14 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-lime-400" />
              <span>Votre chantier est à Conakry ou en province / sous-région ?</span>
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Contactez-nous par WhatsApp ou appel direct au <strong>{BRAND_INFO.phone1}</strong> ou <strong>{BRAND_INFO.phone2}</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BRAND_INFO.phone1Clean}`}
              className="px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-bold text-xs sm:text-sm border border-neutral-700 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              <span>Appel direct</span>
            </a>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
