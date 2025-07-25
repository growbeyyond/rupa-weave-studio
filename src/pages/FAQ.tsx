import OfferBanner from '@/components/OfferBanner';
import ScrollingOffers from '@/components/ScrollingOffers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Shipping & Delivery",
      answer: "We deliver across India in 3-5 business days with free shipping on orders above ₹2,000. For international orders, we ship globally within 2 weeks. Express delivery options are available for urgent orders."
    },
    {
      question: "Returns & Exchanges",
      answer: "We offer easy 7-day returns and exchanges. Items must be in original condition with tags attached. Reverse pickup is available in most major cities. Custom/altered items cannot be returned."
    },
    {
      question: "Size Guide",
      answer: "Each product page includes detailed measurements and size charts. Our sizes range from XS to 3XL. For custom sizing or if you're between sizes, please contact our customer support team for personalized assistance."
    },
    {
      question: "Care Instructions",
      answer: "Most of our ethnic wear requires gentle care. Dry cleaning is recommended for silk sarees and heavily embroidered pieces. Cotton items can be hand-washed in cold water. Detailed care instructions are provided with each purchase."
    },
    {
      question: "Customization Services",
      answer: "Yes, we offer customization services for most of our products. This includes size alterations, color changes, and design modifications. Customization takes 7-14 additional days and may incur extra charges."
    },
    {
      question: "Bulk Orders",
      answer: "We offer special pricing for bulk orders (10+ pieces). Perfect for weddings, corporate events, or boutique owners. Contact our wholesale team for custom quotations and exclusive designs."
    },
    {
      question: "Payment Options",
      answer: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD) for orders within India. EMI options are available for orders above ₹5,000 through our banking partners."
    },
    {
      question: "Quality Assurance",
      answer: "Every piece undergoes strict quality checks before dispatch. We work with certified artisans and use premium fabrics. If you receive a defective item, we'll provide immediate replacement or full refund."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <OfferBanner />
      <ScrollingOffers />
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our products, services, and policies.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-inter font-semibold text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center bg-card rounded-lg p-8">
          <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our customer support team is here to help you with any additional questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918978458377" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call Us: +91 89784 58377
            </a>
            <a 
              href="mailto:info@rupacollections.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Floating Components */}
      <WhatsAppChat />
      <ShoppingCartModal />
    </div>
  );
};

export default FAQ;