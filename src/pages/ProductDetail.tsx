import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Star } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useToast } from '@/hooks/use-toast';

// Import images
import kanjivaram from '@/assets/products/kanjivaram-saree-red.jpg';
import handloomCotton from '@/assets/products/handloom-cotton-saree.jpg';
import bridalLehenga from '@/assets/products/bridal-lehenga-red.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: "saree-1",
    title: "Pure Kanjivaram Silk Saree",
    price: "₹15,999",
    originalPrice: "₹25,999",
    discount: "38% OFF",
    rating: 4.8,
    reviews: 124,
    images: [kanjivaram, handloomCotton, bridalLehenga],
    colors: ["Red", "Blue", "Green", "Pink"],
    sizes: ["Free Size", "Blouse: S", "Blouse: M", "Blouse: L", "Blouse: XL"],
    fabric: "Pure Kanjivaram Silk",
    occasion: "Wedding, Festival",
    careInstructions: "Dry clean only",
    features: ["Authentic Kanjivaram weaving", "Gold zari work", "Traditional temple border", "Includes unstitched blouse"],
    description: "Exquisite Pure Kanjivaram silk saree featuring traditional temple border design with intricate gold zari work. This masterpiece represents the finest craftsmanship from South India's legendary weavers. Perfect for weddings, festivals, and special occasions.",
    specifications: {
      "Fabric": "100% Pure Kanjivaram Silk",
      "Length": "5.5 meters saree + 0.8 meters blouse",
      "Work": "Handwoven with gold zari",
      "Border": "Traditional temple design",
      "Wash Care": "Dry clean recommended",
      "Origin": "Kanchipuram, Tamil Nadu"
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Size selection is required",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor
    });

    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const relatedProducts = [
    { id: "related-1", title: "Banarasi Silk Saree", price: "₹12,999", image: handloomCotton },
    { id: "related-2", title: "Designer Lehenga", price: "₹18,999", image: bridalLehenga },
    { id: "related-3", title: "Cotton Handloom", price: "₹2,999", image: kanjivaram },
  ];

  return (
    <div className="min-h-screen bg-background">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-playfair text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
              <Badge variant="destructive">{product.discount}</Badge>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-3">Color:</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedColor === color ? 'border-primary bg-primary/10' : 'border-border'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size ? 'border-primary bg-primary/10' : 'border-border'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity:</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border rounded-lg flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border rounded-lg flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button onClick={handleAddToCart} className="w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex-1"
                >
                  <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Free Shipping</div>
                <div className="text-xs text-muted-foreground">On orders above ₹1999</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Secure Payment</div>
                <div className="text-xs text-muted-foreground">100% secure checkout</div>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Easy Returns</div>
                <div className="text-xs text-muted-foreground">7-day return policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold">{product.rating}</div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{product.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Priya S.", rating: 5, comment: "Beautiful saree with excellent quality. Exactly as shown in pictures!" },
                      { name: "Anita M.", rating: 5, comment: "Gorgeous piece! Perfect for my daughter's wedding. Highly recommend." },
                      { name: "Kavya P.", rating: 4, comment: "Good quality but delivery was slightly delayed. Overall satisfied." }
                    ].map((review, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="font-playfair text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Card key={item.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="font-bold text-primary">{item.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default ProductDetail;