import { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import SearchModal from './SearchModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const { getTotalItems: getWishlistItems } = useWishlistStore();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'TRADITIONAL SAREES', href: '/traditional-sarees' },
    { name: 'OCCASIONAL LEHENGAS', href: '/occasional-lehengas' },
    { name: 'KURTAS', href: '/kurtas' },
    { name: 'PARTY WEAR', href: '/party-wear' },
    { name: 'MAGGAM WORKS', href: '/maggam-works' },
    { name: 'COMPUTER EMBROIDERY', href: '/computer-embroidery' },
    { name: 'SALE', href: '/sale' }
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="/lovable-uploads/a9000f64-a7a2-42a9-bd7f-f7144cfca25d.png" 
                alt="Rupa Collections - The Complete Ladies Store" 
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-inter text-foreground hover:text-primary text-sm font-medium tracking-wide transition-colors uppercase"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <a href="/wishlist">
                <Heart className="h-5 w-5" />
                {getWishlistItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getWishlistItems()}
                  </span>
                )}
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleCart} className="relative">
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Button>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-inter text-foreground hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
};

export default Navigation;