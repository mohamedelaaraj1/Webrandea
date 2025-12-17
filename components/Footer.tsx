import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-black tracking-tighter text-white mb-6 block">
              WEBRAND<span className="text-brand-500">EA</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The premier destination for gaming services. We help you achieve your goals with speed, security, and professionalism.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-brand-600 transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">League of Legends</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Valorant Boosting</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">WoW Carries</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">TFT Boosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Work With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Webrandea. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-gray-600 text-xs">
            <span>Secure 256-bit SSL Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
