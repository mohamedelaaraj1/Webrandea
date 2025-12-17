import React, { useState } from 'react';
import { Service, ServicePackage } from '../types';
import { Check, ChevronDown, ChevronUp, Flag, Shield, Send, MessageCircle, X } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'advanced' | 'pro'>('advanced');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We received your request for the ${service.name} (${selectedPackage} package). We will contact you at ${formData.email} shortly.`);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const PackageCard = ({ type, pkg }: { type: 'basic' | 'advanced' | 'pro'; pkg: ServicePackage }) => (
    <div 
      onClick={() => setSelectedPackage(type)}
      className={`relative p-6 rounded-2xl border transition-all cursor-pointer flex flex-col h-full ${
        selectedPackage === type 
          ? 'bg-brand-900/10 border-brand-500 shadow-xl shadow-brand-500/10 scale-105 z-10' 
          : 'bg-dark-card border-dark-border hover:border-brand-500/30 opacity-80 hover:opacity-100'
      }`}
    >
      {type === 'advanced' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Recommended
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-wide">{pkg.name}</h3>
        <p className="text-3xl font-black text-white mt-2">{pkg.price}</p>
        <p className="text-gray-400 text-sm mt-1">{pkg.description}</p>
      </div>
      <div className="space-y-3 flex-1 mb-6">
        {pkg.features.map((feat, i) => (
          <div key={i} className="flex items-start">
            <Check className="w-4 h-4 text-brand-400 mt-1 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-300">{feat}</span>
          </div>
        ))}
      </div>
      <div className={`w-full py-2 rounded-lg text-center font-bold text-sm transition-colors ${
        selectedPackage === type ? 'bg-brand-600 text-white' : 'bg-white/5 text-gray-300'
      }`}>
        Select Plan
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f1115] pt-24 pb-12 animate-fadeIn relative">
      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-dark-card border border-white/10 w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-scaleUp">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
              <p className="text-gray-400 text-sm">Fill out the form below to get a custom quote for <span className="text-brand-400 font-semibold">{service.name}</span>.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#0f1115] border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Business Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-[#0f1115] border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  placeholder="jane@growth.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tell us about your project</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-[#0f1115] border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                  placeholder="What are your goals and timeline?"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center group"
              >
                Send Request <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <div className="inline-flex items-center space-x-2 bg-brand-900/30 border border-brand-500/30 rounded-full px-3 py-1 mb-6">
                    <service.icon className={`w-4 h-4 ${service.color}`} />
                    <span className={`text-xs font-bold ${service.color} uppercase`}>Premium Service</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    {service.name}
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {service.fullDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Us
                  </button>
                  <a 
                    href="#pricing"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center"
                  >
                    View Pricing
                  </a>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-green-400" />
                        Money-back Guarantee
                    </div>
                    <div className="flex items-center">
                        <Flag className="w-4 h-4 mr-2 text-blue-400" />
                        Verified Experts
                    </div>
                </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent opacity-60"></div>
            </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step) => (
                    <div key={step.step} className="bg-dark-card border border-dark-border p-6 rounded-xl relative">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
                            {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Pricing */}
        <div className="mb-20" id="pricing">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Simple Pricing</h2>
            <p className="text-gray-400 text-center mb-10">Choose the package that fits your stage of growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <PackageCard type="basic" pkg={service.packages.basic} />
                <PackageCard type="advanced" pkg={service.packages.advanced} />
                <PackageCard type="pro" pkg={service.packages.pro} />
            </div>
        </div>

        {/* FAQ & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* FAQ */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {service.faq.map((item, index) => (
                        <div key={index} className="border border-dark-border rounded-xl bg-dark-card overflow-hidden">
                            <button
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <span className="font-medium text-white">{item.question}</span>
                                {openFaq === index ? <ChevronUp className="w-4 h-4 text-brand-400" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-6 text-gray-400 text-sm animate-fadeIn">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* In-page Contact Form */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Get Started Now</h2>
                <p className="text-gray-400 text-sm mb-6">You selected the <span className="text-brand-400 font-bold">{selectedPackage.toUpperCase()}</span> package.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                        <input 
                            type="text" 
                            required
                            className="w-full bg-[#0f1115] border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Business Email</label>
                        <input 
                            type="email" 
                            required
                            className="w-full bg-[#0f1115] border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Project Details</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-[#0f1115] border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                            placeholder="Tell us a bit about your goals..."
                            value={formData.message}
                            onChange={e => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center group"
                    >
                        Request Consultation <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        By submitting, you agree to our Terms. No payment required yet.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;