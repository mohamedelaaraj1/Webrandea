import React from 'react';
import { Work } from '../types.ts';
import { ArrowLeft, CheckCircle2, Cpu, BarChart } from 'lucide-react';

interface WorkDetailProps {
  work: Work;
  onBack: () => void;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work, onBack }) => {
  return (
    <div className="min-h-screen bg-[#0f1115] pt-24 pb-12 animate-fadeIn">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-400 font-bold uppercase tracking-wider text-sm block mb-2">{work.client}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{work.title}</h1>
          </div>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
            {work.category}
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                  The Problem
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {work.challenge}
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-2 h-8 bg-brand-500 rounded-full mr-3"></span>
                  Our Strategy
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {work.solution}
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Service Execution</h2>
              <div className="space-y-6">
                {work.process.map((step, index) => (
                  <div key={index} className="flex group">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-8 h-8 rounded-full bg-brand-900/30 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold text-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                      {index !== work.process.length - 1 && <div className="w-0.5 flex-grow bg-white/10 my-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Results */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <BarChart className="w-5 h-5 mr-2 text-brand-400" /> Outcomes
              </h3>
              <ul className="space-y-4">
                {work.results.map((result, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methods */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-blue-400" /> Security Methods
              </h3>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-xs font-mono text-gray-300 hover:border-brand-500/50 hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkDetail;