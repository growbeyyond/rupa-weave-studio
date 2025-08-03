import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  getTotalItems: () => number;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) =>
        set((state) => {
          const exists = state.items.find((i) => i.id === item.id);
          if (exists) return state;
          return { items: [...state.items, item] };
        }),
        
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
        
      isInWishlist: (id) => {
        const { items } = get();
        return items.some((item) => item.id === id);
      },
      
      clearWishlist: () => set({ items: [] }),
      
      getTotalItems: () => {
        const { items } = get();
        return items.length;
      },
    }),
    {
      name: 'rupa-wishlist-storage',
    }
  )
);