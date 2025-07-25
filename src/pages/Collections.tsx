import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';

const Collections = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            All Collections
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of ethnic wear collections, from traditional 
            classics to contemporary designs.
          </p>
        </div>
        
        <div className="space-y-16">
          <ProductsGrid 
            title="🔥 Hot Deals"
            collection="sale"
            columns={4}
          />
          
          <ProductsGrid 
            title="Traditional Sarees"
            collection="traditional-sarees"
            columns={4}
          />
          
          <ProductsGrid 
            title="Latest Arrivals"
            collection="sale"
            columns={4}
          />
        </div>
      </div>
      
      <Footer />
      
      {/* Floating Components */}
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default Collections;