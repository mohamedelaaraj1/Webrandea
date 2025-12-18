
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ServicesGrid from './components/GamesGrid.tsx'; 
import Features from './components/Features.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';
import ServiceDetail from './components/ServiceDetail.tsx';
import Works from './components/Works.tsx';
import WorkDetail from './components/WorkDetail.tsx';
import { Service, Work } from './types.ts';

type View = 'home' | 'works';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleHome = () => {
    setSelectedService(null);
    setSelectedWork(null);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const handleWorks = () => {
    setSelectedService(null);
    setSelectedWork(null);
    setCurrentView('works');
    window.scrollTo(0, 0);
  };

  const handleSelectService = (service: Service) => {
    setSelectedWork(null);
    setSelectedService(service);
    window.scrollTo(0, 0);
  };

  const handleSelectWork = (work: Work) => {
    setSelectedService(null);
    setSelectedWork(work);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (selectedService) {
      return <ServiceDetail service={selectedService} />;
    }

    if (selectedWork) {
      return <WorkDetail work={selectedWork} onBack={handleWorks} />;
    }

    if (currentView === 'works') {
      return <Works onSelectWork={handleSelectWork} />;
    }

    // Default Home View
    return (
      <>
        <Hero />
        <ServicesGrid onSelectService={handleSelectService} />
        <Features />
        <Testimonials />
        <FAQ />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white selection:bg-brand-500 selection:text-white font-sans flex flex-col">
      <Navbar 
        onSelectService={handleSelectService} 
        onHome={handleHome} 
        onWorks={handleWorks} 
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
