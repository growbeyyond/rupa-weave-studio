import heroModel1 from '@/assets/hero-model1.jpg';
import heroModel2 from '@/assets/hero-model2.jpg';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background image with models */}
      <div className="absolute inset-0 flex">
        {/* Left model */}
        <div className="w-1/3 relative">
          <img
            src={heroModel1}
            alt="Summer Collection - Pink Kurta"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Center content */}
        <div className="w-1/3 bg-gradient-to-b from-pink-300 to-pink-400 flex items-center justify-center relative">
          <div className="text-center text-white px-8">
            <div className="mb-8">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wider mb-2 text-white">
                RUPA'S
              </h1>
              <p className="text-lg tracking-[0.2em] opacity-90 text-white">THE COMPLETE LADIES STORE</p>
            </div>
            
            <div className="mb-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-2 text-amber-900">
                Celebrate your big day with
              </h2>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-2 text-amber-900">
                the elegance of our
              </h2>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-amber-900">
                Wedding
              </h2>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-amber-900">
                Collection
              </h2>
              
              {/* Decorative ornament */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-0.5 bg-white/60"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative border */}
          <div className="absolute inset-x-8 inset-y-16 border-2 border-white/30 rounded-3xl"></div>
        </div>
        
        {/* Right model */}
        <div className="w-1/3 relative">
          <img
            src={heroModel2}
            alt="Summer Collection - Green Dress"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Secondary offer banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3">
        <p className="font-inter text-sm font-medium tracking-wide">
          GET RS.250 OF FIRST PURCHASE | USE CODE : NEW250
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;