
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className={cn(
                'text-2xl font-bold font-playfair tracking-tight transition-colors',
                isScrolled ? 'text-restaurant-primary' : 'text-restaurant-light'
              )}>Magia<span className="italic">italiano</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-restaurant-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-restaurant-primary after:transition-all hover:after:w-full',
                  isScrolled ? 'text-restaurant-dark' : 'text-restaurant-light'
                )}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white"
              onClick={() => window.location.href = '#reservations'}
            >
              Reserve a Table
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-restaurant-primary',
                isScrolled ? 'text-restaurant-dark' : 'text-restaurant-light'
              )}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-restaurant-dark hover:bg-restaurant-accent hover:text-restaurant-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="w-full bg-restaurant-primary hover:bg-restaurant-primary/90 text-white mt-2"
              onClick={() => {
                window.location.href = '#reservations';
                setIsOpen(false);
              }}
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
