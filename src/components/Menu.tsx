import { Button } from '@/components/ui/button';
import MenuCard from './MenuCard';
import { menuData, categories } from '@/data/menuData';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Menu = () => {
  const { openCart } = useCart();

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our delicious selection of Indian and Mughlai favorites
          </p>
          <Button
            onClick={openCart}
            size="lg"
            className="bg-gradient-accent hover:opacity-90"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Order Now
          </Button>
        </div>

        {categories.map((category) => {
          const items = menuData.filter((item) => item.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center md:text-left">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="text-center mt-12">
          <Button
            onClick={openCart}
            size="lg"
            className="bg-gradient-accent hover:opacity-90"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Place Your Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
