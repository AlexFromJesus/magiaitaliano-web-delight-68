import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
  popular?: boolean;
  available?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Entrantes",
    items: [
      {
        name: "Bruschetta",
        description: "Pan tostado con tomates frescos, ajo, albahaca y aceite de oliva virgen extra",
        price: "€8.50",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        popular: true
      },
      {
        name: "Carpaccio di Manzo",
        description: "Finas láminas de ternera cruda con rúcula, parmesano y reducción de balsámico",
        price: "€12.00",
        image: "https://images.unsplash.com/photo-1625938145312-31544134479a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  },
  {
    name: "Ensaladas",
    items: [
      {
        name: "Ensalada Caprese",
        description: "Mozzarella de búfala con tomates, albahaca y glaseado balsámico",
        price: "€10.50",
        image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
      },
      {
        name: "Ensalada Mixta",
        description: "Selección de verduras frescas de temporada",
        price: "€9.50",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  },
  {
    name: "Risotti",
    items: [
      {
        name: "Risotto ai Funghi",
        description: "Risotto con variedad de setas y queso parmesano",
        price: "€14.50",
        image: "https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        popular: true
      },
      {
        name: "Risotto al Frutti di Mare",
        description: "Risotto con mariscos variados",
        price: "€16.50",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  },
  {
    name: "Nuestras Pastas",
    items: [
      {
        name: "Tagliatelle Negros con Calabacín",
        description: "Tomate cherry, gambas, albahaca y cáscara de limón",
        price: "€15.90",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        popular: true
      },
      {
        name: "Tagliatelle del Bosque",
        description: "Con boletus y crema de trufa",
        price: "€15.90",
        image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      },
      {
        name: "Tagliatelle a la Boloñesa",
        description: "Tradicional salsa boloñesa casera",
        price: "€13.90",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
      },
      {
        name: "Gnocchi a la Sorrentina",
        description: "Con tomate y mozzarella",
        price: "€12.90",
        image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ]
  },
  {
    name: "Pastas Rellenas",
    items: [
      {
        name: "Raviolis Verdes Rellenos de Ricotta y Espinacas",
        description: "Con gambas y tomate cherry",
        price: "€14.90",
        image: "https://images.unsplash.com/photo-1587740908075-9e245715d5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        popular: true
      },
      {
        name: "Raviolis Verdes con Salsa 4 Quesos",
        description: "Rellenos de ricotta y espinacas",
        price: "€12.90",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
      }
    ]
  },
  {
    name: "Gratinados",
    items: [
      {
        name: "Lasaña de Carne",
        description: "Lasaña tradicional con salsa boloñesa",
        price: "€13.90",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        popular: true
      },
      {
        name: "Berenjenas a la Parmigiana",
        description: "Berenjenas asadas en capas con tomate y queso",
        price: "€11.90",
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        name: "Lasaña Vegetal",
        description: "Con verduras de temporada",
        price: "€12.90",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
      }
    ]
  },
  {
    name: "Hamburguesas",
    items: [
      {
        name: "Hamburguesa con Lechuga Morada",
        description: "Con mozzarella, salsa de queso, tomate, huevo y bacon",
        price: "No disponible",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
        available: false
      },
      {
        name: "Hamburguesa con Rúcula",
        description: "Con tomate, salsa mangiaitaliano, jamón serrano, balsámico y escalla de parmesano",
        price: "No disponible",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
        available: false
      }
    ]
  },
  {
    name: "Carnes",
    items: [
      {
        name: "Solomillo Mangiaitaliano",
        description: "Con Rúcula, Parmigiano Reggiano y Tomate Cherry",
        price: "No disponible",
        image: "https://images.unsplash.com/photo-1626509653291-20ca7b31d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        available: false
      },
      {
        name: "Solomillo a la Plancha",
        description: "Con Papas Fritas",
        price: "No disponible",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        available: false
      }
    ]
  },
  {
    name: "Pizzas",
    items: [
      {
        name: "Pizza Mangiaitaliano",
        description: "Con jamón de parma, rúcula, tomate cherry y parmigiano reggiano",
        price: "€12.90",
        image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        popular: true
      },
      {
        name: "Pizza Focaccia Mangiaitaliano",
        description: "Tomate cherry, rúcula y parmigiano reggiano",
        price: "€9.50",
        image: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1644&q=80"
      },
      {
        name: "Pizza 4 Formaggi",
        description: "4 quesos gorgonzola, mozzarella, parmigiano reggiano",
        price: "€10.90",
        image: "https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        name: "Pizza Diavola Salame Picante",
        description: "Picante",
        price: "€12.90",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      }
    ]
  },
  {
    name: "Postres",
    items: [
      {
        name: "Tiramisu",
        description: "Capas de bizcochos empapados en café y crema de mascarpone",
        price: "€8.00",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        popular: true
      },
      {
        name: "Panna Cotta",
        description: "Crema de vainilla con coulis de frutos rojos",
        price: "€7.50",
        image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      },
      {
        name: "Cannoli Siciliani",
        description: "Tubos crujientes de masa rellenos de ricotta endulzada y chips de chocolate",
        price: "€7.00",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        name: "Gelato Artigianale",
        description: "Selección de helados caseros (pregunte por los sabores del día)",
        price: "€6.50",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={cn(
                      "flex flex-col md:flex-row gap-6 p-6 rounded-lg transition-all",
                      showAnimation && "animate-fade-in",
                      item.popular ? "bg-restaurant-accent/20 border border-restaurant-primary/20" : "bg-white hover:bg-restaurant-accent/10",
                      !item.available && "opacity-70"
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
                          {item.available === false && (
                            <span className="ml-2 inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-full">No disponible</span>
                          )}
                        </h4>
                        <span className="text-lg font-semibold text-restaurant-primary">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-restaurant-dark/80 text-sm">{item.description}</p>
                      )}
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
