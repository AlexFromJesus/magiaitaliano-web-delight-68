
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
        description: "Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil",
        price: "€8.50",
        image: "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        popular: true
      },
      {
        name: "Carpaccio di Manzo",
        description: "Thinly sliced raw beef with arugula, Parmesan, and balsamic reduction",
        price: "€12.00",
        image: "https://images.unsplash.com/photo-1615461469775-9842e04b5639?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Mozzarella Caprese",
        description: "Buffalo mozzarella with tomatoes, basil, and balsamic glaze",
        price: "€10.50",
        image: "https://images.unsplash.com/photo-1608044723049-e72d2fce4c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Arancini",
        description: "Fried rice balls filled with ragù, peas, and mozzarella",
        price: "€9.50",
        image: "https://images.unsplash.com/photo-1613478881376-3f03ff442249?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    name: "Pasta",
    items: [
      {
        name: "Spaghetti alla Carbonara",
        description: "Spaghetti with pancetta, eggs, pecorino cheese, and black pepper",
        price: "€14.50",
        image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        popular: true
      },
      {
        name: "Linguine al Frutti di Mare",
        description: "Linguine with mixed seafood in a light tomato sauce",
        price: "€18.00",
        image: "https://images.unsplash.com/photo-1560788784-66def4e5a65e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Pappardelle al Ragù di Cinghiale",
        description: "Wide pasta ribbons with wild boar ragù and Parmesan",
        price: "€16.50",
        image: "https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Ravioli di Spinaci e Ricotta",
        description: "Homemade ravioli filled with spinach and ricotta in sage butter sauce",
        price: "€15.00",
        image: "https://images.unsplash.com/photo-1669038588240-f4bd8ea62326?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        popular: true
      }
    ]
  },
  {
    name: "Pizze",
    items: [
      {
        name: "Margherita",
        description: "Tomato sauce, mozzarella, and fresh basil",
        price: "€12.00",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        popular: true
      },
      {
        name: "Quattro Formaggi",
        description: "Mozzarella, gorgonzola, fontina, and Parmesan",
        price: "€14.50",
        image: "https://images.unsplash.com/photo-1595854341625-f33e596b7a5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Diavola",
        description: "Tomato sauce, mozzarella, spicy salami, and chili flakes",
        price: "€13.50",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Prosciutto e Funghi",
        description: "Tomato sauce, mozzarella, ham, and mushrooms",
        price: "€14.00",
        image: "https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    name: "Secondi",
    items: [
      {
        name: "Ossobuco alla Milanese",
        description: "Veal shanks braised with vegetables, white wine, and broth, served with saffron risotto",
        price: "€22.00",
        image: "https://images.unsplash.com/photo-1648306341426-41fac2eb12ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Branzino al Forno",
        description: "Oven-baked sea bass with herbs, lemon, and roasted potatoes",
        price: "€24.50",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        popular: true
      },
      {
        name: "Saltimbocca alla Romana",
        description: "Veal cutlets with prosciutto and sage, sautéed in white wine",
        price: "€20.00",
        image: "https://images.unsplash.com/photo-1544360553-c071973c2f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Pollo al Marsala",
        description: "Chicken breast sautéed with mushrooms in Marsala wine sauce",
        price: "€18.50",
        image: "https://images.unsplash.com/photo-1533652475678-4744e0c784b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    name: "Dolci",
    items: [
      {
        name: "Tiramisu",
        description: "Layers of coffee-soaked ladyfingers and mascarpone cream",
        price: "€8.00",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        popular: true
      },
      {
        name: "Panna Cotta",
        description: "Vanilla cream with mixed berry coulis",
        price: "€7.50",
        image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Cannoli Siciliani",
        description: "Crisp pastry tubes filled with sweetened ricotta and chocolate chips",
        price: "€7.00",
        image: "https://images.unsplash.com/photo-1622673038950-8cefc0251351?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Gelato Artigianale",
        description: "Selection of homemade gelato (ask for today's flavors)",
        price: "€6.50",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
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
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Our Menu</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            Discover our selection of authentic Italian dishes, made with love and the finest ingredients.
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
                            <span className="ml-2 inline-block bg-restaurant-primary text-white text-xs px-2 py-1 rounded-full">Chef's Choice</span>
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
            "Our menu changes seasonally to feature the freshest ingredients available."
          </p>
          <a 
            href="#reservations" 
            className="inline-block bg-restaurant-primary text-white py-3 px-6 rounded-lg hover:bg-restaurant-primary/90 transition-colors font-medium"
          >
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
