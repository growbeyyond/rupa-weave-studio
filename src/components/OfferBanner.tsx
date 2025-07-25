import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const OfferBanner = () => {
  const { getTotalItems, toggleCart } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-3 px-4 font-inter text-center overflow-hidden">
      <div className="flex items-center justify-center gap-4 text-sm font-semibold animate-pulse">
        <span>🎉 EXCLUSIVE OFFER!</span>
        <span>🎊 MONSOON SALE 2025!</span>
        <span>🛍️ Unlock 5% DISCOUNT on ALL items at Rupa Collections!</span>
        <span>Use Code: <strong className="bg-white text-primary px-2 py-1 rounded">MONSOON25</strong></span>
        <span>✦ Offer Valid till: 31 October, 2025</span>
        <span>🚚 Rs. 250 OFF on Your First Purchase!</span>
        <span>📦 Free Shipping on All Domestic Orders!</span>
        <button 
          onClick={toggleCart}
          className="bg-white text-primary px-4 py-1 rounded font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 relative"
        >
          <ShoppingCart className="h-4 w-4" />
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;