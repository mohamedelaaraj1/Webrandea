import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-300">Rated 4.9/5 by 500+ Businesses</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Scale Your Digital Presence <br />
          <span className="gradient-text">With Webrandea</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          The all-in-one digital agency for modern brands. From high-fidelity SaaS prototypes and custom development to growth marketing and automation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#services" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center">
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center backdrop-blur-sm">
            Book Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-10">
          <div>
            <div className="text-3xl font-bold text-white">200+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-1">Projects Launched</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-1">Client Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">$10M+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-1">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mt-1">Support Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
