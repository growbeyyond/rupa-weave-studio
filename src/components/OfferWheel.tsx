import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

const OfferWheel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', mobile: '' });

  const offers = [
    '10% OFF',
    '15% OFF', 
    '20% OFF',
    'FREE SHIPPING',
    '5% OFF',
    'TRY AGAIN',
    '25% OFF',
    'FLAT ₹500 OFF'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenWheel = localStorage.getItem('hasSeenOfferWheel');
      if (!hasSeenWheel) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const spinWheel = () => {
    setIsSpinning(true);
    setResult(null);

    setTimeout(() => {
      const randomOffer = offers[Math.floor(Math.random() * offers.length)];
      setResult(randomOffer);
      setIsSpinning(false);
      setShowForm(true);
      localStorage.setItem('hasSeenOfferWheel', 'true');
    }, 3000);
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "918978458377"; // Updated WhatsApp number
    const message = `🎉 Hi! I just won ${result} from Rupa's offer wheel!
    
My Details:
📱 Name: ${userDetails.name}
📞 Mobile: ${userDetails.mobile}

I'm interested in your ethnic wear collection. Please share more details about the offer!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const closeWheel = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenOfferWheel', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative animate-scale-in">
        <button
          onClick={closeWheel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
            🎊 Special Offer Just For You! 🎊
          </h2>
          <p className="text-gray-600">Spin the wheel to unlock exclusive discounts!</p>
        </div>

        <div className="relative w-64 h-64 mx-auto mb-6">
          {/* Wheel */}
          <div 
            className={`w-full h-full rounded-full border-8 border-primary relative overflow-hidden ${
              isSpinning ? 'animate-spin-slow' : ''
            }`}
            style={{
              background: `conic-gradient(
                #ec4899 0deg 45deg,
                #f97316 45deg 90deg,
                #eab308 90deg 135deg,
                #22c55e 135deg 180deg,
                #3b82f6 180deg 225deg,
                #8b5cf6 225deg 270deg,
                #ef4444 270deg 315deg,
                #ec4899 315deg 360deg
              )`
            }}
          >
            {offers.map((offer, index) => (
              <div
                key={index}
                className="absolute flex items-center justify-center text-white font-bold text-[10px]"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '60px',
                  height: '30px',
                  transform: `translate(-50%, -50%) rotate(${index * 45 + 22.5}deg) translateY(-60px)`,
                  transformOrigin: '50% 60px',
                  textAlign: 'center',
                  lineHeight: '1.1',
                  padding: '2px'
                }}
              >
                <span 
                  style={{ 
                    transform: `rotate(-${index * 45 + 22.5}deg)`,
                    display: 'block',
                    whiteSpace: 'nowrap',
                    fontSize: offer.length > 8 ? '8px' : '10px'
                  }}
                >
                  {offer}
                </span>
              </div>
            ))}
          </div>
          
          {/* Pointer */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-800 z-10"></div>
        </div>

        {result && !showForm && (
          <div className="bg-primary text-white p-4 rounded-lg mb-4 animate-bounce-gentle">
            <h3 className="font-bold text-lg">🎉 Congratulations! 🎉</h3>
            <p className="text-2xl font-bold">{result}</p>
            <p className="text-sm mt-2">Use code: <strong>SPIN{result.replace(/[^0-9]/g, '') || '25'}</strong></p>
          </div>
        )}

        {result && showForm && (
          <div className="space-y-4">
            <div className="bg-primary text-white p-4 rounded-lg mb-4">
              <h3 className="font-bold text-lg">🎉 You Won: {result}! 🎉</h3>
              <p className="text-sm">Please share your details to claim your offer</p>
            </div>
            
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Full Name"
                value={userDetails.name}
                onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                required
              />
              <input
                type="tel"
                placeholder="Your Mobile Number"
                value={userDetails.mobile}
                onChange={(e) => setUserDetails({...userDetails, mobile: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>
        )}

        {!result && (
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSpinning ? 'Spinning...' : 'SPIN TO WIN!'}
          </button>
        )}

        {result && showForm && (
          <button
            onClick={sendToWhatsApp}
            disabled={!userDetails.name || !userDetails.mobile}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>📱</span>
            Claim Offer via WhatsApp
          </button>
        )}
      </div>
    </div>
  );
};

export default OfferWheel;