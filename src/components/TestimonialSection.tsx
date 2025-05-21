
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
    name: "Maria Rodriguez",
    role: "Food Critic",
    quote: "Magiaitaliano offers an authentic taste of Italy right here in Las Palmas. Every dish I've tried has transported me straight to the heart of Italy. Their homemade pasta is simply divine!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Local Foodie",
    quote: "I've been coming to Magiaitaliano for years, and the quality and service have never wavered. The restaurant ambience is perfect for both casual dining and special occasions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Tourist",
    quote: "During our vacation in Las Palmas, we stumbled upon this gem of a restaurant. The pasta carbonara was the best I've ever had, and the staff made us feel like family!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Antonio Fernandez",
    role: "Business Owner",
    quote: "Magiaitaliano is my go-to place for business lunches and dinners. The professional service and exceptional food quality make it the perfect venue to impress clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4
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
