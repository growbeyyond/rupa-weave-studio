import { useState, useEffect } from 'react';

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const endTime = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now
    
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = endTime.getTime() - now;
      
      if (diff <= 0) {
        setTimeLeft('ENDED');
        clearInterval(timer);
        return;
      }
      
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-2 px-4 font-inter font-semibold text-sm">
      ⏰ GRAND SUMMER SALE ends in <span className="font-bold">{timeLeft}</span> – code <strong>SUMMER60</strong>
    </div>
  );
};

export default OfferBanner;