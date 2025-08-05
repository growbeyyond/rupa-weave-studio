import { useState, useEffect } from 'react';
import { Search, X, Heart, ShoppingBag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Link } from 'react-router-dom';
import type { Product } from '@/types/product';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allProducts: Product[] = [
  { id: '1', title: 'Elegant Banarasi Saree', price: '₹12,999', originalPrice: '₹15,999', image: '/placeholder.svg', category: 'Traditional Sarees' },
  { id: '2', title: 'Designer Bridal Lehenga', price: '₹25,999', originalPrice: '₹32,999', image: '/placeholder.svg', category: 'Occasional Lehengas' },
  { id: '3', title: 'Handwoven Kanjivaram Saree', price: '₹18,999', originalPrice: '₹22,999', image: '/placeholder.svg', category: 'Traditional Sarees' },
  { id: '4', title: 'Party Wear Anarkali', price: '₹8,999', originalPrice: '₹11,999', image: '/placeholder.svg', category: 'Party Wear' },
  { id: '5', title: 'Embroidered Kurti Set', price: '₹3,999', originalPrice: '₹5,999', image: '/placeholder.svg', category: 'Kurtas' },
  { id: '6', title: 'Reception Lehenga', price: '₹22,999', originalPrice: '₹28,999', image: '/placeholder.svg', category: 'Occasional Lehengas' },
  { id: '7', title: 'Traditional Salwar Suit', price: '₹6,999', originalPrice: '₹8,999', image: '/placeholder.svg', category: 'Salwar Suits' },
  { id: '8', title: 'Indo-Western Fusion Dress', price: '₹7,999', originalPrice: '₹9,999', image: '/placeholder.svg', category: 'Indo-Western' },
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore();

  useEffect(() => {
    const searchProducts = async () => {
      if (query.trim()) {
        setIsLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 300));
        const filtered = allProducts.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
        setIsLoading(false);
      } else {
        setFilteredProducts([]);
        setIsLoading(false);
      }
    };

    searchProducts();
  }, [query]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    });
  };

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Products
          </DialogTitle>
          <DialogDescription>
            Search our collection of traditional and modern Indian wear
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for sarees, lehengas, kurtas..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          
          <div className="max-h-96 overflow-y-auto space-y-2">
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <LoadingSpinner />
              </div>
            )}
            
            {!isLoading && query.trim() && filteredProducts.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No products found for "{query}"
              </p>
            )}
            
            {!isLoading && filteredProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="flex-1">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={onClose}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {product.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleWishlistToggle(product)}
                    aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart 
                      className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;