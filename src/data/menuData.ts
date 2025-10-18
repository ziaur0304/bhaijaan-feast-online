import { MenuItem } from '@/types/menu';

export const menuData: MenuItem[] = [
  // Pokora
  { id: 'pokora-1', name: 'Chicken Pokora', category: 'Pokora', priceHalf: 50, priceFull: 100 },
  { id: 'pokora-2', name: 'Veg Pokora', category: 'Pokora', price: 100 },
  { id: 'pokora-3', name: 'Paneer Pokora', category: 'Pokora', priceHalf: 60, priceFull: 120 },
  { id: 'pokora-4', name: 'Leg Piece', category: 'Pokora', price: 50 },

  // Roll
  { id: 'roll-1', name: 'Chicken Roll', category: 'Roll', price: 100 },
  { id: 'roll-2', name: 'Veg Roll', category: 'Roll', price: 60 },
  { id: 'roll-3', name: 'Egg Roll', category: 'Roll', price: 70 },
  { id: 'roll-4', name: 'Paneer Roll', category: 'Roll', price: 80 },

  // Momo
  { id: 'momo-1', name: 'Chicken Momo (Steam)', category: 'Momo', priceHalf: 50, priceFull: 100 },
  { id: 'momo-2', name: 'Chicken Momo (Fried)', category: 'Momo', priceHalf: 70, priceFull: 120 },

  // Biriyani
  { id: 'biryani-1', name: 'Chicken Biriyani', category: 'Biriyani', priceHalf: 70, priceFull: 140 },
  { id: 'biryani-2', name: 'Fried Rice', category: 'Biriyani', priceHalf: 70, priceFull: 140 },

  // Chowmein
  { id: 'chow-1', name: 'Chicken Chowmein', category: 'Chowmein', priceHalf: 60, priceFull: 120 },
  { id: 'chow-2', name: 'Veg Chowmein', category: 'Chowmein', priceHalf: 40, priceFull: 80 },
  { id: 'chow-3', name: 'Egg Chowmein', category: 'Chowmein', priceHalf: 50, priceFull: 100 },

  // Drinks
  { id: 'drink-1', name: 'Milk Tea', category: 'Drinks', price: 10 },
    { id: 'drink-2', name: 'Milk Tea - Bhaijaan special', category: 'Drinks', price: 20 },
  { id: 'drink-3', name: 'Red Tea', category: 'Drinks', price: 10 },
  { id: 'drink-4', name: 'Hot Coffee', category: 'Drinks', price: 40 },
  { id: 'drink-5', name: 'Cold Coffee', category: 'Drinks', price: 90 },
  { id: 'drink-6', name: 'Masala Drink', category: 'Drinks', price: 50 },
  { id: 'drink-7', name: 'Lemon Drink', category: 'Drinks', price: 50 },
  { id: 'drink-8', name: 'Lassi', category: 'Drinks', price: 100 },
  { id: 'drink-9', name: 'Coke', category: 'Drinks', price: 50 },

  // Indian
  { id: 'indian-1', name: 'Plain Rice', category: 'Indian', price: 60 },
  { id: 'indian-2', name: 'Chicken Butter Masala', category: 'Indian', priceHalf: 120, priceFull: 220 },
  { id: 'indian-3', name: 'Paneer Butter Masala', category: 'Indian', price: 80 },
  { id: 'indian-4', name: 'Dal Tadka', category: 'Indian', price: 80 },
];

export const categories = ['Pokora', 'Roll', 'Momo', 'Biriyani', 'Chowmein', 'Drinks', 'Indian'];
