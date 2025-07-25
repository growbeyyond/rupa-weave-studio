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
import bridalLehenga from '@/assets/products/bridal-lehenga-red.jpg';
import partyLehenga from '@/assets/products/party-lehenga-blue.jpg';
import receptionLehenga from '@/assets/products/reception-lehenga-gold.jpg';
import anarkaliGreen from '@/assets/products/anarkali-green.jpg';
import designerLehenga from '@/assets/products/designer-lehenga-set.jpg';
import embroideredKurti from '@/assets/products/embroidered-kurti.jpg';

const OccasionalLehengas = () => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: "lehenga-1",
      title: "Bridal Lehenga Set",
      price: "₹25,999",
      originalPrice: "₹45,999",
      image: bridalLehenga,
      badge: "43% OFF",
      category: "bridal",
      fabric: "Heavy Silk",
      occasion: "Wedding",
      color: "Red",
      rating: 4.9,
      reviews: 156,
      description: "Stunning bridal lehenga with heavy gold embroidery, sequins and mirror work. Complete 3-piece set perfect for your special day."
    },
    {
      id: "lehenga-2",
      title: "Party Lehenga",
      price: "₹18,999",
      originalPrice: "₹28,999",
      image: partyLehenga,
      badge: "34% OFF",
      category: "party",
      fabric: "Net & Silk",
      occasion: "Party",
      color: "Royal Blue",
      rating: 4.7,
      reviews: 98,
      description: "Elegant party lehenga with silver zari work and contemporary cut. Perfect for cocktail parties and celebrations."
    },
    {
      id: "lehenga-3",
      title: "Reception Lehenga",
      price: "₹32,999",
      originalPrice: "₹49,999",
      image: receptionLehenga,
      badge: "34% OFF",
      category: "reception",
      fabric: "Designer Silk",
      occasion: "Reception",
      color: "Rose Gold",
      rating: 4.8,
      reviews: 87,
      description: "Luxurious reception lehenga with pearl and bead work. Flowing silhouette with modern embellishments."
    },
    {
      id: "anarkali-1",
      title: "Designer Anarkali Suit",
      price: "₹14,999",
      originalPrice: "₹22,999",
      image: anarkaliGreen,
      badge: "35% OFF",
      category: "anarkali",
      fabric: "Georgette",
      occasion: "Festival",
      color: "Emerald Green",
      rating: 4.6,
      reviews: 134,
      description: "Beautiful Anarkali suit with intricate thread work and stone embellishments. Flowing style perfect for festivals."
    },
    {
      id: "lehenga-4",
      title: "Designer Lehenga Collection",
      price: "₹21,999",
      originalPrice: "₹35,999",
      image: designerLehenga,
      badge: "39% OFF",
      category: "designer",
      fabric: "Pure Silk",
      occasion: "Wedding Function",
      color: "Navy Blue",
      rating: 4.8,
      reviews: 112,
      description: "Contemporary designer lehenga with modern embellishments. Perfect blend of tradition and fashion."
    },
    {
      id: "sharara-1",
      title: "Embroidered Sharara Set",
      price: "₹16,999",
      originalPrice: "₹24,999",
      image: embroideredKurti,
      badge: "32% OFF",
      category: "sharara",
      fabric: "Cotton Silk",
      occasion: "Mehendi",
      color: "Peach",
      rating: 4.5,
      reviews: 76,
      description: "Beautiful sharara set with delicate floral embroidery. Comfortable and stylish for mehendi and sangeet functions."
    },
    {
      id: "lehenga-5",
      title: "Sangeet Special Lehenga",
      price: "₹19,999",
      originalPrice: "₹29,999",
      image: bridalLehenga,
      badge: "33% OFF",
      category: "sangeet",
      fabric: "Velvet",
      occasion: "Sangeet",
      color: "Maroon",
      rating: 4.7,
      reviews: 94,
      description: "Special sangeet lehenga with contemporary design. Perfect for dance performances and celebrations."
    },
    {
      id: "lehenga-6",
      title: "Engagement Lehenga",
      price: "₹28,999",
      originalPrice: "₹42,999",
      image: receptionLehenga,
      badge: "33% OFF",
      category: "engagement",
      fabric: "Organza",
      occasion: "Engagement",
      color: "Champagne",
      rating: 4.9,
      reviews: 65,
      description: "Elegant engagement lehenga with subtle shimmer and delicate work. Perfect for intimate celebrations."
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
        return 0;
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
      <div className="relative h-64 bg-gradient-to-r from-secondary/10 to-primary/10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Occasional Lehengas & Anarkalis
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Make every celebration memorable with our stunning collection of lehengas and anarkalis
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
                <option value="bridal">Bridal Lehengas</option>
                <option value="party">Party Lehengas</option>
                <option value="anarkali">Anarkali Suits</option>
                <option value="reception">Reception Wear</option>
                <option value="sangeet">Sangeet Special</option>
                <option value="engagement">Engagement</option>
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
            Why Choose Our Lehengas & Anarkalis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Occasion Perfect</h3>
              <p className="text-muted-foreground">
                Carefully designed for specific occasions from intimate gatherings to grand celebrations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Premium Fabrics</h3>
              <p className="text-muted-foreground">
                Only the finest fabrics and embellishments to ensure you look and feel spectacular.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Perfect Fit</h3>
              <p className="text-muted-foreground">
                Expert tailoring and alteration services to ensure the perfect fit for your special day.
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

export default OccasionalLehengas;