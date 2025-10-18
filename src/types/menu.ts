export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price?: number;
  priceHalf?: number;
  priceFull?: number;
  priceSteam?: number;
  priceFried?: number;
  image?: string;
}

export interface CartItem extends MenuItem {
  cartItemId: string;
  quantity: number;
  selectedSize?: 'half' | 'full' | 'steam' | 'fried';
  selectedPrice: number;
}
