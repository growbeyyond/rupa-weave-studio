import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye, Filter, Grid, List } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Import product images
import kanjivaram from '@/assets/products/kanjivaram-saree-red.jpg';
import handloomCotton from '@/assets/products/handloom-cotton-saree.jpg';
import banarasi from '@/assets/products/banarasi-purple-saree.jpg';
import chanderi from '@/assets/products/chanderi-pink-saree.jpg';
import patola from '@/assets/products/patola-green-saree.jpg';
import tussar from '@/assets/products/tussar-kalamkari-saree.jpg';
import silkBanarasi from '@/assets/products/silk-banarasi-saree.jpg';
import designerLehenga from '@/assets/products/designer-lehenga-set.jpg';

const TraditionalSarees = () => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: "saree-1",
      title: "Pure Kanjivaram Silk Saree",
      price: "₹15,999",
      originalPrice: "₹25,999",
      image: kanjivaram,
      badge: "38% OFF",
      category: "silk",
      fabric: "Pure Silk",
      occasion: "Wedding",
      color: "Red",
      rating: 4.8,
      reviews: 124,
      description: "Exquisite Kanjivaram silk saree with traditional temple border and intricate zari work. Perfect for weddings and special occasions."
    },
    {
      id: "saree-2",
      title: "Handloom Cotton Saree",
      price: "₹2,999",
      originalPrice: "₹4,999",
      image: handloomCotton,
      badge: "40% OFF",
      category: "cotton",
      fabric: "Cotton",
      occasion: "Casual",
      color: "Navy Blue",
      rating: 4.6,
      reviews: 89,
      description: "Beautiful handloom cotton saree with traditional block print patterns. Comfortable for daily wear and casual occasions."
    },
    {
      id: "saree-3",
      title: "Banarasi Silk Saree",
      price: "₹12,999",
      originalPrice: "₹18,999",
      image: banarasi,
      badge: "32% OFF",
      category: "silk",
      fabric: "Banarasi Silk",
      occasion: "Festival",
      color: "Purple",
      rating: 4.9,
      reviews: 156,
      description: "Royal Banarasi silk saree with gold brocade work. Traditional weaving patterns that showcase the heritage of Indian textiles."
    },
    {
      id: "saree-4",
      title: "Chanderi Silk Saree",
      price: "₹8,999",
      originalPrice: "₹13,999",
      image: chanderi,
      badge: "36% OFF",
      category: "silk",
      fabric: "Chanderi Silk",
      occasion: "Party",
      color: "Pink",
      rating: 4.7,
      reviews: 98,
      description: "Elegant Chanderi silk saree with silver zari border. Lightweight and graceful, perfect for evening parties and celebrations."
    },
    {
      id: "saree-5",
      title: "Patola Silk Saree",
      price: "₹22,999",
      originalPrice: "₹35,999",
      image: patola,
      badge: "36% OFF",
      category: "silk",
      fabric: "Patola Silk",
      occasion: "Wedding",
      color: "Green",
      rating: 5.0,
      reviews: 67,
      description: "Authentic Patola silk saree with double ikat weaving. A masterpiece of traditional craftsmanship from Gujarat."
    },
    {
      id: "saree-6",
      title: "Tussar Kalamkari Saree",
      price: "₹6,999",
      originalPrice: "₹10,999",
      image: tussar,
      badge: "36% OFF",
      category: "tussar",
      fabric: "Tussar Silk",
      occasion: "Cultural",
      color: "Yellow",
      rating: 4.8,
      reviews: 112,
      description: "Beautiful Tussar silk saree with hand-painted Kalamkari motifs. Traditional Indian art meets contemporary styling."
    },
    {
      id: "saree-7",
      title: "Designer Silk Saree",
      price: "₹9,999",
      originalPrice: "₹16,999",
      image: silkBanarasi,
      badge: "41% OFF",
      category: "silk",
      fabric: "Designer Silk",
      occasion: "Reception",
      color: "Maroon",
      rating: 4.6,
      reviews: 143,
      description: "Contemporary designer silk saree with modern embellishments. Perfect blend of tradition and contemporary fashion."
    },
    {
      id: "saree-8",
      title: "Bridal Collection Saree",
      price: "₹18,999",
      originalPrice: "₹28,999",
      image: designerLehenga,
      badge: "34% OFF",
      category: "bridal",
      fabric: "Heavy Silk",
      occasion: "Bridal",
      color: "Gold",
      rating: 4.9,
      reviews: 87,
      description: "Luxurious bridal saree with heavy embroidery and stone work. Designed for the most special day of your life."
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filterBy === 'all') return true;
    return product.category === filterBy;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[₹,]/g, '')) - parseFloat(b.price.replace(/[₹,]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[₹,]/g, '')) - parseFloat(a.price.replace(/[₹,]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return 0; // For demo, keeping original order
      default:
        return 0;
    }
  });

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Traditional Sarees Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our exquisite collection of traditional sarees, from timeless Kanjivarams to elegant Banarasis
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <select 
                value={filterBy} 
                onChange={(e) => setFilterBy(e.target.value)}
                className="border rounded-lg px-3 py-2 bg-background"
              >
                <option value="all">All Categories</option>
                <option value="silk">Silk Sarees</option>
                <option value="cotton">Cotton Sarees</option>
                <option value="tussar">Tussar Sarees</option>
                <option value="bridal">Bridal Collection</option>
              </select>
            </div>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-background"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
            <span className="text-muted-foreground ml-2">{sortedProducts.length} Products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'grid' ? 'h-80' : 'h-48'
                    }`}
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white text-gray-800 hover:bg-gray-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white text-gray-800 hover:bg-gray-100"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className={`bg-white hover:bg-gray-100 ${
                        wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-800'
                      }`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
                
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className={viewMode === 'list' ? 'flex justify-between items-start' : ''}>
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="font-inter font-semibold text-foreground mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      
                      {viewMode === 'list' && (
                        <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                      )}
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-inter font-bold text-primary text-lg">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="font-inter text-muted-foreground line-through text-sm">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                          {product.fabric}
                        </span>
                        <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                          {product.occasion}
                        </span>
                      </div>
                    </div>
                    
                    {viewMode === 'list' && (
                      <div className="ml-4">
                        <Button 
                          className="w-full" 
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {viewMode === 'grid' && (
                    <Button 
                      className="w-full" 
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Information */}
        <div className="mt-16 bg-card rounded-lg p-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-6">
            About Our Traditional Sarees
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                Each saree is carefully selected for its superior fabric quality and craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Authentic Designs</h3>
              <p className="text-muted-foreground">
                Traditional patterns and weaving techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Perfect Fit</h3>
              <p className="text-muted-foreground">
                Expert tailoring services to ensure your saree fits perfectly for any occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Floating Components */}
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default TraditionalSarees;