export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  badge?: string;
  color?: string;
  size?: string[];
  fabric?: string;
  care?: string;
  occasion?: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface WishlistItem {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
}