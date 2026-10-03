import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/servicesData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-lime-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-lime-700" />
            <span>Retours d'Expérience Réels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Ils Nous Ont Confié Leurs Maisons & Locaux
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg">
            Découvrez comment nous avons soulagé propriétaires et entreprises lors de leurs fins de travaux et dans leur quotidien.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-lime-300" />
                </div>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">{review.name}</div>
                  <div className="text-xs text-neutral-500">{review.role} · <span className="text-neutral-700">{review.companyOrLocation}</span></div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Vérifié</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Badges / Impact numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-neutral-900">500+</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Chantiers nettoyés avec succès</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-lime-600">4.9 / 5</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Note moyenne de satisfaction</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-neutral-900">100%</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Garantie repassage gratuit</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">15 min</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Délai moyen de réponse devis</div>
          </div>
        </div>

      </div>
    </section>
  );
};
