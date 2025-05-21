
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto contigo lo antes posible. ¡Gracias!",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Contáctanos</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres ponerte en contacto? ¡Nos encantaría saber de ti!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">Ponte en Contacto</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Tu correo electrónico" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Asunto del mensaje" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Tu mensaje" rows={5} required />
                </div>
                
                <Button type="submit" className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">Información</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Dirección</h4>
                    <p className="text-restaurant-dark/70">Calle León y Castillo, 26-28<br />35003 Las Palmas de Gran Canaria<br />España</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Teléfono</h4>
                    <p className="text-restaurant-dark/70">
                      <a href="tel:+34928123456" className="hover:text-restaurant-primary">+34 928 123 456</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-restaurant-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium text-restaurant-dark">Email</h4>
                    <p className="text-restaurant-dark/70">
                      <a href="mailto:info@mangiaitaliano.com" className="hover:text-restaurant-primary">info@mangiaitaliano.com</a>
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
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-restaurant-primary mb-6 font-playfair">Ubicación</h3>
              
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.008871909821!2d-15.43331582396563!3d28.11380627570428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095850654c815%3A0x2490a7b165d63a3e!2sC.%20Le%C3%B3n%20y%20Castillo%2C%2026%2C%2035003%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas%2C%20Spain!5e0!3m2!1sen!2sus!4v1654863456789!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Restaurante"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
