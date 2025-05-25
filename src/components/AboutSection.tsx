
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
              En Mangiaitaliano, ubicado en el corazón de Las Palmas de Gran Canaria, nos dedicamos a traer los sabores auténticos de Italia a nuestra comunidad. Nuestro menú presenta una amplia variedad de cocinas regionales italianas, con especialidades de Nápoles, Roma, Toscana y Sicilia.
            </p>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              Nos enorgullece ofrecer una variedad de platos aptos para vegetarianos y veganos, asegurando que cada comensal encuentre algo que le encante.
            </p>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              Nuestro ambiente acogedor y familiar, junto con un servicio atento, crean el entorno perfecto para disfrutar de una comida en buena compañía.
            </p>
            <p className="text-restaurant-dark mb-6 leading-relaxed">
              Ya sea que tengas antojo de una clásica spaghetti alla carbonara, una pizza al horno de leña o un reconfortante plato de gnocchi alla sorrentina, encontrarás sabores que te transportarán directamente a Italia.
            </p>
            <p className="text-restaurant-dark leading-relaxed">
              Únete a nosotros en Mangiaitaliano, donde cada plato es una celebración de la tradición culinaria italiana.
            </p>
          </div>
          
          <div 
            ref={(el) => el && sectionsRef.current.push(el)}
            className={cn("relative h-96 md:h-[500px] animate-on-scroll")}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/94a19ffc-1deb-490d-9769-3de75d4e4e7f.png" 
                alt="Exterior del restaurante Mangiaitaliano" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-40">
              <div className="w-full h-full bg-restaurant-primary rounded-lg p-6 text-white">
                <p className="font-playfair italic text-lg">"Cada plato cuenta una historia. La nuestra es la de tradición, sabor y hospitalidad italiana."</p>
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
            <p className="text-restaurant-dark">Nuestros platos se preparan siguiendo recetas italianas tradicionales, algunas transmitidas a través de generaciones de familias italianas.</p>
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
