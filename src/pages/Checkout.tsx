import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useCartStore } from '@/stores/cartStore';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Truck, Shield, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalItems, getTotalPrice, clearCart } = useCartStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Contact Information
    email: '',
    phone: '',
    
    // Shipping Address
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    
    // Billing Address
    sameAsShipping: true,
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingApartment: '',
    billingCity: '',
    billingState: '',
    billingPincode: '',
    billingCountry: 'India',
    
    // Order Notes
    orderNotes: '',
    
    // Payment Method
    paymentMethod: 'cod'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 2000 ? 0 : 99;
  const finalTotal = totalPrice + shippingCost;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const required = ['email', 'phone', 'firstName', 'lastName', 'address', 'city', 'state', 'pincode'];
    
    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Missing Information",
          description: `Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
          variant: "destructive",
        });
        return false;
      }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    
    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate order number
      const orderNumber = `RC${Date.now()}`;
      
      // Clear cart
      clearCart();
      
      toast({
        title: "Order Placed Successfully!",
        description: `Your order #${orderNumber} has been received. You will receive a confirmation email shortly.`,
      });
      
      // Navigate to success page
      navigate(`/order-success?order=${orderNumber}`);
      
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <OfferBanner />
        <ScrollingOffers />
        <Navigation />
        
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="font-playfair text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Add some beautiful items to proceed with checkout.</p>
          <Button onClick={() => navigate('/')}>Continue Shopping</Button>
        </div>
        
        <Footer />
        <WhatsAppChat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
          <h1 className="font-playfair text-3xl font-bold">Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="9876543210"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Street address"
                  />
                </div>
                
                <div>
                  <Label htmlFor="apartment">Apartment, suite, etc.</Label>
                  <Input
                    id="apartment"
                    value={formData.apartment}
                    onChange={(e) => handleInputChange('apartment', e.target.value)}
                    placeholder="Apartment, suite, unit, building, floor, etc."
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code *</Label>
                    <Input
                      id="pincode"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Order Notes (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.orderNotes}
                  onChange={(e) => handleInputChange('orderNotes', e.target.value)}
                  placeholder="Special instructions for your order"
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="cod" className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Cash on Delivery
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="online"
                      name="payment"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="online" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Online Payment (Coming Soon)
                    </Label>
                  </div>
                </div>
                
                {formData.paymentMethod === 'cod' && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Pay with cash when your order is delivered to your doorstep.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Qty: {item.quantity}</span>
                          {item.size && <span>• {item.size}</span>}
                          {item.color && <span>• {item.color}</span>}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-primary">{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Order Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {shippingCost === 0 && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      You qualify for free shipping!
                    </p>
                  </div>
                )}

                <Button 
                  onClick={handlePlaceOrder}
                  disabled={isProcessing || formData.paymentMethod === 'online'}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  By placing your order, you agree to our Terms & Conditions
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Checkout;