import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Webrandea?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide the most secure, fast, and reliable service in the industry. Here is what sets us apart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-brand-500/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-900/30 flex items-center justify-center mb-6 text-brand-400">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
