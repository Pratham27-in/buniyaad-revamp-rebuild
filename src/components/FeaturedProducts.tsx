
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "River Sand",
    description: "High-quality river sand for construction.",
    price: 1500,
    unit: "per ton",
    image: "/lovable-uploads/ed20a8dc-5084-4e57-9cbf-049e86fdd3e6.png",
    slug: "river-sand",
  },
  {
    id: 2,
    name: "Crushed Stone",
    description: "Premium crushed stone for various construction applications.",
    price: 1200,
    unit: "per ton",
    image: "/lovable-uploads/a44ed421-d363-427a-9758-1731bbc084b5.png",
    slug: "crushed-stone",
  },
  {
    id: 3,
    name: "Bricks",
    description: "Standard size red clay bricks for construction.",
    price: 8,
    unit: "per piece",
    image: "/lovable-uploads/56ca1bd4-fccb-49ac-adec-74fd6e4dfe81.png",
    slug: "bricks",
  },
  {
    id: 4,
    name: "Cement",
    description: "Premium quality cement for all construction needs.",
    price: 350,
    unit: "per bag",
    image: "/lovable-uploads/534cadea-5947-4337-8bd2-9cb75f3d5e23.png",
    slug: "cement",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-buniyaad-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-buniyaad-dark">Featured Products</h2>
          <p className="text-gray-600 mt-2">Quality construction materials for your projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/products/${product.slug}`}>
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
              </Link>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg text-buniyaad-dark">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="mt-3 font-bold text-buniyaad-orange">
                  ₹{product.price} <span className="text-gray-500 text-sm font-normal">{product.unit}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <Button variant="outline" className="border-buniyaad-orange text-buniyaad-orange hover:bg-buniyaad-orange hover:text-white">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
