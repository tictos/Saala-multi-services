import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Star, CheckCircle2, Clock, Hammer, Droplets, Paintbrush, Play, Pause, VolumeX, MapPin, Phone, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToSection }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasLoaded(true);
          })
          .catch((error) => {
            console.log("Autoplay pending interaction:", error);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const heroWhatsAppMessage = encodeURIComponent("Bonjour SMS Pro Services ! Je souhaite l'envoi d'un agent sur mon chantier à Conakry / sous-région.");

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-neutral-950 pt-20 sm:pt-24 pb-12">
      {/* Background Video Layer with Muted Audio */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setHasLoaded(true)}
          onPlaying={() => {
            setIsPlaying(true);
            setHasLoaded(true);
          }}
          className="w-full h-full object-cover object-right-top md:object-center transform scale-100 transition-opacity duration-700 opacity-75 md:opacity-85"
        >
          <source src={BRAND_INFO.heroVideoUrl} type="video/mp4" />
          <source src={BRAND_INFO.heroVideoUrlFallback} type="video/mp4" />
        </video>
        
        {/* Brand Harmonized Overlays (Emerald & Deep Navy Blue) */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 md:via-neutral-950/75 to-transparent z-10 pointer-events-none" />
        
        {/* Brand Emerald & Teal & Amber ambient glows */}
        <div className="absolute -left-10 top-1/4 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute left-1/3 bottom-10 w-80 sm:w-96 h-80 sm:h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute right-10 top-10 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none z-10" />
        
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Video Controls Indicator */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950/70 backdrop-blur-md border border-white/10 text-[11px] text-neutral-300">
          <VolumeX className="w-3.5 h-3.5 text-emerald-400" />
          <span>Vidéo en sourdine</span>
        </div>
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/20 text-white hover:text-emerald-400 hover:bg-neutral-800 transition-all cursor-pointer shadow-lg"
          title={isPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"}
          aria-label="Contrôle de la vidéo"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-7">
            
            {/* Location & Contact Info */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 text-xs sm:text-sm font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Basé à Conakry · Contact WhatsApp & Appel Direct ({BRAND_INFO.phone1})</span>
              </div>
            </div>

            {/* Headline matching Brand Theme */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight drop-shadow-md">
              Espaces Impeccables,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300">
                Résultats d'Exception
              </span>
            </h1>

            {/* Detailed Body Copy */}
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl text-wrap-balance drop-shadow-sm">
              Vous venez d'achever la construction ou la rénovation de votre maison, villa ou bureau ? 
              Contactez-nous par <strong>WhatsApp ou appel direct</strong>. <strong>Un agent se déplace sur votre terrain pour constater, vous remet le devis et dès validation, le travail commence immédiatement.</strong>
            </p>

            {/* Multi-Service Badges (Fin de chantier, Électricité, Plomberie, Maçonnerie, Abonnements, Déco) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 text-xs font-semibold text-neutral-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Fin de Chantier
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 text-xs font-semibold text-neutral-200 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Électricité Bâtiment
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 text-xs font-semibold text-neutral-200 shadow-sm">
                <Droplets className="w-3.5 h-3.5 text-sky-400" /> Plomberie & Eau
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 text-xs font-semibold text-neutral-200 shadow-sm">
                <Hammer className="w-3.5 h-3.5 text-amber-400" /> Maçonnerie & Dalettes
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 text-xs font-semibold text-neutral-200 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-teal-400" /> Abonnements Mensuels
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 text-xs font-semibold text-neutral-200 shadow-sm">
                <Paintbrush className="w-3.5 h-3.5 text-emerald-400" /> Déco & Jardins
              </span>
            </div>

            {/* Hero CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`tel:${BRAND_INFO.phone1Clean}`}
                className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm border border-neutral-700 shadow-xl transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Appel {BRAND_INFO.phone1}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${heroWhatsAppMessage}`}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                <span>WhatsApp Direct</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 text-neutral-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap w-full sm:w-auto"
              >
                <span>Demander une Visite Terrain</span>
                <ArrowRight className="w-4 h-4 text-neutral-950" />
              </button>
            </div>

            {/* Trust Reviews Line */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-5 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white">Trustpilot</span>
                <div className="flex items-center text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">5 Star</span>
              </div>

              <span className="text-neutral-500 hidden sm:inline">|</span>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sky-400">✔ Capterra</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">5 Star</span>
              </div>

              <span className="text-neutral-500 hidden sm:inline">|</span>

              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Interventions Conakry & Sous-Région</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Feature Card */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="bg-neutral-950/85 backdrop-blur-xl border border-neutral-700/80 rounded-3xl p-5 sm:p-7 shadow-2xl text-white space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Lignes Ouvertes 7j/7</span>
                </div>
                <span className="text-xs text-neutral-400 font-medium">WhatsApp & Appel</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white">
                Besoin d'un devis pour votre chantier ou vos locaux ?
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Contact par WhatsApp ou appel direct</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Envoi d'un agent sur place pour constater</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Démarrage immédiat des travaux dès validation</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onScrollToSection('simulateur')}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 text-neutral-950 font-extrabold text-xs sm:text-sm hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Configurer mes besoins de chantier</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BRAND_INFO.phone1Clean}`}
                  className="p-2 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-emerald-400 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>Appel direct</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${heroWhatsAppMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon className="w-3 h-3 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
