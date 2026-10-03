import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, ChevronRight, ShieldCheck, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onScrollToSection }) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPast(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { label: "Accueil", target: "hero" },
    { label: "Fin de Chantier", target: "fin-de-chantier-spotlight" },
    { label: "Notre Processus", target: "processus" },
    { label: "Services & Travaux", target: "services" },
    { label: "Simulateur", target: "simulateur" },
    { label: "Contact", target: "contact" },
  ];

  const allDrawerNavItems = [
    { label: "Accueil", target: "hero" },
    { label: "Fin de Chantier & Remise en État", target: "fin-de-chantier-spotlight" },
    { label: "Notre Processus (4 étapes)", target: "processus" },
    { label: "Avant / Après Chantier", target: "avant-apres" },
    { label: "Services (Électricité, Plomberie, Maçonnerie, Déco)", target: "services" },
    { label: "Configuration Chantier & Devis Terrain", target: "simulateur" },
    { label: "Abonnements Mensuels", target: "abonnements" },
    { label: "Contact (WhatsApp & Appel Direct)", target: "contact" },
  ];

  const handleNavClick = (target: string) => {
    setMenuOpen(false);
    onScrollToSection(target);
  };

  const defaultWhatsAppText = encodeURIComponent("Bonjour SMS Pro Services ! Je souhaite des informations pour mon chantier / locaux à Conakry / sous-région.");

  return (
    <>
      {/* 1. MAIN TOP NAVBAR */}
      <header
        className={`absolute top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent w-full overflow-hidden ${
          isScrolledPast ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center group text-left cursor-pointer shrink-0"
            aria-label="Accueil SMS Pro"
          >
            {!imgError ? (
              <img
                src={BRAND_INFO.logoUrl}
                alt={BRAND_INFO.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-105 duration-200 filter brightness-110 contrast-125 drop-shadow-md"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-neutral-950 flex items-center justify-center font-black text-xl shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
            )}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
            {primaryNavItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-xs xl:text-sm font-semibold tracking-tight transition-colors hover:text-emerald-400 cursor-pointer whitespace-nowrap text-white/95 drop-shadow-sm py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Zone: WhatsApp & Appel Direct Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0 relative">
            
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${BRAND_INFO.phone1Clean}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Appel {BRAND_INFO.phone1}</span>
            </a>

            {/* Direct WhatsApp Popover Button */}
            <div className="relative">
              <button
                onClick={() => setShowContactDropdown(!showContactDropdown)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </button>

              {/* Dropdown for lines */}
              {showContactDropdown && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-neutral-900 border border-neutral-700 rounded-2xl p-3 shadow-2xl space-y-2 z-50 text-xs animate-fadeIn">
                  <div className="text-[11px] text-neutral-400 font-semibold px-2">WhatsApp ou Appel Direct :</div>
                  
                  {/* Ligne 1 */}
                  <div className="p-2 rounded-xl bg-neutral-800/90 border border-neutral-700 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-white">Ligne 1 : {BRAND_INFO.phone1}</span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Principale</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <a
                        href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1.5"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${BRAND_INFO.phone1Clean}`}
                        className="py-1.5 px-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white font-bold text-[11px] flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Appeler</span>
                      </a>
                    </div>
                  </div>

                  {/* Ligne 2 */}
                  <div className="p-2 rounded-xl bg-neutral-800/90 border border-neutral-700 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-white">Ligne 2 : {BRAND_INFO.phone2}</span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Permanence</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <a
                        href={`https://wa.me/${BRAND_INFO.whatsapp2Clean}?text=${defaultWhatsAppText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="py-1.5 px-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center gap-1.5"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${BRAND_INFO.phone2Clean}`}
                        className="py-1.5 px-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white font-bold text-[11px] flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Appeler</span>
                      </a>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-black bg-gradient-to-r from-emerald-400 to-teal-300 text-neutral-950 hover:brightness-110 hover:shadow-lg hover:shadow-emerald-400/25 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
              <span>Demander un Agent</span>
            </button>
          </div>

          {/* Mobile Quick Trigger (Appel + WhatsApp + Menu) */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href={`tel:${BRAND_INFO.phone1Clean}`}
              className="p-2 rounded-full bg-neutral-900/90 text-emerald-400 border border-neutral-700 shadow-md flex items-center justify-center"
              aria-label="Appel direct"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppText}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-md flex items-center justify-center"
              aria-label="WhatsApp direct"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-white/10 text-white backdrop-blur-md text-xs font-bold border border-white/15"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-4 h-4 text-emerald-400" />
              <span>Menu</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. FLOATING HAMBURGER MENU */}
      <aside
        aria-label="Menu de navigation flottant"
        className={`fixed top-4 right-4 sm:top-5 sm:right-6 z-50 transition-all duration-300 transform ${
          isScrolledPast
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 bg-neutral-950/90 backdrop-blur-xl border border-neutral-700/80 p-1.5 sm:p-2 rounded-full shadow-2xl hover:border-emerald-400/60 transition-all">
          
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 pl-2 pr-1 cursor-pointer group"
            title="Retour au haut de page"
          >
            <img
              src={BRAND_INFO.logoUrl}
              alt={BRAND_INFO.name}
              referrerPolicy="no-referrer"
              className="h-6 sm:h-8 w-auto object-contain brightness-125 group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Phone call quick */}
          <a
            href={`tel:${BRAND_INFO.phone1Clean}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold border border-neutral-700 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Appel</span>
          </a>

          {/* WhatsApp Direct with Official Logo */}
          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppText}`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold whitespace-nowrap shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Quick Booking */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 text-neutral-950 text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
          >
            <Calendar className="w-3 h-3" />
            <span>Demander un Agent</span>
          </button>

          {/* Floating Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs border border-neutral-700 hover:border-emerald-400 transition-all cursor-pointer group whitespace-nowrap"
            aria-label="Menu Hamburger"
          >
            <Menu className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Menu</span>
          </button>

        </div>
      </aside>

      {/* 3. FULL NAVIGATION DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-fadeIn">
          
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />

          <div className="relative w-full max-w-md bg-neutral-950 border-l border-neutral-800 text-white h-full flex flex-col justify-between p-6 sm:p-8 overflow-y-auto shadow-2xl animate-slideLeft z-10">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <img
                    src={BRAND_INFO.logoUrl}
                    alt={BRAND_INFO.name}
                    referrerPolicy="no-referrer"
                    className="h-10 w-auto object-contain brightness-125"
                  />
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Menu Navigation</span>
                    <span className="text-[11px] text-neutral-400">WhatsApp & Appel Direct 7j/7</span>
                  </div>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <nav className="space-y-1">
                {allDrawerNavItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => handleNavClick(item.target)}
                    className="w-full text-left p-3 rounded-2xl text-xs sm:text-sm font-bold text-neutral-200 hover:text-neutral-950 hover:bg-emerald-400 flex items-center justify-between transition-all group cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-950 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Numbers */}
            <div className="pt-5 border-t border-neutral-800 space-y-3.5">
              
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 block px-1">
                  Contact WhatsApp ou Appel Direct :
                </span>

                {/* Ligne 1 */}
                <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{BRAND_INFO.phone1}</span>
                    <span className="text-[10px] bg-emerald-400/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Ligne 1</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultWhatsAppText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${BRAND_INFO.phone1Clean}`}
                      className="py-2 px-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Appeler</span>
                    </a>
                  </div>
                </div>

                {/* Ligne 2 */}
                <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{BRAND_INFO.phone2}</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Ligne 2</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsapp2Clean}?text=${defaultWhatsAppText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${BRAND_INFO.phone2Clean}`}
                      className="py-2 px-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Appeler</span>
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 text-neutral-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-400/20 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-neutral-950" />
                <span>Demander le Passage d'un Agent</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Devis officiel établi après visite sur le terrain</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};
