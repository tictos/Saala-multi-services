import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/servicesData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-lime-600" />
            <span>Questions Fréquentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Tout Ce Que Vous Devez Savoir Avant d'Intervenir
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Des réponses claires pour préparer au mieux la remise en état de votre bien.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-all bg-neutral-50/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-lime-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <div className={`p-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-lime-100 text-lime-800 border-lime-300' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
