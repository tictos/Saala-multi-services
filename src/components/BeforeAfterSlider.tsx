import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="avant-apres" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 text-lime-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            <span>Transformation Réelle Post-Travaux</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Glissez pour voir la différence{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600">
              Avant / Après Chantier
            </span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg">
            De l'état brut poussiéreux laissé par les maçons et peintres à une maison immaculée, prête pour vos meubles et votre famille.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Element */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-100 select-none cursor-ew-resize group"
            >
              {/* After Image (Background) */}
              <img
                src="/src/assets/images/post_construction_sparkling_clean_1791048225981.jpg"
                alt="Après nettoyage de fin de chantier impeccable"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After Tag */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-950/85 backdrop-blur-md text-lime-400 font-bold text-xs sm:text-sm border border-lime-400/30 shadow-lg whitespace-nowrap">
                <span className="sm:hidden">✨ Après</span>
                <span className="hidden sm:inline">✨ Après : Prêt à Habiter</span>
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/src/assets/images/post_construction_dusty_mess_1791048209990.jpg"
                  alt="Avant nettoyage fin de chantier avec traces de travaux"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                />

                {/* Before Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-neutral-950/85 backdrop-blur-md text-neutral-300 font-bold text-xs sm:text-sm border border-neutral-700 shadow-lg whitespace-nowrap">
                  <span className="sm:hidden">🧱 Avant</span>
                  <span className="hidden sm:inline">🧱 Avant : Saleté de Chantier</span>
                </div>
              </div>

              {/* Divider Bar & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 -ml-4.5 rounded-full bg-neutral-900 border-2 border-lime-400 text-lime-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <div className="flex items-center gap-0.5 text-xs font-black">
                    <span>◀</span>
                    <span>▶</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Slider Hint */}
            <p className="text-center text-xs text-neutral-500 mt-3 font-medium">
              ↔ Faites glisser le séparateur de gauche à droite pour comparer l'état avant et après intervention
            </p>
          </div>

          {/* Details & Guarantees beside slider */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-50 rounded-3xl p-6 sm:p-7 border border-neutral-200/80 space-y-5">
              <h3 className="text-xl font-bold text-neutral-900">
                Ce que nous éliminons en priorité :
              </h3>

              <ul className="space-y-3.5 text-sm text-neutral-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Voile de ciment & laitance :</strong>
                    Dissolution mécanique sans abîmer les joints neufs de carrelage.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Gouttes de peinture & plâtre :</strong>
                    Grattez avec des lames professionnelles de sécurité sur vitres et plinthes.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Poussière volatile & gaines :</strong>
                    Aspiration industrielle HEPA pour un air intérieur pur et respirable.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Vitrages & baies coulissantes :</strong>
                    Dépoussiérage des rails, nettoyage chimique doux et brillance miroir.
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-5 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer shadow-md"
                >
                  <span>Réserver mon Nettoyage Chantier</span>
                  <ArrowRight className="w-4 h-4 text-lime-400" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantie Repassage Gratuit si non satisfait</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
