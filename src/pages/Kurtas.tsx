import { useState } from 'react';
import { Filter, SlidersHorizontal, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import type { Product } from '@/types/product';
import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import { Link } from 'react-router-dom';

const products: Product[] = [
  { id: '5', title: 'Embroidered Kurti Set', price: '₹3,999', originalPrice: '₹5,999', image: '/placeholder.svg', color: 'Blue', size: ['S', 'M', 'L', 'XL'], category: 'Kurtas' },
  { id: '101', title: 'Cotton Casual Kurti', price: '₹1,999', originalPrice: '₹2,999', image: '/placeholder.svg', color: 'White', size: ['S', 'M', 'L'], category: 'Kurtas' },
  { id: '102', title: 'Silk Festive Kurti', price: '₹4,999', originalPrice: '₹6,999', image: '/placeholder.svg', color: 'Red', size: ['M', 'L', 'XL'], category: 'Kurtas' },
  { id: '103', title: 'Block Print Kurti', price: '₹2,499', originalPrice: '₹3,499', image: '/placeholder.svg', color: 'Green', size: ['S', 'M', 'L', 'XL'], category: 'Kurtas' },
  { id: '104', title: 'Floral Printed Kurti', price: '₹1,799', originalPrice: '₹2,499', image: '/placeholder.svg', color: 'Pink', size: ['S', 'M', 'L'], category: 'Kurtas' },
  { id: '105', title: 'Designer Kurti with Dupatta', price: '₹5,999', originalPrice: '₹7,999', image: '/placeholder.svg', color: 'Yellow', size: ['M', 'L', 'XL'], category: 'Kurtas' },
];

const Kurtas = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState('all');
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore();

  const colors = ['Blue', 'White', 'Red', 'Green', 'Pink', 'Yellow'];
  const sizes = ['S', 'M', 'L', 'XL'];

  const filteredProducts = products.filter(product => {
    if (selectedColors.length > 0 && !selectedColors.includes(product.color)) return false;
    if (selectedSizes.length > 0 && !product.size.some(size => selectedSizes.includes(size))) return false;
    
    if (priceRange !== 'all') {
      const price = parseInt(product.price.replace(/[₹,]/g, ''));
      switch (priceRange) {
        case 'under-2000': return price < 2000;
        case '2000-4000': return price >= 2000 && price <= 4000;
        case '4000-6000': return price >= 4000 && price <= 6000;
        case 'above-6000': return price > 6000;
      }
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[₹,]/g, '')) - parseInt(b.price.replace(/[₹,]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₹,]/g, '')) - parseInt(a.price.replace(/[₹,]/g, ''));
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

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
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: 'Kurtas',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Kurtas Collection
          </h1>
          <p className="text-muted-foreground">
            Discover our beautiful collection of kurtas for every occasion
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 shrink-0">
            <div className="bg-card border rounded-lg p-4 sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-2000">Under ₹2,000</SelectItem>
                    <SelectItem value="2000-4000">₹2,000 - ₹4,000</SelectItem>
                    <SelectItem value="4000-6000">₹4,000 - ₹6,000</SelectItem>
                    <SelectItem value="above-6000">Above ₹6,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Colors</h4>
                <div className="space-y-2">
                  {colors.map(color => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox
                        id={`color-${color}`}
                        checked={selectedColors.includes(color)}
                        onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                      />
                      <label htmlFor={`color-${color}`} className="text-sm">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Sizes</h4>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`size-${size}`}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                      />
                      <label htmlFor={`size-${size}`} className="text-sm">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedColors([]);
                  setSelectedSizes([]);
                  setPriceRange('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Sort by Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group bg-card rounded-lg border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                      onClick={() => handleWishlistToggle(product)}
                    >
                      <Heart 
                        className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                    </Button>
                  </div>
                  
                  <div className="p-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {product.title}
                    </Link>
                    
                    <div className="flex items-center gap-2 mt-2 mb-4">
                      <span className="font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default Kurtas;