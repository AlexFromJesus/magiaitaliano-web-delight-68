
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

const images: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
    alt: "Restaurant interior with elegant dining tables",
    category: "interior"
  },
  {
    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Fresh pasta preparation",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "Chef garnishing a dish",
    category: "chef"
  },
  {
    url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Pasta dish with tomato sauce",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Steak with vegetables",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
    alt: "Rustic wooden tables in restaurant",
    category: "interior"
  },
  {
    url: "https://images.unsplash.com/photo-1415278337127-6385b5b59847?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
    alt: "Fresh seafood dish",
    category: "food"
  },
  {
    url: "https://images.unsplash.com/photo-1525268323556-0505e6fe6521?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "Chef plating a dish",
    category: "chef"
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    alt: "Cozy restaurant ambience",
    category: "interior"
  }
];

const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<string>("all");
  const [showAnimation, setShowAnimation] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = category === "all" 
    ? images 
    : images.filter(image => image.category === category);
  
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
    <section id="gallery" className="py-20 bg-restaurant-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Our Gallery</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            Take a visual journey through our restaurant, dishes, and the passion behind every creation.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={cn(
                "px-4 py-2 rounded-full transition-colors text-sm font-medium",
                category === "all" 
                  ? "bg-restaurant-primary text-white" 
                  : "bg-white text-restaurant-dark hover:bg-restaurant-primary/10"
              )}
              onClick={() => setCategory("all")}
            >
              All
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-full transition-colors text-sm font-medium",
                category === "food" 
                  ? "bg-restaurant-primary text-white" 
                  : "bg-white text-restaurant-dark hover:bg-restaurant-primary/10"
              )}
              onClick={() => setCategory("food")}
            >
              Food
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-full transition-colors text-sm font-medium",
                category === "interior" 
                  ? "bg-restaurant-primary text-white" 
                  : "bg-white text-restaurant-dark hover:bg-restaurant-primary/10"
              )}
              onClick={() => setCategory("interior")}
            >
              Interior
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-full transition-colors text-sm font-medium",
                category === "chef" 
                  ? "bg-restaurant-primary text-white" 
                  : "bg-white text-restaurant-dark hover:bg-restaurant-primary/10"
              )}
              onClick={() => setCategory("chef")}
            >
              Our Chefs
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={`${image.category}-${index}`}
              className={cn(
                "overflow-hidden rounded-lg cursor-pointer group relative",
                showAnimation && "animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="h-64 w-full">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <div className="relative w-full h-full">
            {selectedImage && (
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
