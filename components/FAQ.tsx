
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants.ts';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#0a0c10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Have questions? We have answers. If you can't find what you're looking for, contact our 24/7 support.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="border border-dark-border rounded-xl bg-dark-card overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
