import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecentlyViewedItem {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
  viewedAt: number;
}

interface RecentlyViewedStore {
  items: RecentlyViewedItem[];
  addItem: (item: Omit<RecentlyViewedItem, 'viewedAt'>) => void;
  clearHistory: () => void;
  getRecentItems: (limit?: number) => RecentlyViewedItem[];
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) =>
        set((state) => {
          const filteredItems = state.items.filter((i) => i.id !== item.id);
          const newItem = { ...item, viewedAt: Date.now() };
          return { 
            items: [newItem, ...filteredItems].slice(0, 20) // Keep max 20 items
          };
        }),
        
      clearHistory: () => set({ items: [] }),
      
      getRecentItems: (limit = 10) => {
        const { items } = get();
        return items
          .sort((a, b) => b.viewedAt - a.viewedAt)
          .slice(0, limit);
      },
    }),
    {
      name: 'rupa-recently-viewed-storage',
    }
  )
);