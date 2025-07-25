import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';

const Sale = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
            🔥 MEGA SALE 🔥
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto mb-6">
            Don't miss our biggest sale of the year! Up to 70% off on selected items.
          </p>
          <div className="bg-primary text-primary-foreground p-4 rounded-lg inline-block">
            <p className="font-bold text-lg">Use Code: <span className="bg-white text-primary px-3 py-1 rounded">MEGA70</span></p>
            <p className="text-sm mt-1">Valid till 31st October 2025</p>
          </div>
        </div>
        
        <ProductsGrid 
          title="🎉 Sale Items"
          collection="sale"
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

export default Sale;