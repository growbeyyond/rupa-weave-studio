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
import maggamWork1 from '@/assets/maggam-work-1.jpg';
import maggamWork2 from '@/assets/maggam-work-2.jpg';
import bridalLehenga from '@/assets/products/bridal-lehenga-red.jpg';
import receptionLehenga from '@/assets/products/reception-lehenga-gold.jpg';
import designerLehenga from '@/assets/products/designer-lehenga-set.jpg';
import kanjivaram from '@/assets/products/kanjivaram-saree-red.jpg';
import banarasi from '@/assets/products/banarasi-purple-saree.jpg';
import silkBanarasi from '@/assets/products/silk-banarasi-saree.jpg';

const MaggamWorks = () => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: "maggam-1",
      title: "Royal Maggam Bridal Lehenga",
      price: "₹45,999",
      originalPrice: "₹65,999",
      image: maggamWork1,
      badge: "30% OFF",
      category: "bridal",
      technique: "Hand Maggam",
      workType: "Zardozi & Pearls",
      color: "Deep Red",
      rating: 4.9,
      reviews: 87,
      description: "Exquisite bridal lehenga with traditional maggam work featuring intricate gold thread embroidery, pearl detailing, and mirror work. Each piece is hand-crafted by skilled artisans."
    },
    {
      id: "maggam-2",
      title: "Emerald Maggam Saree",
      price: "₹28,999",
      originalPrice: "₹39,999",
      image: maggamWork2,
      badge: "28% OFF",
      category: "saree",
      technique: "Traditional Maggam",
      workType: "Gold Thread & Mirrors",
      color: "Emerald Green",
      rating: 4.8,
      reviews: 124,
      description: "Stunning emerald green saree with traditional maggam embroidery featuring vine patterns, gold thread work, and strategically placed mirrors for elegant shimmer."
    },
    {
      id: "maggam-3",
      title: "Peacock Maggam Anarkali",
      price: "₹22,999",
      originalPrice: "₹32,999",
      image: bridalLehenga,
      badge: "30% OFF",
      category: "anarkali",
      technique: "Intricate Maggam",
      workType: "Peacock Motifs",
      color: "Royal Blue",
      rating: 4.7,
      reviews: 95,
      description: "Beautiful Anarkali with detailed peacock motifs in maggam work. Features traditional Indian craftsmanship with gold and silver thread embroidery."
    },
    {
      id: "maggam-4",
      title: "Floral Maggam Lehenga Set",
      price: "₹35,999",
      originalPrice: "₹48,999",
      image: receptionLehenga,
      badge: "27% OFF",
      category: "lehenga",
      technique: "Delicate Maggam",
      workType: "Floral Patterns",
      color: "Rose Gold",
      rating: 4.8,
      reviews: 156,
      description: "Elegant lehenga with delicate floral maggam work. Hand-embroidered roses and vines with pearl and bead accents create a romantic bridal look."
    },
    {
      id: "maggam-5",
      title: "Temple Border Maggam Saree",
      price: "₹18,999",
      originalPrice: "₹26,999",
      image: kanjivaram,
      badge: "30% OFF",
      category: "saree",
      technique: "Traditional Maggam",
      workType: "Temple Motifs",
      color: "Maroon",
      rating: 4.6,
      reviews: 78,
      description: "Classic saree with temple-inspired maggam work along the border. Features traditional South Indian motifs with gold thread and stone embellishments."
    },
    {
      id: "maggam-6",
      title: "Butterfly Maggam Crop Top Set",
      price: "₹16,999",
      originalPrice: "₹24,999",
      image: designerLehenga,
      badge: "32% OFF",
      category: "crop-set",
      technique: "Modern Maggam",
      workType: "Butterfly Motifs",
      color: "Powder Blue",
      rating: 4.5,
      reviews: 112,
      description: "Contemporary crop top and skirt set with delicate butterfly maggam work. Perfect blend of traditional embroidery with modern silhouettes."
    },
    {
      id: "maggam-7",
      title: "Vintage Maggam Sharara",
      price: "₹24,999",
      originalPrice: "₹34,999",
      image: banarasi,
      badge: "29% OFF",
      category: "sharara",
      technique: "Vintage Maggam",
      workType: "Paisley Patterns",
      color: "Deep Purple",
      rating: 4.7,
      reviews: 89,
      description: "Vintage-inspired sharara with intricate paisley maggam work. Features traditional patterns with modern color combinations and contemporary fit."
    },
    {
      id: "maggam-8",
      title: "Mandala Maggam Dupatta",
      price: "₹8,999",
      originalPrice: "₹12,999",
      image: silkBanarasi,
      badge: "31% OFF",
      category: "dupatta",
      technique: "Circular Maggam",
      workType: "Mandala Designs",
      color: "Cream Gold",
      rating: 4.6,
      reviews: 156,
      description: "Stunning dupatta with mandala-inspired maggam work. Circular patterns with intricate detailing that can elevate any traditional outfit."
    },
    {
      id: "maggam-9",
      title: "Kundan Maggam Blouse",
      price: "₹12,999",
      originalPrice: "₹17,999",
      image: receptionLehenga,
      badge: "28% OFF",
      category: "blouse",
      technique: "Heavy Maggam",
      workType: "Kundan Work",
      color: "Gold",
      rating: 4.8,
      reviews: 134,
      description: "Designer blouse with heavy maggam work and kundan embellishments. Perfect statement piece for special occasions and weddings."
    },
    {
      id: "maggam-10",
      title: "Bridal Maggam Veil",
      price: "₹15,999",
      originalPrice: "₹22,999",
      image: maggamWork1,
      badge: "30% OFF",
      category: "veil",
      technique: "Delicate Maggam",
      workType: "Border Work",
      color: "Ivory",
      rating: 4.9,
      reviews: 67,
      description: "Ethereal bridal veil with delicate maggam work along the borders. Features subtle embroidery that adds elegance without overwhelming the bridal look."
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
            Maggam Works Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exquisite hand-embroidered maggam work pieces showcasing traditional Indian artistry and craftsmanship
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Maggam Work */}
        <div className="mb-12 bg-card rounded-lg p-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-6">
            About Maggam Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Maggam work is a traditional Indian embroidery technique that originated in Andhra Pradesh and Telangana. 
                This intricate art form involves hand-stitching with gold and silver threads, creating elaborate patterns 
                and motifs that tell stories of our rich cultural heritage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each piece in our collection is meticulously crafted by skilled artisans who have inherited this 
                centuries-old technique. From bridal lehengas to elegant sarees, every garment showcases the 
                timeless beauty of maggam embroidery.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={maggamWork1} 
                alt="Maggam Work Showcase" 
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
                <option value="bridal">Bridal Collection</option>
                <option value="saree">Sarees</option>
                <option value="lehenga">Lehengas</option>
                <option value="anarkali">Anarkali Suits</option>
                <option value="blouse">Blouses</option>
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
                          {product.workType}
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

        {/* Maggam Work Features */}
        <div className="mt-16 bg-card rounded-lg p-8">
          <h2 className="font-playfair text-3xl font-bold text-center mb-6">
            Why Choose Our Maggam Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Authentic Craftsmanship</h3>
              <p className="text-muted-foreground">
                Each piece is hand-embroidered by skilled artisans using traditional techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Premium Materials</h3>
              <p className="text-muted-foreground">
                We use only the finest gold and silver threads, premium fabrics, and authentic materials for lasting beauty.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold mb-3">Custom Designs</h3>
              <p className="text-muted-foreground">
                Our artisans can create custom maggam work pieces tailored to your specific requirements and preferences.
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

export default MaggamWorks;