import React from 'react';
import { Sparkles, ArrowRight, Layers, Eye, Brush, Flame } from 'lucide-react';
import imgSparklingClean from '../assets/images/post_construction_sparkling_clean_1791048225981.jpg';

interface PostConstructionSpotlightProps {
  onOpenBooking: () => void;
  onScrollToSimulator: () => void;
}

export const PostConstructionSpotlight: React.FC<PostConstructionSpotlightProps> = ({
  onOpenBooking,
  onScrollToSimulator,
}) => {
  const steps = [
    {
      title: "Élimination des voiles de ciment & colle",
      desc: "Décapage à la monobrosse industrielle rotative avec disques abrasifs doux pour dissoudre les résidus sans rayer les carrelages et marbres neufs.",
      icon: Layers,
    },
    {
      title: "Dépoussiérage intégral HEPA",
      desc: "Aspiration méticuleuse des poussières de plâtre et sciure incrustées dans les plinthes, rails de baies vitrées, coffres de volets et faux-plafonds.",
      icon: Brush,
    },
    {
      title: "Vitrages & profilés haute transparence",
      desc: "Grattage des projections de peinture et mastic avec grattoirs de vitrier certifiés, dégraissage et essuyage microfibre pour une clarté absolue.",
      icon: Eye,
    },
    {
      title: "Assainissement des sanitaires & cuisines",
      desc: "Désinfection antibactérienne vapeur des lavabos, receveurs de douche, baignoires, plans de travail et placards pour un emménagement immédiat.",
      icon: Flame,
    }
  ];

  return (
    <section id="fin-de-chantier-spotlight" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Guarantee Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-900">
              <img
                src={imgSparklingClean}
                alt="Résultat après nettoyage de fin de chantier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400 text-neutral-950 text-xs font-black">
                  100% Habitable Immédiatement
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Votre maison neuve livrée comme un bijou
                </h3>
                <p className="text-neutral-300 text-xs">
                  Aucune trace de peinture, odeur de chantier neutralisée, sols étincelants.
                </p>
              </div>
            </div>

            {/* Quick Guarantees Bar */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="text-emerald-700 font-extrabold text-sm sm:text-base">0% Traces</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Sols & vitres nets</div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="text-emerald-700 font-extrabold text-sm sm:text-base">24h - 48h</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Délais d'intervention</div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="text-emerald-700 font-extrabold text-sm sm:text-base">Matériel Pro</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Monobrosse & HEPA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Cœur de notre métier</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Nettoyage de Fin de Chantier :{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                  Passez des Travaux au Confort
                </span>
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Construire ou rénover est un investissement majeur. Malheureusement, la poussière fine générée par les ouvriers s'infiltre partout et les taches de ciment résistent aux nettoyages ordinaires. Notre protocole spécifique redonne tout son éclat à votre investissement.
              </p>
            </div>

            {/* Steps mini grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">{step.title}</h4>
                    <p className="text-neutral-600 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToSimulator}
                className="py-3.5 px-6 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Configurer ma surface & chantier</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={onOpenBooking}
                className="py-3.5 px-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 text-neutral-950 font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-400/20"
              >
                <span>Prendre Rendez-vous</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
