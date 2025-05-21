
import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-restaurant-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Mangia<span className="italic">italiano</span></h3>
            <p className="mb-4 text-gray-300">
              Experimenta el auténtico sabor de Italia en el corazón de Las Palmas de Gran Canaria. Estamos dedicados a llevar la magia de la cocina italiana a tu mesa.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-restaurant-primary/20 flex items-center justify-center hover:bg-restaurant-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-restaurant-primary/20 flex items-center justify-center hover:bg-restaurant-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@mangiaitaliano.com" 
                className="h-10 w-10 rounded-full bg-restaurant-primary/20 flex items-center justify-center hover:bg-restaurant-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 font-playfair">Horario de Apertura</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Lunes - Viernes</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sábado</span>
                <span>12:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Domingo</span>
                <span>12:00 - 00:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 font-playfair">Información de Contacto</h4>
            <ul className="space-y-3">
              <li>
                <span className="block text-gray-300">Dirección</span>
                <span>Calle León y Castillo, 26-28</span>
                <span className="block">35003 Las Palmas de Gran Canaria</span>
              </li>
              <li>
                <span className="block text-gray-300">Teléfono</span>
                <a href="tel:+34928123456" className="hover:text-restaurant-primary">+34 928 123 456</a>
              </li>
              <li>
                <span className="block text-gray-300">Email</span>
                <a href="mailto:info@mangiaitaliano.com" className="hover:text-restaurant-primary">info@mangiaitaliano.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Mangiaitaliano. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
            <a href="#" className="hover:text-white">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
