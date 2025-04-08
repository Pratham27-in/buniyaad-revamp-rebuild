
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    category: "river-sand"
  },
  {
    id: 2,
    name: "Crushed Stone",
    description: "Premium crushed stone for various construction applications.",
    price: 1200,
    unit: "per ton",
    image: "/lovable-uploads/a44ed421-d363-427a-9758-1731bbc084b5.png",
    slug: "crushed-stone",
    category: "crushed-stone"
  },
  {
    id: 3,
    name: "Bricks",
    description: "Standard size red clay bricks for construction.",
    price: 8,
    unit: "per piece",
    image: "/lovable-uploads/56ca1bd4-fccb-49ac-adec-74fd6e4dfe81.png",
    slug: "bricks",
    category: "bricks"
  },
  {
    id: 4,
    name: "Cement",
    description: "Premium quality cement for all construction needs.",
    price: 350,
    unit: "per bag",
    image: "/lovable-uploads/534cadea-5947-4337-8bd2-9cb75f3d5e23.png",
    slug: "cement",
    category: "cement"
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory 
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-buniyaad-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-buniyaad-dark">Our Products</h1>
            <p className="text-gray-600 mt-2">Quality construction materials for your projects</p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button 
              variant={activeCategory === null ? "default" : "outline"}
              className={activeCategory === null ? "bg-buniyaad-orange hover:bg-buniyaad-orange/90" : ""}
              onClick={() => setActiveCategory(null)}
            >
              All Products
            </Button>
            {[...new Set(products.map(p => p.category))].map(category => (
              <Button 
                key={category} 
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-buniyaad-orange hover:bg-buniyaad-orange/90" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
