import OfferBanner from '@/components/OfferBanner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-6">
            About Rupa Collections
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://picsum.photos/seed/heritage/600/400" 
                alt="Rupa Collections Heritage" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Our Heritage
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 1971, Rupa Collections has been synonymous with exquisite ethnic fashion. 
                What started as a small boutique in the heart of Mumbai has grown into a beloved 
                brand that celebrates India's rich textile traditions while embracing contemporary 
                design sensibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intricate hand-embroidered sarees to contemporary silhouettes, we craft 
                every piece with love, attention to detail, and respect for the artisans who 
                bring our designs to life.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-2xl font-bold text-primary">50+</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Years of Legacy</h3>
              <p className="text-muted-foreground">Trusted by generations of women across India</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-2xl font-bold text-primary">1000+</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Designs</h3>
              <p className="text-muted-foreground">Carefully curated collection of ethnic wear</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-2xl font-bold text-primary">100K+</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Happy Customers</h3>
              <p className="text-muted-foreground">Satisfied customers worldwide</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 mb-16">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center text-lg">
              To preserve and celebrate India's rich textile heritage while creating contemporary 
              fashion that empowers women to express their unique style. We believe that every 
              woman deserves to feel beautiful, confident, and connected to her cultural roots.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;