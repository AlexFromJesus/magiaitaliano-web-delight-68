
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-restaurant-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Our Story</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("animate-on-scroll")}
          >
            <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">A Taste of Italy in Las Palmas</h3>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              Welcome to Magiaitaliano, where passion for authentic Italian cuisine meets the vibrant atmosphere of Las Palmas de Gran Canaria. Our journey began in 2010 when Chef Marco Rossi decided to bring the cherished recipes of his Italian grandmother to the beautiful Canary Islands.
            </p>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              What started as a small family restaurant has grown into a culinary destination where locals and tourists alike come to experience the true flavors of Italy, prepared with love and the finest ingredients.
            </p>
            <p className="text-restaurant-dark leading-relaxed">
              Every dish tells a story of tradition, passion, and the rich culinary heritage of Italy. From our homemade pasta to our wood-fired pizzas, each bite is a journey through the diverse regions of Italy.
            </p>
          </div>
          
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("relative h-96 md:h-[500px] animate-on-scroll")}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
                alt="Chef preparing Italian dish" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-40">
              <div className="w-full h-full bg-restaurant-primary rounded-lg p-6 text-white">
                <p className="font-playfair italic text-lg">"In our kitchen, we don't just cook food. We create memories."</p>
                <p className="mt-2 text-sm">— Chef Marco Rossi</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("bg-white p-8 rounded-lg shadow-md animate-on-scroll text-center hover-scale")}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-restaurant-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-restaurant-dark mb-4 font-playfair">Fresh Ingredients</h4>
            <p className="text-restaurant-dark">We source the freshest and highest quality ingredients, many imported directly from Italy, to ensure authentic flavors in every dish.</p>
          </div>
          
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("bg-white p-8 rounded-lg shadow-md animate-on-scroll text-center hover-scale")}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-restaurant-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-restaurant-dark mb-4 font-playfair">Traditional Recipes</h4>
            <p className="text-restaurant-dark">Our dishes are prepared following time-honored Italian recipes, some passed down through generations of the Rossi family.</p>
          </div>
          
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("bg-white p-8 rounded-lg shadow-md animate-on-scroll text-center hover-scale")}
            style={{ animationDelay: '0.7s' }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-restaurant-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-restaurant-dark mb-4 font-playfair">Warm Atmosphere</h4>
            <p className="text-restaurant-dark">We've created a welcoming environment where you can enjoy delicious food with family and friends in true Italian style.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
