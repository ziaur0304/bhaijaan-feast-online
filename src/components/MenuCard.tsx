import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MenuItem } from '@/types/menu';
import { useCart } from '@/context/CartContext';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<'half' | 'full' | 'steam' | 'fried'>('full');

  const hasHalfFull = item.priceHalf !== undefined && item.priceFull !== undefined;
  const hasSteamFried = item.priceSteam !== undefined && item.priceFried !== undefined;
  const hasSinglePrice = item.price !== undefined;

  const handleAddToCart = () => {
    if (hasSinglePrice) {
      addToCart(item);
    } else {
      addToCart(item, selectedSize);
    }
  };

  const getDisplayPrice = () => {
    if (hasSinglePrice) return `₹${item.price}`;
    if (hasHalfFull) {
      return selectedSize === 'half' ? `₹${item.priceHalf}` : `₹${item.priceFull}`;
    }
    if (hasSteamFried) {
      return selectedSize === 'steam' ? `₹${item.priceSteam}` : `₹${item.priceFried}`;
    }
    return '';
  };

  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-scale-in">
      <CardContent className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">{item.name}</h3>
        
        {(hasHalfFull || hasSteamFried) && (
          <div className="flex gap-2 mb-4">
            {hasHalfFull && (
              <>
                <Button
                  variant={selectedSize === 'half' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize('half')}
                  className={selectedSize === 'half' ? 'bg-primary' : ''}
                >
                  Half
                </Button>
                <Button
                  variant={selectedSize === 'full' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize('full')}
                  className={selectedSize === 'full' ? 'bg-primary' : ''}
                >
                  Full
                </Button>
              </>
            )}
            {hasSteamFried && (
              <>
                <Button
                  variant={selectedSize === 'steam' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize('steam')}
                  className={selectedSize === 'steam' ? 'bg-primary' : ''}
                >
                  Steam
                </Button>
                <Button
                  variant={selectedSize === 'fried' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize('fried')}
                  className={selectedSize === 'fried' ? 'bg-primary' : ''}
                >
                  Fried
                </Button>
              </>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="font-poppins text-2xl font-bold text-primary">{getDisplayPrice()}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-primary hover:opacity-90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
