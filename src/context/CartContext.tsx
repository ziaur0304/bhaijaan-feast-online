import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, MenuItem } from '@/types/menu';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (item: MenuItem, size?: 'half' | 'full' | 'steam' | 'fried') => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addToCart = (item: MenuItem, size?: 'half' | 'full' | 'steam' | 'fried') => {
    let selectedPrice = item.price || 0;
    
    if (size === 'half' && item.priceHalf) selectedPrice = item.priceHalf;
    if (size === 'full' && item.priceFull) selectedPrice = item.priceFull;
    if (size === 'steam' && item.priceSteam) selectedPrice = item.priceSteam;
    if (size === 'fried' && item.priceFried) selectedPrice = item.priceFried;

    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.selectedSize === size
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1, selectedSize: size, selectedPrice }]);
    }

    toast({
      title: "Added to cart!",
      description: `${item.name} ${size ? `(${size})` : ''} added to your order.`,
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity } : item)));
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items removed from your cart.",
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.selectedPrice * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, isCartOpen, openCart, closeCart, toggleCart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
