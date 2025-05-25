
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  popular?: boolean;
  available?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Nuestra Pasta",
    items: [
      {
        name: "Lasagne",
        popular: true
      },
      {
        name: "Ravioli rellenos de ricotta y espinacas con gambas",
        popular: true
      },
      {
        name: "Penne all'arrabbiata"
      },
      {
        name: "Tagliatelle al ragu"
      },
      {
        name: "Spaghetti carbonara",
        popular: true
      },
      {
        name: "Agnolotti rellenos de carne con crema de trufa"
      },
      {
        name: "Gnocchi"
      },
      {
        name: "Rigatoni con tomate cherry, champiñones, alcachofas"
      },
      {
        name: "Pasta fresca del día"
      }
    ]
  },
  {
    name: "Nuestra Carne",
    items: [
      {
        name: "Tagliata de entrecot con patatas y rucola",
        popular: true
      },
      {
        name: "Solomillo a la pimienta"
      },
      {
        name: "Solomillo a la parmigiana"
      }
    ]
  },
  {
    name: "Risotti",
    items: [
      {
        name: "Risotto de boletus, trufas, queso",
        popular: true
      }
    ]
  },
  {
    name: "Nuestros Gratinados",
    items: [
      {
        name: "Lasagne con carne",
        popular: true
      },
      {
        name: "Panna y jamón"
      }
    ]
  },
  {
    name: "Entrantes",
    items: [
      {
        name: "Carpaccio di bue su letto di rucola"
      },
      {
        name: "Coppetta suppli de arroz a la boloñesa"
      },
      {
        name: "Provolone fuso con pomodoro e rucola"
      },
      {
        name: "Focaccia Margarita con pomodoro, orégano y miel"
      },
      {
        name: "Focaccia trufada"
      },
      {
        name: "Vitello Tonnato"
      },
      {
        name: "Carpaccio de bresaola con rucola Parmigiano"
      },
      {
        name: "Melanzane alla parmigiana"
      },
      {
        name: "Mozzarella de búfala con grana padana"
      },
      {
        name: "Salumi misti"
      }
    ]
  },
  {
    name: "Ensaladas",
    items: [
      {
        name: "Ensalada Cesar con pollo, lechuga, crutones, queso"
      },
      {
        name: "Ensalada templada con calabacín y gambas"
      },
      {
        name: "Ensalada con tomate, mozzarella y albahaca"
      },
      {
        name: "Ensalada con berenjenas, miel y queso"
      },
      {
        name: "Salmón marinado con crema"
      }
    ]
  },
  {
    name: "Nuestras Hamburguesas",
    items: [
      {
        name: "Hamburguesa"
      },
      {
        name: "Hamburguesa gourmet"
      }
    ]
  },
  {
    name: "Nuestros Postres",
    items: [
      {
        name: "Tiramisú casero",
        popular: true
      },
      {
        name: "Crema de queso"
      },
      {
        name: "Panna Cotta"
      },
      {
        name: "Pastel de queso"
      },
      {
        name: "Coulant de chocolate"
      }
    ]
  },
  {
    name: "Vinos Blancos",
    items: [
      {
        name: "Gewürztraminer Alto Adige DOC"
      },
      {
        name: "Verdicchio Fazi Battaglia"
      },
      {
        name: "Passerina Bio Vegan Ciù Ciù"
      },
      {
        name: "Rapitalà Grillo Sicilia DOC"
      },
      {
        name: "Chardonnay Friuli DOC Cormons"
      },
      {
        name: "Pinot Grigio DOC Cormons"
      },
      {
        name: "Pecorino DOC Vola Volè"
      }
    ]
  },
  {
    name: "Vinos Espumosos",
    items: [
      {
        name: "Gheller Extra Dry Prosecco Superiore"
      },
      {
        name: "Gheller Rosé Millesimato DOC"
      }
    ]
  },
  {
    name: "Vinos Tintos",
    items: [
      {
        name: "Brunello di Montalcino Mastrojanni"
      },
      {
        name: "Amarone della Valpolicella Classico DOC Monte del Frà"
      },
      {
        name: "Rosso di Montalcino Mastrojanni"
      },
      {
        name: "Barolo Casali del Barone"
      },
      {
        name: "Valpolicella Ripasso Classico Superiore"
      },
      {
        name: "Primitivo di Manduria Brunilde"
      },
      {
        name: "Lambrusco Reggiano DOC Premium"
      },
      {
        name: "Rapitalà Nero d'Avola Sicilia DOC"
      },
      {
        name: "150+1 Barbera DOC Casali del Barone"
      },
      {
        name: "Primitivo Masso Antico del Salento"
      },
      {
        name: "Chianti DOC Pian del Masso Melini"
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
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Nuestra Carta</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            Descubre nuestra selección de auténticos platos italianos, elaborados con los mejores ingredientes frescos.
          </p>
        </div>
        
        <Tabs defaultValue={menuData[0].name} className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="grid grid-flow-col auto-cols-max gap-2">
              {menuData.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name}
                  className="font-playfair whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {menuData.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={cn(
                      "p-6 rounded-lg transition-all",
                      showAnimation && "animate-fade-in",
                      item.popular ? "bg-restaurant-accent/20 border border-restaurant-primary/20" : "bg-white hover:bg-restaurant-accent/10 border border-gray-100",
                      !item.available && "opacity-70"
                    )}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-restaurant-dark font-playfair">
                        {item.name}
                        {item.popular && (
                          <span className="ml-2 inline-block bg-restaurant-primary text-white text-xs px-2 py-1 rounded-full">Elección del Chef</span>
                        )}
                        {item.available === false && (
                          <span className="ml-2 inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-full">No disponible</span>
                        )}
                      </h4>
                      {item.price && (
                        <span className="text-lg font-semibold text-restaurant-primary">{item.price}</span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-restaurant-dark/80 text-sm">{item.description}</p>
                    )}
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
            href="tel:+34828903819" 
            className="inline-block bg-restaurant-primary text-white py-3 px-6 rounded-lg hover:bg-restaurant-primary/90 transition-colors font-medium"
          >
            Llama para Reservar
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
