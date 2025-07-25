import { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'COLLECTIONS', href: '/collections' },
    { name: 'READYMADE SUITS', href: '/readymade-suits' },
    { name: 'NEW ARRIVALS', href: '/new-arrivals' },
    { name: 'KURTAS', href: '/kurtas' },
    { name: 'SAREES', href: '/sarees' },
    { name: 'DRESSES', href: '/dresses' },
    { name: 'BOTTOMS', href: '/bottoms' },
    { name: 'SUMMER', href: '/summer' },
    { name: 'SALE', href: '/sale' }
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="font-playfair text-3xl font-bold text-primary tracking-wider">
              RUPA'S
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
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
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
    </nav>
  );
};

export default Navigation;