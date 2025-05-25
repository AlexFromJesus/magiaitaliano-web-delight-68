
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Users, MapPin } from 'lucide-react';

const ReservationSection: React.FC = () => {
  return (
    <section id="reservations" className="py-20 bg-restaurant-accent/5 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Reserva Tu Mesa</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            Llámanos para reservar tu mesa en Mangiaitaliano y disfruta de una experiencia gastronómica auténticamente italiana.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-restaurant-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-restaurant-dark">Teléfono de Reservas</h3>
                    <p className="text-restaurant-dark/70">828 90 38 19</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-restaurant-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-restaurant-dark">Horario de Atención</h3>
                    <p className="text-restaurant-dark/70">Lunes - Domingo: 12:00 - 23:00</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-restaurant-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-restaurant-dark">Grupos Grandes</h3>
                    <p className="text-restaurant-dark/70">Para grupos de 8+ personas, por favor llama con anticipación</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-restaurant-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-restaurant-dark">Ubicación</h3>
                    <p className="text-restaurant-dark/70">C. León y Castillo, 26, Las Palmas</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center text-center space-y-6">
                <h3 className="text-2xl font-semibold text-restaurant-dark font-playfair">
                  ¡Reserva Ahora!
                </h3>
                <p className="text-restaurant-dark/70">
                  Nuestro equipo estará encantado de atenderte y asegurar que tengas la mejor mesa disponible.
                </p>
                <a 
                  href="tel:+34828903819"
                  className="inline-flex items-center justify-center bg-restaurant-primary hover:bg-restaurant-primary/90 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar: 828 90 38 19
                </a>
                <a 
                  href="mailto:mangiaitalianogc@gmail.com"
                  className="inline-flex items-center justify-center border border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white px-8 py-3 rounded-lg transition-colors font-medium"
                >
                  Enviar Email
                </a>
              </div>
            </div>
            
            <div className="border-t border-restaurant-accent/20 pt-6">
              <h4 className="font-semibold text-restaurant-dark mb-3">Política de Reservas:</h4>
              <ul className="text-sm text-restaurant-dark/70 space-y-2">
                <li>• Mantenemos las mesas reservadas durante 15 minutos después de la hora programada</li>
                <li>• Para cancelaciones, por favor llama con al menos 2 horas de anticipación</li>
                <li>• Grupos de más de 8 personas requieren confirmación especial</li>
                <li>• Recomendamos reservar con anticipación, especialmente los fines de semana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
