
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
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Nuestra Historia</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("animate-on-scroll")}
          >
            <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">Un Sabor de Italia en Las Palmas</h3>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              Bienvenido a Mangiaitaliano, donde la pasión por la auténtica cocina italiana se encuentra con el ambiente vibrante de Las Palmas de Gran Canaria. Nuestro viaje comenzó en 2010 cuando el Chef Marco Rossi decidió traer las apreciadas recetas de su abuela italiana a las hermosas Islas Canarias.
            </p>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              Lo que comenzó como un pequeño restaurante familiar se ha convertido en un destino culinario donde tanto los locales como los turistas vienen a experimentar los verdaderos sabores de Italia, preparados con amor y los mejores ingredientes.
            </p>
            <p className="text-restaurant-dark leading-relaxed">
              Cada plato cuenta una historia de tradición, pasión y el rico patrimonio culinario de Italia. Desde nuestra pasta casera hasta nuestras pizzas hechas en horno de leña, cada bocado es un viaje a través de las diversas regiones de Italia.
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
                alt="Chef preparando plato italiano" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-40">
              <div className="w-full h-full bg-restaurant-primary rounded-lg p-6 text-white">
                <p className="font-playfair italic text-lg">"En nuestra cocina, no solo cocinamos comida. Creamos recuerdos."</p>
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
            <h4 className="text-xl font-semibold text-restaurant-dark mb-4 font-playfair">Ingredientes Frescos</h4>
            <p className="text-restaurant-dark">Obtenemos los ingredientes más frescos y de la más alta calidad, muchos importados directamente de Italia, para garantizar sabores auténticos en cada plato.</p>
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
            <h4 className="text-xl font-semibold text-restaurant-dark mb-4 font-playfair">Recetas Tradicionales</h4>
            <p className="text-restaurant-dark">Nuestros platos se preparan siguiendo recetas italianas tradicionales, algunas transmitidas a través de generaciones de la familia Rossi.</p>
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
            <h4 className="text-xl font-semibold text-restaurant-dark mb-4 font-playfair">Ambiente Acogedor</h4>
            <p className="text-restaurant-dark">Hemos creado un entorno acogedor donde puedes disfrutar de deliciosa comida con familia y amigos al verdadero estilo italiano.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
