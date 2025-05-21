
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Antipasti",
    items: [
      {
        name: "Bruschetta",
        description: "Pan tostado con tomates frescos, ajo, albahaca y aceite de oliva virgen extra",
        price: "€8.50",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png",
        popular: true
      },
      {
        name: "Carpaccio di Manzo",
        description: "Finas láminas de ternera cruda con rúcula, parmesano y reducción de balsámico",
        price: "€12.00",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png"
      },
      {
        name: "Mozzarella Caprese",
        description: "Mozzarella de búfala con tomates, albahaca y glaseado balsámico",
        price: "€10.50",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      },
      {
        name: "Arancini",
        description: "Bolas de arroz fritas rellenas de ragú, guisantes y mozzarella",
        price: "€9.50",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      }
    ]
  },
  {
    name: "Pasta",
    items: [
      {
        name: "Spaghetti alla Carbonara",
        description: "Espaguetis con panceta, huevos, queso pecorino y pimienta negra",
        price: "€14.50",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png",
        popular: true
      },
      {
        name: "Linguine al Frutti di Mare",
        description: "Linguine con mariscos variados en una ligera salsa de tomate",
        price: "€18.00",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      },
      {
        name: "Pappardelle al Ragù di Cinghiale",
        description: "Cintas anchas de pasta con ragú de jabalí y parmesano",
        price: "€16.50",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png"
      },
      {
        name: "Ravioli di Spinaci e Ricotta",
        description: "Raviolis caseros rellenos de espinacas y ricotta en salsa de mantequilla y salvia",
        price: "€15.00",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png",
        popular: true
      }
    ]
  },
  {
    name: "Pizze",
    items: [
      {
        name: "Margherita",
        description: "Salsa de tomate, mozzarella y albahaca fresca",
        price: "€12.00",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png",
        popular: true
      },
      {
        name: "Quattro Formaggi",
        description: "Mozzarella, gorgonzola, fontina y parmesano",
        price: "€14.50",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png"
      },
      {
        name: "Diavola",
        description: "Salsa de tomate, mozzarella, salami picante y hojuelas de chile",
        price: "€13.50",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      },
      {
        name: "Prosciutto e Funghi",
        description: "Salsa de tomate, mozzarella, jamón y champiñones",
        price: "€14.00",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      }
    ]
  },
  {
    name: "Secondi",
    items: [
      {
        name: "Ossobuco alla Milanese",
        description: "Osobuco de ternera estofado con verduras, vino blanco y caldo, servido con risotto de azafrán",
        price: "€22.00",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      },
      {
        name: "Branzino al Forno",
        description: "Lubina al horno con hierbas, limón y patatas asadas",
        price: "€24.50",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png",
        popular: true
      },
      {
        name: "Saltimbocca alla Romana",
        description: "Filetes de ternera con prosciutto y salvia, salteados en vino blanco",
        price: "€20.00",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png"
      },
      {
        name: "Pollo al Marsala",
        description: "Pechuga de pollo salteada con champiñones en salsa de vino Marsala",
        price: "€18.50",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png"
      }
    ]
  },
  {
    name: "Dolci",
    items: [
      {
        name: "Tiramisu",
        description: "Capas de bizcochos empapados en café y crema de mascarpone",
        price: "€8.00",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png",
        popular: true
      },
      {
        name: "Panna Cotta",
        description: "Crema de vainilla con coulis de frutos rojos",
        price: "€7.50",
        image: "/lovable-uploads/04eccf24-3f5f-4664-b072-3ca815a6df41.png"
      },
      {
        name: "Cannoli Siciliani",
        description: "Tubos crujientes de masa rellenos de ricotta endulzada y chips de chocolate",
        price: "€7.00",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png"
      },
      {
        name: "Gelato Artigianale",
        description: "Selección de helados caseros (pregunte por los sabores del día)",
        price: "€6.50",
        image: "/lovable-uploads/96ab9dfb-7d56-41b2-b445-a948adcbd0ee.png",
        popular: true
      }
    ]
  }
];

const MenuSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Nuestro Menú</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            Descubre nuestra selección de auténticos platos italianos, hechos con amor y los mejores ingredientes.
          </p>
        </div>
        
        <Tabs defaultValue="Antipasti" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {menuData.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name}
                  className="font-playfair"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {menuData.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={cn(
                      "flex flex-col md:flex-row gap-6 p-6 rounded-lg transition-all",
                      showAnimation && "animate-fade-in",
                      item.popular ? "bg-restaurant-accent/20 border border-restaurant-primary/20" : "bg-white hover:bg-restaurant-accent/10"
                    )}
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    {item.image && (
                      <div className="flex-shrink-0 w-full md:w-1/3 h-40 md:h-auto rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-restaurant-dark font-playfair">
                          {item.name}
                          {item.popular && (
                            <span className="ml-2 inline-block bg-restaurant-primary text-white text-xs px-2 py-1 rounded-full">Elección del Chef</span>
                          )}
                        </h4>
                        <span className="text-lg font-semibold text-restaurant-primary">{item.price}</span>
                      </div>
                      <p className="text-restaurant-dark/80 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-16">
          <p className="text-restaurant-dark italic mb-4">
            "Nuestro menú cambia según la temporada para ofrecer los ingredientes más frescos disponibles."
          </p>
          <a 
            href="#reservations" 
            className="inline-block bg-restaurant-primary text-white py-3 px-6 rounded-lg hover:bg-restaurant-primary/90 transition-colors font-medium"
          >
            Reserva Tu Mesa
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
