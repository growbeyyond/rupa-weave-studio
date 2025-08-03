import { useState } from 'react';
import { X, Heart, ShoppingBag, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';

interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  fabric?: string;
  care?: string;
  occasion?: string;
}

interface ProductComparisonProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
}

const ProductComparison = ({ products, isOpen, onClose, onRemoveProduct }: ProductComparisonProps) => {
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    });
  };

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Compare Products ({products.length})
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-auto">
          {products.length === 0 ? (
            <div className="text-center py-8">
              <Scale className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No products to compare</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => onRemoveProduct(product.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  
                  <h3 className="font-medium mb-2">{product.title}</h3>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through text-xs">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{product.category}</span>
                    </div>
                    
                    {product.fabric && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fabric:</span>
                        <span>{product.fabric}</span>
                      </div>
                    )}
                    
                    {product.occasion && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Occasion:</span>
                        <span>{product.occasion}</span>
                      </div>
                    )}
                    
                    {product.care && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Care:</span>
                        <span>{product.care}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleWishlistToggle(product)}
                      className="flex-1"
                    >
                      <Heart 
                        className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="flex-1"
                    >
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductComparison;