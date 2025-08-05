import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlistStore } from '@/stores/wishlistStore';
import { useCartStore } from '@/stores/cartStore';
import type { WishlistItem } from '@/types/product';
import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  const handleMoveToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
    });
    removeItem(item.id);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h1 className="font-playfair text-4xl font-bold text-foreground">
              My Wishlist
            </h1>
          </div>
          {items.length > 0 && (
            <Button variant="outline" onClick={clearWishlist}>
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
              Your Wishlist is Empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Start adding items you love to your wishlist and they'll appear here
            </p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              {items.length} item{items.length !== 1 ? 's' : ''} in your wishlist
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={item.id} className="group bg-card rounded-lg border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                    
                    <div className="flex items-center gap-2 mt-2 mb-4">
                      <span className="font-bold text-primary">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button
                      className="w-full"
                      onClick={() => handleMoveToCart(item)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Move to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      <Footer />
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default Wishlist;