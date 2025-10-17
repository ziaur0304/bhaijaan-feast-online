import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
          Bhaijaan Cafe
        </h1>
        <p className="font-poppins text-xl md:text-2xl lg:text-3xl mb-4 drop-shadow-md">
          Where Flavor Meets Family
        </p>
        <p className="font-poppins text-base md:text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
          Experience authentic Indian and Mughlai cuisine in a warm, family-friendly atmosphere. 
          Dine in or enjoy our home delivery service.
        </p>
        <Button
          onClick={scrollToMenu}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins text-lg px-8 py-6 shadow-elegant"
        >
          View Menu
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
