import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import SecondaryBanner from '@/components/SecondaryBanner';
import HeroBanner from '@/components/HeroBanner';
import CustomerReviews from '@/components/CustomerReviews';
import CategoryCarousel from '@/components/CategoryCarousel';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';
import OfferWheel from '@/components/OfferWheel';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';

import traditionalSareesImg from '@/assets/traditional-sarees.jpg';
import occasionalLehengasImg from '@/assets/occasional-lehengas.jpg';
import partyGownsImg from '@/assets/party-gowns.jpg';
import casualKurtisImg from '@/assets/casual-kurtis.jpg';
import salwarKameezImg from '@/assets/salwar-kameez.jpg';
import kidsEthnicImg from '@/assets/kids-ethnic.jpg';

const Index = () => {
  const categories = [
    { title: "Traditional Sarees", image: traditionalSareesImg, link: "/traditional-sarees" },
    { title: "Occasional Lehengas", image: occasionalLehengasImg, link: "/occasional-lehengas" },
    { title: "Party Gowns", image: partyGownsImg, link: "/party-gowns" },
    { title: "Casual Kurtis", image: casualKurtisImg, link: "/casual-kurtis" },
    { title: "Salwar Kameez Sets", image: salwarKameezImg, link: "/salwar-kameez" },
    { title: "Kids Ethnic", image: kidsEthnicImg, link: "/kids" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      <SecondaryBanner />
      
      <HeroBanner />
      
      <div className="max-w-7xl mx-auto">
        <div className="py-16">
          <h2 className="font-playfair text-4xl font-bold text-center mb-8 text-foreground">
            Shop by Category
          </h2>
          <CategoryCarousel items={categories} />
        </div>
        
        <ProductsGrid 
          title="🔥 Hot Deals"
          collection="sale"
          columns={4}
        />
      </div>
      
      <CustomerReviews />
      
      <Footer />
      
      {/* Floating Components */}
      <OfferWheel />
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default Index;
