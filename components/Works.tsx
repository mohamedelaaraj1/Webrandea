
import React from 'react';
import { WORKS } from '../constants.ts';
import { Work } from '../types.ts';
import { ArrowRight, Layers } from 'lucide-react';

interface WorksProps {
  onSelectWork: (work: Work) => void;
}

const Works: React.FC<WorksProps> = ({ onSelectWork }) => {
  return (
    <div className="min-h-screen bg-[#0f1115] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-900/30 border border-brand-500/30 rounded-full px-3 py-1 mb-6">
            <Layers className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-bold text-brand-400 uppercase">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Selected Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore how we've helped ambitious brands transform their digital presence with cutting-edge design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.map((work) => (
            <div 
              key={work.id} 
              onClick={() => onSelectWork(work)}
              className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden cursor-pointer hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b21] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold text-brand-400 uppercase bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                    {work.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {work.shortDescription}
                </p>
                <div className="flex items-center text-sm font-medium text-white group-hover:text-brand-400 transition-colors">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Works;
