const ScrollingOffers = () => {
  const offers = [
    "🎉 EXCLUSIVE OFFER! 🎊 MONSOON SALE 2025! 🛍️ Unlock 5% DISCOUNT on ALL items at Rupa's! Use Code: MONSOON25 ✦ Offer Valid till: 31 October, 2025 🚚 Rs. 250 OFF on Your First Purchase! 📦 Free Shipping on All Domestic Orders!",
    "🔥 HOT DEALS! 50% OFF on Premium Sarees! Limited Time Only! 💫 ✨ FLASH SALE: Buy 2 Get 1 FREE on Kurtas! 🎁 Special Festive Collection Now Live! 🌟",
    "💍 WEDDING SEASON SPECIAL! 40% OFF on Lehengas & Gowns! 👰 🎪 SUMMER COLLECTION: Light & Breezy Outfits! 🌺 New Arrivals Every Week! 🆕"
  ];

  return (
    <div className="bg-gradient-to-r from-primary via-pink-500 to-primary text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {offers.map((offer, index) => (
          <span key={index} className="mx-8 font-inter font-semibold text-sm">
            {offer}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {offers.map((offer, index) => (
          <span key={`duplicate-${index}`} className="mx-8 font-inter font-semibold text-sm">
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingOffers;