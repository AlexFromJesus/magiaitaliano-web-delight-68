
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from "date-fns";
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 12; hour <= 22; hour++) {
    slots.push(`${hour}:00`);
    if (hour !== 22) {
      slots.push(`${hour}:30`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const ReservationSection: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reservation Request Submitted",
        description: "We'll confirm your reservation shortly. Thank you!",
      });
      
      // Reset form
      setDate(undefined);
      setTime("");
      setGuests("2");
      setName("");
      setEmail("");
      setPhone("");
      setSpecialRequests("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="reservations" className="py-20 bg-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-dark mb-4 font-playfair">Make a Reservation</h2>
          <div className="w-20 h-1 bg-restaurant-primary mx-auto mb-6"></div>
          <p className="text-restaurant-dark max-w-2xl mx-auto">
            Reserve your table at Magiaitaliano for an unforgettable dining experience. For large groups or special events, please call us directly.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                      ))}
                      <SelectItem value="9+">9+ Guests (Please call)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your full name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your email address" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Your phone number" 
                    required 
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                  <Textarea 
                    id="specialRequests" 
                    value={specialRequests} 
                    onChange={(e) => setSpecialRequests(e.target.value)} 
                    placeholder="Any dietary restrictions or special occasions?" 
                    rows={3} 
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-restaurant-primary hover:bg-restaurant-primary/90 text-white px-8 py-2"
                  disabled={!date || !time || !name || !email || !phone || isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Book My Table"}
                </Button>
                
                <p className="text-sm text-restaurant-dark/70 mt-4">
                  By making a reservation, you agree to our reservation policy. We hold tables for 15 minutes past reservation time.
                </p>
              </div>
            </form>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-restaurant-dark font-medium mb-2">Need to modify or cancel a reservation?</p>
            <p className="text-restaurant-dark/70">
              Please call us at <a href="tel:+34928123456" className="text-restaurant-primary hover:underline">+34 928 123 456</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
