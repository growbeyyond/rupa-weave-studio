import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';

const OccasionalLehengas = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Occasional Lehengas
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Make every celebration memorable with our stunning collection of occasional lehengas, 
            perfect for weddings, festivals, and special moments.
          </p>
        </div>
        
        <ProductsGrid 
          collection="occasional-lehengas"
          columns={4}
        />
      </div>
      
      <Footer />
      
      {/* Floating Components */}
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default OccasionalLehengas;