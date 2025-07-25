import { create } from 'zustand';

interface CartItem {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
    
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
    
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: quantity <= 0 
        ? state.items.filter((item) => item.id !== id)
        : state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
    })),
    
  clearCart: () => set({ items: [] }),
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  },
}));