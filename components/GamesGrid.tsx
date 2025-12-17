import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface ServicesGridProps {
  onSelectService: (service: Service) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-dark-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive digital solutions to build, market, and scale your business. Click on a service to see our process and pricing.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SERVICES.map((service) => (
                    <div 
                        key={service.id} 
                        onClick={() => onSelectService(service)}
                        className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
                    >
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-90 z-10" />
                        
                        <div className="h-40 overflow-hidden relative">
                            <img 
                                src={service.image} 
                                alt={service.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 z-20">
                                <div className="bg-dark-card/80 backdrop-blur-md p-2 rounded-lg text-white">
                                    <service.icon className={`w-5 h-5 ${service.color}`} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-6 relative z-20 flex-1 flex flex-col justify-end">
                            {service.popular && (
                                <span className="inline-block self-start px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold bg-brand-600 text-white mb-2">
                                    Best Seller
                                </span>
                            )}
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">{service.name}</h3>
                                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">{service.shortDescription}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-xs font-medium text-brand-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                View Packages <ArrowUpRight className="w-3 h-3 ml-1" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ServicesGrid;
