import { useState } from 'react';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';

const ShoppingCartModal = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalItems, getTotalPrice } = useCartStore();

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-hidden animate-slide-in-right">
        {/* Header */}
        <div className="bg-primary text-white p-4 flex items-center justify-between">
          <h2 className="font-playfair text-xl font-bold">Shopping Cart ({getTotalItems()})</h2>
          <button onClick={toggleCart} className="text-white/80 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm">Add some beautiful items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.title}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-primary">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">{item.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t bg-white p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg text-primary">₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={toggleCart}>
                Continue Shopping
              </Button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Free shipping on orders above ₹2,000
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartModal;