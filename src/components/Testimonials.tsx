import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Best biryani in town! The flavors are authentic and remind me of home-cooked meals.",
      author: "Ziaur Rahman Shahin",
    },
    {
      text: "Love their chicken rolls! Quick service and affordable prices. Highly recommended!",
      author: "Sharif Wahid",
    },
    {
      text: "Family-friendly atmosphere with delicious food. The momos are a must-try!",
      author: "Shakil Ansary",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-secondary border-none shadow-soft hover:shadow-elegant transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="font-poppins text-foreground mb-6 italic">"{testimonial.text}"</p>
                <p className="font-poppins font-semibold text-primary">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
