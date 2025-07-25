import { useSearchParams, useNavigate } from 'react-router-dom';
import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Truck, Phone, Mail } from 'lucide-react';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderNumber = searchParams.get('order') || 'RC' + Date.now();

  return (
    <div className="min-h-screen bg-background">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
          <h1 className="font-playfair text-4xl font-bold text-green-600 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-muted-foreground">
            Thank you for your order. We've received your order and will process it shortly.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">Order Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Order Number:</span>
                    <span className="font-bold text-primary">#{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Order Date:</span>
                    <span>{new Date().toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Payment Method:</span>
                    <span>Cash on Delivery</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Expected Delivery:</span>
                    <span className="font-bold text-green-600">
                      {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-bold mb-4">What's Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-sm text-muted-foreground">
                        We'll prepare your items and update you via SMS/Email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Your order will be delivered within 5-7 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-primary">+91 89784 58377</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-primary">info@rupacollections.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/')} variant="outline" size="lg">
            Continue Shopping
          </Button>
          <Button onClick={() => window.print()} size="lg">
            Print Order Details
          </Button>
        </div>

        {/* Order Tracking Note */}
        <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold mb-2">Track Your Order</h3>
          <p className="text-muted-foreground">
            We'll send you tracking information via SMS and email once your order ships. 
            You can also call us at +91 89784 58377 for order updates.
          </p>
        </div>
      </div>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default OrderSuccess;