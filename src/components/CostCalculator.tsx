import React, { useState } from 'react';
import { CheckCircle2, Clock, Users, MapPin, UserCheck, ShieldCheck, Phone } from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST } from '../data/servicesData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface CostCalculatorProps {
  initialServiceId?: string;
  onOpenBookingWithQuote?: (quoteData: any) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ initialServiceId = 'fin-de-chantier', onOpenBookingWithQuote }) => {
  const [serviceId, setServiceId] = useState(initialServiceId);
  const [surfaceArea, setSurfaceArea] = useState<number>(120);
  const [propertyType, setPropertyType] = useState<'villa' | 'appartement' | 'bureau' | 'commerce'>('villa');
  const [urgency, setUrgency] = useState<'standard' | 'express_24h' | 'weekend'>('standard');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'decapage_ciment',
    'vitres_baies'
  ]);

  // Available technical options
  const optionsList = [
    { id: 'decapage_ciment', label: 'Décapage intensif traces de ciment, plâtre & colle', note: 'Monobrosse haute pression' },
    { id: 'electricite_eclairage', label: 'Vérification électricité, luminaires & tableau électrique', note: 'Électriciens certifiés' },
    { id: 'vitres_baies', label: 'Grattage & brillance des vitrages et baies vitrées', note: 'Grattoir vitrier & dégraissant' },
    { id: 'plomberie_sanitaires', label: 'Contrôle alimentation en eau & raccordement sanitaires', note: 'Plombiers qualifiés' },
    { id: 'lustrage_marbre', label: 'Lustrage & traitement protecteur carrelage/marbre', note: 'Cristallisation & brillance' },
    { id: 'evacuation_gravats', label: 'Évacuation des petits gravats et déchets résiduels', note: 'Mise en sacs & évacuation' },
  ];

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const estimatedHours = Math.max(4, Math.round(surfaceArea / 25));
  const teamSize = surfaceArea > 250 ? 5 : surfaceArea > 120 ? 3 : 2;

  const selectedService = SERVICES_LIST.find(s => s.id === serviceId) || SERVICES_LIST[0];

  const handleSendToWhatsApp = (phoneTarget: '1' | '2') => {
    const targetNumber = phoneTarget === '1' ? BRAND_INFO.whatsapp1Clean : BRAND_INFO.whatsapp2Clean;
    const optionsLabels = selectedOptions.map(id => optionsList.find(o => o.id === id)?.label).filter(Boolean).join(', ');

    const text = `*Bonjour SMS Pro Services (Conakry)* !%0A%0AJe souhaite l'envoi d'un agent sur le terrain pour évaluer et établir le devis :%0A- *Prestation* : ${encodeURIComponent(selectedService.title)}%0A- *Surface* : ${surfaceArea} m²%0A- *Type de bâtiment* : ${encodeURIComponent(propertyType)}%0A- *Spécificités* : ${encodeURIComponent(optionsLabels || 'Standard')}%0A- *Délai souhaité* : ${encodeURIComponent(urgency)}%0A%0AMerci de convenir avec moi de la date du passage de l'agent sur les lieux.`;

    window.open(`https://wa.me/${targetNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="simulateur" className="py-20 sm:py-28 bg-neutral-50 border-b border-neutral-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cahier des Charges & Devis sur le Terrain</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Configurez Vos Besoins &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
              Demandez un Agent
            </span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base lg:text-lg">
            Indiquez la superficie et les spécificités de votre chantier. <strong>Chez SMS Pro, le tarif officiel est établi par notre agent technique après constat direct sur votre terrain</strong>.
          </p>
        </div>

        {/* Technical Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 border border-neutral-200 shadow-sm space-y-6 sm:space-y-7">
            
            {/* 1. Service Selector */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-bold text-neutral-900 flex items-center justify-between">
                <span>1. Type de prestation recherchée</span>
                <span className="text-xs text-emerald-700 font-semibold">{selectedService.title}</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICES_LIST.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setServiceId(service.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      serviceId === service.id
                        ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20'
                        : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-neutral-900">{service.title}</div>
                    <div className="text-[11px] text-neutral-500 mt-1 line-clamp-1">{service.shortDesc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Surface Slider */}
            <div className="space-y-4 pt-2 border-t border-neutral-100">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-neutral-900">
                  2. Superficie estimée du chantier / local
                </label>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 font-extrabold text-sm rounded-xl">
                  <span>{surfaceArea}</span>
                  <span className="text-xs font-normal">m²</span>
                </div>
              </div>

              <input
                type="range"
                min="30"
                max="600"
                step="5"
                value={surfaceArea}
                onChange={(e) => setSurfaceArea(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 font-medium">
                <span>30 m²</span>
                <span>150 m² (Villa)</span>
                <span>300 m² (Bureaux)</span>
                <span>600+ m²</span>
              </div>
            </div>

            {/* 3. Property Type */}
            <div className="space-y-3 pt-2 border-t border-neutral-100">
              <label className="text-xs sm:text-sm font-bold text-neutral-900">
                3. Nature de la bâtisse
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'villa', label: 'Villa / Maison' },
                  { id: 'appartement', label: 'Appartement' },
                  { id: 'bureau', label: 'Bureaux / Siège' },
                  { id: 'commerce', label: 'Commerce' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`py-2.5 px-2 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      propertyType === item.id
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Options */}
            <div className="space-y-3 pt-2 border-t border-neutral-100">
              <label className="text-xs sm:text-sm font-bold text-neutral-900">
                4. Besoins spécifiques de décapage, électricité & matériel
              </label>

              <div className="space-y-2">
                {optionsList.map((opt) => {
                  const isChecked = selectedOptions.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-50/50 text-neutral-900 font-medium'
                          : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-emerald-600 text-white' : 'border border-neutral-300'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <span>{opt.label}</span>
                          <span className="block text-[10px] text-neutral-400">{opt.note}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 5. Urgency */}
            <div className="space-y-3 pt-2 border-t border-neutral-100">
              <label className="text-xs sm:text-sm font-bold text-neutral-900">
                5. Délai d'intervention souhaité
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Sous 48h - 72h', note: 'Standard' },
                  { id: 'express_24h', label: 'Urgence Express (24h)', note: 'Astreinte rapide' },
                  { id: 'weekend', label: 'Samedi / Dimanche', note: 'Intervention week-end' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      urgency === item.id
                        ? 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-sm'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-75">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Technical Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Cahier des Charges</span>
                  <h3 className="text-lg font-bold text-white">Évaluation Technique</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  Visite de constat gratuite
                </div>
              </div>

              {/* On-Site Quote Highlight Badge */}
              <div className="bg-neutral-950/80 rounded-2xl p-5 border border-neutral-800/80 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">Devis Officiel</span>
                <div className="text-lg sm:text-xl font-bold text-emerald-300">
                  Établi après constat sur le terrain
                </div>
                <p className="text-[11px] text-neutral-400">
                  Notre agent se déplace pour mesurer, constater l'état des sols et vous remettre le tarif officiel.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-neutral-800/70 border border-neutral-700/60 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Temps d'Intervention</span>
                    <span className="font-bold text-white">~ {estimatedHours} Heures</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-800/70 border border-neutral-700/60 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-neutral-400 block text-[10px]">Équipe Déployée</span>
                    <span className="font-bold text-white">{teamSize} Techniciens</span>
                  </div>
                </div>
              </div>

              {/* Steps reminder */}
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 space-y-1.5">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Procédure SMS Pro :</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  1. Contact par WhatsApp ou appel → 2. Un agent vient constater sur votre terrain à Conakry / sous-région → 3. Devis final remis → 4. Démarrage immédiat des travaux.
                </p>
              </div>

              {/* Action Buttons to WhatsApp & Appel Direct */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs text-neutral-300 font-bold">
                  Transmettre vos besoins ou appeler :
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSendToWhatsApp('1')}
                    className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                    title="WhatsApp Ligne 1"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${BRAND_INFO.phone1Clean}`}
                    className="py-3 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-neutral-700 hover:border-emerald-400"
                    title="Appel Ligne 1"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Appel Direct</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Interventions garanties 100% satisfait</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
