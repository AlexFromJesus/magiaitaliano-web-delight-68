
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/lovable-uploads/3dd38e6c-dcdb-45b5-afe8-6fba6d7cd2ca.png')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-playfair animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Mangia<span className="italic">italiano</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Experimenta el auténtico sabor de Italia en el corazón de Las Palmas
        </p>
        <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white font-medium"
            onClick={() => {
              const reservationsSection = document.getElementById('reservations');
              if (reservationsSection) {
                reservationsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Reservar una Mesa
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/30 text-white hover:bg-white hover:text-restaurant-primary border-white font-medium"
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver Menú
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
