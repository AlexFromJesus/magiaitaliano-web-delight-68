
import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-restaurant-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Magia<span className="italic">italiano</span></h3>
            <p className="mb-4 text-gray-300">
              Experience the authentic taste of Italy in the heart of Las Palmas de Gran Canaria. We're dedicated to bringing the magic of Italian cuisine to your table.
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
                href="mailto:info@magiaitaliano.com" 
                className="h-10 w-10 rounded-full bg-restaurant-primary/20 flex items-center justify-center hover:bg-restaurant-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 font-playfair">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span>12:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span>12:00 PM - 12:00 AM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 font-playfair">Contact Information</h4>
            <ul className="space-y-3">
              <li>
                <span className="block text-gray-300">Address</span>
                <span>Calle León y Castillo, 26-28</span>
                <span className="block">35003 Las Palmas de Gran Canaria</span>
              </li>
              <li>
                <span className="block text-gray-300">Phone</span>
                <a href="tel:+34928123456" className="hover:text-restaurant-primary">+34 928 123 456</a>
              </li>
              <li>
                <span className="block text-gray-300">Email</span>
                <a href="mailto:info@magiaitaliano.com" className="hover:text-restaurant-primary">info@magiaitaliano.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Magiaitaliano. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
