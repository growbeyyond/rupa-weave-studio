import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
}

interface ProductsGridProps {
  title?: string;
  collection: string;
  columns?: number;
}

// Mock products data
const mockProducts: Record<string, Product[]> = {
  sale: [
    {
      id: "1",
      title: "Silk Banarasi Saree",
      price: "₹4,999",
      originalPrice: "₹8,999",
      image: "https://picsum.photos/seed/saree1/400/500",
      badge: "60% OFF"
    },
    {
      id: "2",
      title: "Designer Lehenga Set",
      price: "₹12,999",
      originalPrice: "₹19,999",
      image: "https://picsum.photos/seed/lehenga1/400/500",
      badge: "35% OFF"
    },
    {
      id: "3",
      title: "Embroidered Kurti",
      price: "₹1,299",
      originalPrice: "₹2,499",
      image: "https://picsum.photos/seed/kurti1/400/500",
      badge: "48% OFF"
    },
    {
      id: "4",
      title: "Party Gown",
      price: "₹3,999",
      originalPrice: "₹6,999",
      image: "https://picsum.photos/seed/gown1/400/500",
      badge: "43% OFF"
    }
  ],
  "traditional-sarees": [
    {
      id: "5",
      title: "Pure Kanjivaram Saree",
      price: "₹15,999",
      image: "https://picsum.photos/seed/kanchi1/400/500"
    },
    {
      id: "6",
      title: "Handloom Cotton Saree",
      price: "₹2,999",
      image: "https://picsum.photos/seed/cotton1/400/500"
    }
  ]
};

const ProductsGrid = ({ title, collection, columns = 4 }: ProductsGridProps) => {
  const products = mockProducts[collection] || [];
  
  const gridCols = {
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className="w-full py-8 px-4">
      {title && (
        <h2 className="font-playfair text-3xl font-bold text-center mb-8 text-foreground">
          {title}
        </h2>
      )}
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
        {products.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-inter font-semibold text-foreground mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-inter font-bold text-primary text-lg">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-inter text-muted-foreground line-through text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;