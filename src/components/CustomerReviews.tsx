import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      review: "Absolutely love my Banarasi saree from Rupa's! The quality is exceptional and the embroidery work is stunning. Perfect for my wedding function!",
      product: "Silk Banarasi Saree"
    },
    {
      name: "Anita Gupta", 
      location: "Delhi",
      rating: 5,
      review: "The lehenga I ordered exceeded my expectations. Beautiful craftsmanship and the fit was perfect. Received so many compliments at the function!",
      product: "Designer Lehenga Set"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad", 
      rating: 5,
      review: "Fast delivery and amazing quality! The kurti is exactly as shown in the pictures. Will definitely order again from Rupa Collections.",
      product: "Embroidered Kurti"
    },
    {
      name: "Kavya Reddy",
      location: "Hyderabad",
      rating: 5, 
      review: "Best ethnic wear store! The customer service is excellent and the variety is amazing. My go-to place for all occasions.",
      product: "Party Gown"
    },
    {
      name: "Sneha Joshi",
      location: "Pune",
      rating: 5,
      review: "Love the traditional collection! The fabric quality is top-notch and the designs are unique. Highly recommend Rupa Collections!",
      product: "Salwar Kameez Set"
    }
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Join thousands of happy customers who love our ethnic wear collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="font-inter text-gray-700 mb-4 line-height-relaxed">
                "{review.review}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-inter font-semibold text-foreground">
                  {review.name}
                </h4>
                <p className="font-inter text-sm text-muted-foreground">
                  {review.location} • Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary text-primary-foreground p-6 rounded-lg inline-block">
            <h3 className="font-playfair text-2xl font-bold mb-2">
              ⭐ 4.9/5 Customer Rating
            </h3>
            <p className="font-inter">Based on 2,500+ reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;