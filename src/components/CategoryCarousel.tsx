import { Card, CardContent } from "@/components/ui/card";

interface CategoryItem {
  title: string;
  image: string;
  link: string;
}

interface CategoryCarouselProps {
  items: CategoryItem[];
}

const CategoryCarousel = ({ items }: CategoryCarouselProps) => {
  return (
    <div className="w-full py-8">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="min-w-[280px] group cursor-pointer"
          >
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;