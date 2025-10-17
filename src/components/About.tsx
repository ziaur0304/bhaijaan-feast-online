import { Heart, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Bhaijaan Cafe
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="font-poppins text-lg text-muted-foreground max-w-3xl mx-auto">
            A cozy place where tradition meets taste. We serve comfort, warmth, and authentic flavors 
            in every bite, bringing you the best of Mughlai and Indian cuisine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-8 rounded-lg shadow-soft text-center animate-scale-in hover:shadow-elegant transition-shadow">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-3">Made with Love</h3>
            <p className="font-poppins text-muted-foreground">
              Every dish is prepared with care and authentic recipes passed down through generations.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft text-center animate-scale-in hover:shadow-elegant transition-shadow" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-3">Family Friendly</h3>
            <p className="font-poppins text-muted-foreground">
              A warm, welcoming space where families gather to enjoy delicious food together.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft text-center animate-scale-in hover:shadow-elegant transition-shadow" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-3">Quality First</h3>
            <p className="font-poppins text-muted-foreground">
              We use only the finest ingredients to ensure every dish meets our high standards.
            </p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center shadow-elegant">
          <h3 className="font-playfair text-3xl font-bold mb-4">Our Mission</h3>
          <p className="font-poppins text-xl italic">
            "To serve love, warmth, and authentic taste in every bite."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
