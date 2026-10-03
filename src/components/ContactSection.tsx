import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle2, Headphones } from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'fin-de-chantier',
    zone: 'Conakry - Ratoma (Kipé, Lambanyi, Nongo...)',
    address: '',
    surface: '120',
    date: '',
    message: ''
  });

  const [selectedWhatsAppLine, setSelectedWhatsAppLine] = useState<'1' | '2'>('1');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetNumber = selectedWhatsAppLine === '1' ? BRAND_INFO.whatsapp1Clean : BRAND_INFO.whatsapp2Clean;
    const selectedServiceObj = SERVICES_LIST.find(s => s.id === formData.service);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.service;

    const messageText = `*Bonjour SMS Pro Services (Conakry)* !%0A%0AJe souhaite demander l'envoi d'un agent sur le terrain pour un devis :%0A- *Nom* : ${encodeURIComponent(formData.name)}%0A- *Mon Numéro* : ${encodeURIComponent(formData.phone)}%0A- *Prestation* : ${encodeURIComponent(serviceName)}%0A- *Zone du chantier* : ${encodeURIComponent(formData.zone)}%0A- *Superficie estimée* : ${formData.surface} m²%0A- *Date souhaitée pour le passage de l'agent* : ${encodeURIComponent(formData.date || 'Dès que possible')}%0A- *Détails / État du chantier* : ${encodeURIComponent(formData.message || 'Maison / locaux après travaux')}%0A%0AMerci de m'envoyer un agent pour constater et lancer les travaux dès validation.`;

    window.open(`https://wa.me/${targetNumber}?text=${messageText}`, '_blank');
  };

  const defaultMsg1 = encodeURIComponent("Bonjour SMS Pro Services ! Je vous contacte pour un devis de fin de chantier / travaux à Conakry / sous-région.");

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-900 text-white relative overflow-hidden scroll-mt-12">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Call & WhatsApp Coordinates */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold uppercase tracking-wider border border-lime-400/20">
                <Headphones className="w-3.5 h-3.5" />
                <span>Contact par WhatsApp ou Appel Direct</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Joignez Nos Équipes 7j / 7
              </h2>

              <p className="text-neutral-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                Chez <strong>SMS Nettoyage & Multi-Services</strong>, vous pouvez nous joindre indifféremment par <strong>WhatsApp</strong> (envoi de photos, détails) ou par <strong>Appel Téléphonique Direct</strong>.
              </p>
            </div>

            {/* Direct Lines Cards */}
            <div className="space-y-4 pt-1">
              
              {/* Line 1 Card */}
              <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-lime-400 font-bold uppercase tracking-wider">Ligne 1 (Principale)</span>
                  </div>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-semibold">Disponible 7j/7</span>
                </div>

                <div className="text-lg font-black text-white">{BRAND_INFO.phone1}</div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp1Clean}?text=${defaultMsg1}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BRAND_INFO.phone1Clean}`}
                    className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs border border-neutral-700 flex items-center justify-center gap-2 transition-all hover:border-lime-400"
                  >
                    <Phone className="w-4 h-4 text-lime-400" />
                    <span>Appel Direct</span>
                  </a>
                </div>
              </div>

              {/* Line 2 Card */}
              <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Ligne 2 (Permanence)</span>
                  </div>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-semibold">Disponible 7j/7</span>
                </div>

                <div className="text-lg font-black text-white">{BRAND_INFO.phone2}</div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp2Clean}?text=${defaultMsg1}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BRAND_INFO.phone2Clean}`}
                    className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs border border-neutral-700 flex items-center justify-center gap-2 transition-all hover:border-lime-400"
                  >
                    <Phone className="w-4 h-4 text-lime-400" />
                    <span>Appel Direct</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Siège & Déplacements</div>
                  <div className="text-xs sm:text-sm font-bold text-white">{BRAND_INFO.locationCity}</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">{BRAND_INFO.regionCoverage}</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-3xl p-5 sm:p-8 lg:p-10 border border-neutral-800 shadow-2xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  <span>Préparer ma Demande d'Agent</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Remplissez ce formulaire : un message pré-rempli s'ouvrira directement sur WhatsApp, ou appelez-nous directement.
                </p>
              </div>

              {/* Choose WhatsApp Destination */}
              <div className="p-3 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-2">
                <label className="text-xs font-bold text-neutral-300 block">
                  Sélectionnez le numéro destinataire :
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedWhatsAppLine('1')}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      selectedWhatsAppLine === '1'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Ligne 1 ({BRAND_INFO.phone1})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedWhatsAppLine('2')}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      selectedWhatsAppLine === '2'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Ligne 2 ({BRAND_INFO.phone2})</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Votre Nom Complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Diallo Mohamadou"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Votre Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: +224 621 90 39 96"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Prestation concernée</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                  >
                    {SERVICES_LIST.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="pack-complet">Pack Tout-en-Un (Nettoyage + Plomberie + Maçonnerie)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Localisation du chantier</label>
                  <select
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                  >
                    <option value="Conakry - Ratoma">Conakry - Ratoma (Kipé, Lambanyi, Nongo, Taouyah...)</option>
                    <option value="Conakry - Dixinn">Conakry - Dixinn (Landréah, Camayenne, Minière...)</option>
                    <option value="Conakry - Kaloum">Conakry - Kaloum (Centre-ville administratif)</option>
                    <option value="Conakry - Matoto">Conakry - Matoto (Yimbaya, Sangoyah, Kissosso...)</option>
                    <option value="Conakry - Matam">Conakry - Matam (Madina, Bonfi...)</option>
                    <option value="Grand Conakry - Dubréka/Coyah">Grand Conakry (Kagbélen, Dubréka, Coyah)</option>
                    <option value="Intérieur Guinée">Intérieur de la Guinée (Kindia, Boké, Kankan, Labé...)</option>
                    <option value="Sous-Région">Sous-Région (Sénégal, Mali, Côte d'Ivoire, Sierra Leone...)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Superficie estimée (m²)</label>
                  <input
                    type="number"
                    placeholder="Ex: 150"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Date souhaitée pour la visite</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Remarques ou photos à envoyer</label>
                <textarea
                  rows={2}
                  placeholder="Ex: Maison neuve avec carrelage à décaper, traces de plâtre et baies vitrées..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-98 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Envoyer sur WhatsApp</span>
                </button>

                <a
                  href={`tel:${selectedWhatsAppLine === '1' ? BRAND_INFO.phone1Clean : BRAND_INFO.phone2Clean}`}
                  className="w-full py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-neutral-700 active:scale-98 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-lime-400" />
                  <span>Appeler Directement</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-neutral-500 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                <span>Nos équipes vous répondent immédiatement 7j/7.</span>
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
