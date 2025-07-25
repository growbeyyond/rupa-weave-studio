import OfferBanner from '@/components/OfferBanner';
import Navigation from '@/components/Navigation';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';

const TraditionalSarees = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-4">
            Traditional Sarees
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite collection of traditional sarees, featuring handwoven silks, 
            intricate embroidery, and timeless designs that celebrate India's rich textile heritage.
          </p>
        </div>
        
        <ProductsGrid 
          collection="traditional-sarees"
          columns={4}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default TraditionalSarees;