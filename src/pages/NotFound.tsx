import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center max-w-md">
          <h1 className="font-playfair text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
