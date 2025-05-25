
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  popular?: boolean;
  available?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
  image?: string;
}

const menuData: MenuCategory[] = [
  {
    name: "Entrantes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Carpaccio di bue su letto di rucola",
        price: "13,90€"
      },
      {
        name: "Coppetta suppli de arroz a la boloñesa",
        price: "3,50€"
      },
      {
        name: "Provolone fuso con pomodoro e rucola",
        price: "12,90€"
      },
      {
        name: "Focaccia Margarita con pomodoro, orégano y miel",
        price: "4,90€",
        popular: true
      },
      {
        name: "Focaccia trufada",
        price: "8,50€"
      },
      {
        name: "Vitello Tonnato",
        price: "12,90€"
      },
      {
        name: "Carpaccio de bresaola con rucola Parmigiano",
        price: "13,90€"
      },
      {
        name: "Melanzane alla parmigiana",
        price: "10,90€"
      },
      {
        name: "Mozzarella de búfala con grana padana",
        price: "12,90€",
        popular: true
      },
      {
        name: "Salumi misti",
        price: "15,90€"
      }
    ]
  },
  {
    name: "Ensaladas",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Ensalada Cesar con pollo, lechuga, crutones, queso",
        price: "10,90€"
      },
      {
        name: "Ensalada templada con calabacín y gambas",
        price: "13,90€",
        popular: true
      },
      {
        name: "Ensalada con tomate, mozzarella y albahaca",
        price: "11,90€"
      },
      {
        name: "Ensalada con berenjenas, miel y queso",
        price: "10,90€"
      },
      {
        name: "Salmón marinado con crema",
        price: "14,90€"
      }
    ]
  },
  {
    name: "Nuestra Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Lasagne",
        price: "12,90€",
        popular: true
      },
      {
        name: "Ravioli rellenos de ricotta y espinacas con gambas",
        price: "14,90€",
        popular: true
      },
      {
        name: "Penne all'arrabbiata",
        price: "10,90€"
      },
      {
        name: "Tagliatelle al ragu",
        price: "11,90€"
      },
      {
        name: "Spaghetti carbonara",
        price: "11,90€",
        popular: true
      },
      {
        name: "Agnolotti rellenos de carne con crema de trufa",
        price: "13,90€"
      },
      {
        name: "Gnocchi",
        price: "10,90€"
      },
      {
        name: "Rigatoni con tomate cherry, champiñones, alcachofas",
        price: "12,90€"
      },
      {
        name: "Pasta fresca del día",
        price: "11,90€"
      }
    ]
  },
  {
    name: "Risotti",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Risotto de boletus, trufas, queso",
        price: "16,90€",
        popular: true
      }
    ]
  },
  {
    name: "Nuestros Gratinados",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Lasagne con carne",
        price: "13,90€",
        popular: true
      },
      {
        name: "Panna y jamón",
        price: "13,90€"
      }
    ]
  },
  {
    name: "Nuestra Carne",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Tagliata de entrecot con patatas y rucola",
        price: "21,90€",
        popular: true
      },
      {
        name: "Solomillo a la pimienta",
        price: "22,90€"
      },
      {
        name: "Solomillo a la parmigiana",
        price: "22,90€"
      }
    ]
  },
  {
    name: "Nuestras Hamburguesas",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Hamburguesa",
        price: "14,90€"
      },
      {
        name: "Hamburguesa gourmet",
        price: "15,90€"
      }
    ]
  },
  {
    name: "Nuestros Postres",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Tiramisú casero",
        price: "4,90€",
        popular: true
      },
      {
        name: "Crema de queso",
        price: "4,90€"
      },
      {
        name: "Panna Cotta",
        price: "4,90€"
      },
      {
        name: "Pastel de queso",
        price: "4,90€"
      },
      {
        name: "Coulant de chocolate",
        price: "4,90€"
      }
    ]
  },
  {
    name: "Vinos Blancos",
    image: "https://images.unsplash.com/photo-1566049107657-c8bd7cd95667?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Gewürztraminer Alto Adige DOC",
        description: "75cl",
        price: "49,00€"
      },
      {
        name: "Verdicchio Fazi Battaglia",
        description: "75cl",
        price: "22,90€"
      },
      {
        name: "Passerina Bio Vegan Ciù Ciù",
        description: "75cl",
        price: "29,90€"
      },
      {
        name: "Rapitalà Grillo Sicilia DOC",
        description: "75cl",
        price: "29,90€"
      },
      {
        name: "Chardonnay Friuli DOC Cormons",
        description: "75cl",
        price: "29,90€"
      },
      {
        name: "Pinot Grigio DOC Cormons",
        description: "75cl",
        price: "29,90€"
      },
      {
        name: "Pecorino DOC Vola Volè",
        description: "75cl",
        price: "19,90€"
      }
    ]
  },
  {
    name: "Vinos Espumosos",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Gheller Extra Dry Prosecco Superiore",
        description: "75cl",
        price: "19,90€"
      },
      {
        name: "Gheller Rosé Millesimato DOC",
        description: "75cl",
        price: "18,90€"
      }
    ]
  },
  {
    name: "Vinos Tintos",
    image: "https://images.unsplash.com/photo-1606280635882-8b1a6fa054df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        name: "Brunello di Montalcino Mastrojanni",
        description: "75cl",
        price: "98,99€"
      },
      {
        name: "Amarone della Valpolicella Classico DOC Monte del Frà",
        description: "75cl",
        price: "49,90€"
      },
      {
        name: "Rosso di Montalcino Mastrojanni",
        description: "75cl",
        price: "69,90€"
      },
      {
        name: "Barolo Casali del Barone",
        description: "75cl",
        price: "59,00€"
      },
      {
        name: "Valpolicella Ripasso Classico Superiore",
        description: "75cl",
        price: "29,90€"
      },
      {
        name: "Primitivo di Manduria Brunilde",
        description: "75cl",
        price: "24,90€"
      },
      {
        name: "Lambrusco Reggiano DOC Premium",
        description: "75cl",
        price: "21,00€"
      },
      {
        name: "Rapitalà Nero d'Avola Sicilia DOC",
        description: "75cl",
        price: "20,00€"
      },
      {
        name: "150+1 Barbera DOC Casali del Barone",
        description: "75cl",
        price: "19,90€"
      },
      {
        name: "Primitivo Masso Antico del Salento",
        description: "75cl",
        price: "19,90€"
      },
      {
        name: "Chianti DOC Pian del Masso Melini",
        description: "75cl",
        price: "19,90€"
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
    <section id="menu" className="py-20 bg-gradient-to-b from-restaurant-accent/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Nuestra Carta</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de auténticos platos italianos, elaborados con los mejores ingredientes frescos y precios excepcionales.
          </p>
        </div>
        
        <Tabs defaultValue={menuData[0].name} className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <TabsList className="grid grid-flow-col auto-cols-max gap-2 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-2">
              {menuData.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name}
                  className="font-playfair whitespace-nowrap data-[state=active]:bg-restaurant-primary data-[state=active]:text-white rounded-full px-6 py-3 transition-all duration-300 hover:bg-restaurant-primary/10"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {menuData.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-0">
              {/* Category Header with Image */}
              {category.image && (
                <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-48 md:h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${category.image})` }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-3xl md:text-4xl font-bold text-white font-playfair text-center px-4">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {category.items.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={cn(
                      "group relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg border",
                      showAnimation && "animate-fade-in",
                      item.popular 
                        ? "bg-gradient-to-br from-restaurant-accent/30 to-restaurant-primary/5 border-restaurant-primary/30 hover:border-restaurant-primary/50" 
                        : "bg-white/80 backdrop-blur-sm hover:bg-white border-gray-200 hover:border-restaurant-primary/30",
                      !item.available && "opacity-70"
                    )}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-restaurant-dark font-playfair leading-tight">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <span className="inline-block bg-restaurant-primary text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                              Chef's Choice
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-restaurant-dark/70 text-sm mb-2 italic">{item.description}</p>
                        )}
                        {item.available === false && (
                          <span className="inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-full">No disponible</span>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xl font-bold text-restaurant-primary font-playfair">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    
                    {/* Decorative border line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-restaurant-primary/20 to-transparent"></div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-restaurant-primary/10">
          <p className="text-restaurant-dark italic mb-6 text-lg font-playfair">
            "Nuestro menú cambia según la temporada para ofrecer los ingredientes más frescos disponibles."
          </p>
          <a 
            href="tel:+34828903819" 
            className="inline-block bg-gradient-to-r from-restaurant-primary to-restaurant-primary/90 text-white py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-lg hover:scale-105"
          >
            Llama para Reservar: +34 828 903 819
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
