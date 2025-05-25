
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Contáctanos</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres hacer una reserva? ¡Nos encantaría saber de ti!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Dirección</h4>
                    <p className="text-restaurant-dark/70">C. León y Castillo, 26<br />35003 Las Palmas de Gran Canaria<br />Las Palmas, España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Teléfono</h4>
                    <p className="text-restaurant-dark/70">
                      <a href="tel:+34828903819" className="hover:text-restaurant-primary">828 90 38 19</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Email</h4>
                    <p className="text-restaurant-dark/70">
                      <a href="mailto:mangiaitalianogc@gmail.com" className="hover:text-restaurant-primary">mangiaitalianogc@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Horario de Apertura</h4>
                    <p className="text-restaurant-dark/70">Lunes - Viernes: 12:00 - 23:00<br />Sábado - Domingo: 12:00 - 00:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-restaurant-dark">¿Quieres hacer una reserva?</h4>
                <p className="text-restaurant-dark/70 mb-4">
                  Llámanos directamente para reservar tu mesa y garantizar la mejor experiencia gastronómica.
                </p>
                <a 
                  href="tel:+34828903819" 
                  className="inline-block bg-restaurant-primary text-white py-3 px-6 rounded-lg hover:bg-restaurant-primary/90 transition-colors font-medium"
                >
                  Llamar para Reservar
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">Ubicación</h3>
              
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.008871909821!2d-15.43331582396563!3d28.11380627570428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095850654c815%3A0x2490a7b165d63a3e!2sC.%20Le%C3%B3n%20y%20Castillo%2C%2026%2C%2035003%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas%2C%20Spain!5e0!3m2!1sen!2sus!4v1654863456789!5m2!1sen!2sus" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Restaurante"
                ></iframe>
              </div>
              
              <div className="mt-6 p-4 bg-restaurant-accent/10 rounded-lg">
                <p className="text-restaurant-dark/80 text-sm">
                  <strong>Cómo llegar:</strong> Estamos ubicados en el corazón de Las Palmas, cerca del Puerto de la Luz. 
                  Fácil acceso en transporte público y con parking disponible en la zona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
