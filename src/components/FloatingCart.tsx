import { useState } from 'react';
import { ShoppingCart, X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const { cart, updateQuantity, removeFromCart, clearCart, getTotal, getItemCount } = useCart();

  const handlePlaceOrder = () => {
    if (!customerName.trim() || !customerAddress.trim()) {
      alert('Please fill in your name and address');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    let message = `Hello Bhaijaan Cafe! I'd like to order:\n\n`;
    
    cart.forEach((item) => {
      const sizeLabel = item.selectedSize ? ` (${item.selectedSize})` : '';
      message += `- ${item.name}${sizeLabel} × ${item.quantity} = ₹${item.selectedPrice * item.quantity}\n`;
    });

    message += `\nTotal = ₹${getTotal()}\n\nName: ${customerName}\nAddress: ${customerAddress}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917002638389?text=${encodedMessage}`, '_blank');
    
    clearCart();
    setCustomerName('');
    setCustomerAddress('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-primary rounded-full shadow-elegant flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open Cart"
      >
        <ShoppingCart className="w-6 h-6 text-primary-foreground" />
        {getItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
            {getItemCount()}
          </span>
        )}
      </button>

      {/* Cart Panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <Card className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] z-50 overflow-y-auto animate-slide-in">
            <CardHeader className="border-b sticky top-0 bg-background z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="font-playfair text-2xl">Your Order</CardTitle>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Close Cart"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground py-12 font-poppins">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div
                        key={`${item.id}-${item.selectedSize}-${index}`}
                        className="flex items-center gap-4 p-4 bg-secondary rounded-lg"
                      >
                        <div className="flex-1">
                          <h4 className="font-playfair font-semibold">{item.name}</h4>
                          {item.selectedSize && (
                            <p className="text-sm text-muted-foreground capitalize">
                              {item.selectedSize}
                            </p>
                          )}
                          <p className="text-primary font-semibold">₹{item.selectedPrice}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(`${item.id}-${item.selectedSize}-${index}`, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(`${item.id}-${item.selectedSize}-${index}`, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            onClick={() => removeFromCart(`${item.id}-${item.selectedSize}-${index}`)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="name" className="font-poppins">Your Name *</Label>
                      <Input
                        id="name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address" className="font-poppins">Delivery Address *</Label>
                      <Input
                        id="address"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Enter your address"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-lg">
                    <span className="font-playfair text-xl font-semibold">Total</span>
                    <span className="font-poppins text-2xl font-bold">₹{getTotal()}</span>
                  </div>
                </>
              )}
            </CardContent>

            {cart.length > 0 && (
              <CardFooter className="border-t p-6 space-y-3">
                <Button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  size="lg"
                >
                  Place Order via WhatsApp
                </Button>
                <Button onClick={clearCart} variant="outline" className="w-full">
                  Clear Cart
                </Button>
              </CardFooter>
            )}
          </Card>
        </>
      )}
    </>
  );
};

export default FloatingCart;
