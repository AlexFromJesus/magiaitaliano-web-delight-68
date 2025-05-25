
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mark K.",
    role: "Restaurant Reviewer",
    quote: "Great little italian restaurant in the centre of Las Palmas. Great pasta, al dente, great caprese. Tiramisu is fantastic! I would recommend this restaurant.",
    image: "/lovable-uploads/2c02d24c-f3a8-4f0b-a634-8807b40dbd96.png",
    rating: 5
  },
  {
    id: 2,
    name: "Katie Lomuto",
    role: "Food Enthusiast",
    quote: "Unexpectedly authentic Italian restaurant in Las Palmas. The Caesar dressing was made with fresh anchovies, the homemade pasta was delicious- we ordered the black tagliatelle and the vegetable lasagna- and the staff was very friendly and helpful. We very much enjoyed our dinner at this spot!",
    image: "/lovable-uploads/d2105c15-3fc0-4f37-94ef-7ec977780c78.png",
    rating: 5
  },
  {
    id: 3,
    name: "Diana Nastas",
    role: "Guest",
    quote: "Delicious food, and very respectful staff who treated us at the highest level! A very warm attitude, that we really appreciated! And please try the desert of mascarpone with mango cream! Still dreaming of coming back!",
    image: "/lovable-uploads/17782f3e-abaf-4676-b303-11958a796f29.png",
    rating: 5
  }
];

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
    <section className="parallax-bg py-24 relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">What Our Guests Say</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
        </div>
        
        <div ref={sectionRef} className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="bg-white/95 shadow-lg border-0">
                      <CardContent className="flex flex-col p-6 h-full">
                        <div className="flex items-center mb-4">
                          {testimonial.image && (
                            <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-restaurant-dark">{testimonial.name}</p>
                            <p className="text-sm text-restaurant-dark/70">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={cn("w-5 h-5", i < testimonial.rating ? "text-yellow-400" : "text-gray-300")}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="italic text-restaurant-dark/80 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="bg-white text-restaurant-primary hover:text-restaurant-primary hover:bg-white border-0" />
              <CarouselNext className="bg-white text-restaurant-primary hover:text-restaurant-primary hover:bg-white border-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
