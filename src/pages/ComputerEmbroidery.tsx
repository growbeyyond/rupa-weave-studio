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

// Import generated images
import computerEmbroidery1 from '@/assets/computer-embroidery-1.jpg';
import computerEmbroidery2 from '@/assets/computer-embroidery-2.jpg';
import designerLehenga from '@/assets/products/designer-lehenga-set.jpg';
import embroideredKurti from '@/assets/products/embroidered-kurti.jpg';
import indoWestern from '@/assets/products/indo-western-fusion-dress.jpg';
import salwarSuit from '@/assets/products/traditional-salwar-suit.jpg';
import partyGown from '@/assets/products/party-gown.jpg';
import partyLehenga from '@/assets/products/party-lehenga-blue.jpg';

const ComputerEmbroidery = () => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: "computer-emb-1",
      title: "Digital Geometric Lehenga",
      price: "₹18,999",
      originalPrice: "₹26,999",
      image: computerEmbroidery1,
      badge: "30% OFF",
      category: "lehenga",
      technique: "Computer Embroidery",
      pattern: "Geometric Designs",
      color: "Navy Blue",
      rating: 4.8,
      reviews: 145,
      description: "Modern lehenga with precision computer embroidery featuring geometric patterns and metallic threads. Perfect fusion of technology and traditional craftsmanship."
    },
    {
      id: "computer-emb-2",
      title: "Abstract Flow Kurti",
      price: "₹8,999",
      originalPrice: "₹12,999",
      image: computerEmbroidery2,
      badge: "31% OFF",
      category: "kurti",
      technique: "Digital Embroidery",
      pattern: "Abstract Patterns",
      color: "White",
      rating: 4.6,
      reviews: 98,
      description: "Contemporary kurti with flowing abstract patterns created through computer embroidery. Features gradient color transitions and precise stitch work."
    },
    {
      id: "computer-emb-3",
      title: "Mandala Circuit Dress",
      price: "₹14,999",
      originalPrice: "₹20,999",
      image: indoWestern,
      badge: "29% OFF",
      category: "dress",
      technique: "Precision Embroidery",
      pattern: "Mandala & Circuits",
      color: "Black",
      rating: 4.7,
      reviews: 87,
      description: "Unique Indo-western dress combining traditional mandala motifs with modern circuit-inspired patterns using computer embroidery technology."
    },
    {
      id: "computer-emb-4",
      title: "Digital Floral Anarkali",
      price: "₹16,999",
      originalPrice: "₹23,999",
      image: embroideredKurti,
      badge: "29% OFF",
      category: "anarkali",
      technique: "Computer Embroidery",
      pattern: "Digital Florals",
      color: "Peach",
      rating: 4.5,
      reviews: 123,
      description: "Elegant Anarkali with digitally designed floral patterns. Computer embroidery ensures perfect symmetry and intricate detailing in every stitch."
    },
    {
      id: "computer-emb-5",
      title: "Pixel Art Lehenga Set",
      price: "₹22,999",
      originalPrice: "₹31,999",
      image: partyLehenga,
      badge: "28% OFF",
      category: "lehenga",
      technique: "Digital Pattern",
      pattern: "Pixel Art Design",
      color: "Royal Blue",
      rating: 4.8,
      reviews: 76,
      description: "Innovative lehenga featuring pixel art patterns created through computer embroidery. Modern interpretation of traditional Indian motifs."
    },
    {
      id: "computer-emb-6",
      title: "Tech-Inspired Gown",
      price: "₹19,999",
      originalPrice: "₹27,999",
      image: partyGown,
      badge: "29% OFF",
      category: "gown",
      technique: "Modern Embroidery",
      pattern: "Tech Motifs",
      color: "Silver",
      rating: 4.7,
      reviews: 112,
      description: "Futuristic gown with technology-inspired embroidery patterns. Computer precision creates intricate designs that blend tradition with innovation."
    },
    {
      id: "computer-emb-7",
      title: "Binary Code Saree",
      price: "₹12,999",
      originalPrice: "₹17,999",
      image: designerLehenga,
      badge: "28% OFF",
      category: "saree",
      technique: "Digital Embroidery",
      pattern: "Binary Patterns",
      color: "Black & Gold",
      rating: 4.6,
      reviews: 89,
      description: "Contemporary saree with binary code patterns embroidered using computer technology. Unique piece for the modern Indian woman."
    },
    {
      id: "computer-emb-8",
      title: "Circuit Board Jacket",
      price: "₹11,999",
      originalPrice: "₹16,999",
      image: salwarSuit,
      badge: "29% OFF",
      category: "jacket",
      technique: "Precision Stitch",
      pattern: "Circuit Designs",
      color: "Dark Green",
      rating: 4.5,
      reviews: 94,
      description: "Modern jacket with circuit board-inspired embroidery patterns. Computer embroidery creates precise, intricate electronic motifs."
    },
    {
      id: "computer-emb-9",
      title: "Holographic Effect Lehenga",
      price: "₹24,999",
      originalPrice: "₹33,999",
      image: computerEmbroidery1,
      badge: "26% OFF",
      category: "lehenga",
      technique: "Special Effects",
      pattern: "Holographic Design",
      color: "Iridescent",
      rating: 4.9,
      reviews: 156,
      description: "Spectacular lehenga with holographic effect embroidery created through advanced computer technology. Changes color with light and movement."
    },
    {
      id: "computer-emb-10",
      title: "Gradient Wave Dupatta",
      price: "₹6,999",
      originalPrice: "₹9,999",
      image: computerEmbroidery2,
      badge: "30% OFF",
      category: "dupatta",
      technique: "Gradient Embroidery",
      pattern: "Wave Patterns",
      color: "Multi-color",
      rating: 4.7,
      reviews: 134,
      description: "Beautiful dupatta with gradient wave patterns achieved through computer embroidery. Smooth color transitions and flowing designs."
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
      <div className="relative h-64 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Computer Embroidery Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge digital embroidery designs where technology meets traditional craftsmanship for perfect precision
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Computer Embroidery */}
        <div className="mb-12 bg-card rounded-lg p-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-6">
            About Computer Embroidery
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Computer embroidery represents the perfect fusion of technology and traditional craftsmanship. 
                Using advanced computerized machines, we create intricate patterns with unmatched precision and consistency. 
                This technology allows us to achieve complex designs that would be impossible through hand embroidery alone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our digital embroidery collection features contemporary patterns, geometric designs, and innovative 
                motifs that cater to the modern Indian woman. From gradient effects to pixel art patterns, 
                each piece showcases the limitless possibilities of computer-aided embroidery.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={computerEmbroidery1} 
                alt="Computer Embroidery Showcase" 
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>

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
                <option value="lehenga">Lehengas</option>
                <option value="kurti">Kurtis</option>
                <option value="dress">Dresses</option>
                <option value="anarkali">Anarkali Suits</option>
                <option value="gown">Gowns</option>
                <option value="saree">Sarees</option>
                <option value="dupatta">Dupatta</option>
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
                          {product.technique}
                        </span>
                        <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                          {product.pattern}
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

        {/* Computer Embroidery Features */}
        <div className="mt-16 bg-card rounded-lg p-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-6">
            Advantages of Computer Embroidery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Perfect Precision</h3>
              <p className="text-muted-foreground">
                Computer-controlled machines ensure every stitch is placed with mathematical precision for flawless results.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Complex Designs</h3>
              <p className="text-muted-foreground">
                Advanced software allows us to create intricate patterns and gradient effects impossible with traditional methods.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Consistent Quality</h3>
              <p className="text-muted-foreground">
                Every piece maintains the same high quality and exact pattern reproduction, ensuring customer satisfaction.
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

export default ComputerEmbroidery;