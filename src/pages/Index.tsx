import OfferBanner from '@/components/OfferBanner';
import Navigation from '@/components/Navigation';
import VideoBanner from '@/components/VideoBanner';
import CategoryCarousel from '@/components/CategoryCarousel';
import ProductsGrid from '@/components/ProductsGrid';
import Footer from '@/components/Footer';

const Index = () => {
  const categories = [
    { title: "Traditional Sarees", image: "https://picsum.photos/seed/saree/800/600", link: "/traditional-sarees" },
    { title: "Occasional Lehengas", image: "https://picsum.photos/seed/lehenga/800/600", link: "/occasional-lehengas" },
    { title: "Party Gowns", image: "https://picsum.photos/seed/party/800/600", link: "/party-gowns" },
    { title: "Casual Kurtis", image: "https://picsum.photos/seed/kurti/800/600", link: "/casual-kurtis" },
    { title: "Salwar Kameez Sets", image: "https://picsum.photos/seed/salwar/800/600", link: "/salwar-kameez" },
    { title: "Kids Ethnic", image: "https://picsum.photos/seed/kids/800/600", link: "/kids" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <Navigation />
      
      <VideoBanner 
        src="https://rupa-collections.s3.ap-south-1.amazonaws.com/hero.mp4"
        alt="Rupa Collections – Ethnic Elegance Redefined"
      />
      
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
      
      <Footer />
    </div>
  );
};

export default Index;
