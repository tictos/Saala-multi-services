import React from 'react';
import { Clock, Check, ArrowRight, ShieldCheck, MapPin, UserCheck, Phone } from 'lucide-react';
import { SUBSCRIPTION_PLANS, BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface SubscriptionPlansProps {
  onOpenBooking: (planName?: string) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onOpenBooking }) => {
  const handleSelectPlan = (planName: string, frequency: string) => {
    const text = encodeURIComponent(`Bonjour SMS Pro Services (Conakry) !%0A%0AJe souhaite la visite d'un agent sur place pour évaluer le contrat d'entretien :%0A- Formule : ${planName}%0A- Fréquence souhaitée : ${frequency}%0A%0AMerci de m'envoyer un agent sur nos locaux pour constater et établir le devis officiel.`);
    window.open(`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${text}`, '_blank');
  };

  return (
    <section id="abonnements" className="py-20 sm:py-28 bg-white border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Formules Récurrentes & Sérénité</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Abonnements Mensuels pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
              Bureaux, Banques & Résidences
            </span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base lg:text-lg">
            Des agents de propreté qualifiés et équipés, supervisés régulièrement pour garantir des locaux impeccables au quotidien à Conakry et dans la sous-région.
          </p>

          <div className="p-3 bg-neutral-100 rounded-2xl inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 border border-neutral-200 mt-2">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Tarification sur-mesure établie exclusivement par un agent après visite de constat sur vos lieux.</span>
          </div>
        </div>

        {/* Plans Cards Grid (No hardcoded prices) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-neutral-900 text-white shadow-2xl border-2 border-emerald-400 scale-100 lg:scale-105 z-10'
                    : 'bg-neutral-50 text-neutral-900 border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-neutral-950 text-xs font-black uppercase tracking-wider shadow-md whitespace-nowrap">
                    ★ Formule la Plus Demandée
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      plan.popular ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      {plan.frequency}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black mt-1">{plan.name}</h3>
                    <p className={`text-xs mt-2 leading-relaxed ${
                      plan.popular ? 'text-neutral-300' : 'text-neutral-500'
                    }`}>
                      {plan.target}
                    </p>
                  </div>

                  {/* Devis Notice Badge */}
                  <div className={`p-3 rounded-2xl border text-center ${
                    plan.popular
                      ? 'bg-neutral-950/80 border-neutral-800 text-neutral-300'
                      : 'bg-white border-neutral-200 text-neutral-700'
                  }`}>
                    <span className="text-xs font-bold block text-emerald-400">Devis après visite terrain</span>
                    <span className="text-[11px] opacity-75">Selon superficie et cahier des charges</span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <span className={`font-bold uppercase text-[11px] tracking-wider block ${
                      plan.popular ? 'text-emerald-300' : 'text-neutral-900'
                    }`}>
                      Prestations incluses :
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-emerald-400 text-neutral-950' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-3 h-3 font-bold" />
                        </div>
                        <span className={plan.popular ? 'text-neutral-200' : 'text-neutral-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-8 space-y-2">
                  <button
                    onClick={() => handleSelectPlan(plan.name, plan.frequency)}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 text-neutral-950 shadow-lg shadow-emerald-400/20 active:scale-95'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white active:scale-95'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Demander la Visite d'un Agent</span>
                  </button>
                  <p className={`text-[11px] text-center ${
                    plan.popular ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Visite d'un agent pour définir le devis exact
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom B2B Banner */}
        <div className="mt-14 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-neutral-900 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Grands comptes, banques, ambassades ou multi-sites en Guinée & Sous-Région ?</span>
            </h4>
            <p className="text-neutral-600 text-xs sm:text-sm">
              Contactez directement notre direction commerciale par WhatsApp ou appel direct au <strong>{BRAND_INFO.phone1}</strong> ou <strong>{BRAND_INFO.phone2}</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${BRAND_INFO.phone1Clean}`}
              className="px-5 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Appel Direct</span>
            </a>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=Bonjour%20!%20Je%20souhaite%20la%20visite%20d'un%20agent%20pour%20un%20contrat%20d'entretien%20multi-sites%20sur%20mesure.`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-2"
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
