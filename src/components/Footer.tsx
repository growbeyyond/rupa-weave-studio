import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">RUPA'S</h3>
            <p className="font-inter text-primary-foreground/80 mb-4 max-w-md">
              Since 1971, we've been crafting exquisite ethnic fashion with love and legacy.
              From intricate tailoring to contemporary silhouettes, every piece tells a story.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-secondary transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-secondary transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-secondary transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="/traditional-sarees" className="hover:text-secondary transition-colors">Traditional Sarees</a></li>
              <li><a href="/occasional-lehengas" className="hover:text-secondary transition-colors">Occasional Lehengas</a></li>
              <li><a href="/party-gowns" className="hover:text-secondary transition-colors">Party Gowns</a></li>
              <li><a href="/casual-kurtis" className="hover:text-secondary transition-colors">Casual Kurtis</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/faq" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 font-inter text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@rupacollections.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Fashion Street, Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center font-inter text-sm">
          <p>&copy; 2024 Rupa Collections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;