
import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "River Sand",
    description: "High-quality river sand at special prices",
    price: 1350,
    originalPrice: 1500,
    unit: "per ton",
    discount: "10%",
    image: "/lovable-uploads/ddd71869-2d18-42d9-af38-80b39177e1d0.png",
    slug: "river-sand",
  },
  {
    id: 2,
    name: "Crushed Stone",
    description: "Premium crushed stone at discounted rates",
    price: 1080,
    originalPrice: 1200,
    unit: "per ton",
    discount: "10%",
    image: "/lovable-uploads/90c2fff1-681c-4683-b5b5-3bac5720ce8f.png",
    slug: "crushed-stone",
  },
  {
    id: 3,
    name: "Bricks",
    description: "Standard size red clay bricks at special prices",
    price: 7,
    originalPrice: 8,
    unit: "per piece",
    discount: "12.5%",
    image: "/lovable-uploads/8766d78b-d070-4a37-ba52-0be513132055.png",
    slug: "bricks",
  },
  {
    id: 4,
    name: "Cement",
    description: "Premium quality cement at discounted rates",
    price: 315,
    originalPrice: 350,
    unit: "per bag",
    discount: "10%",
    image: "/lovable-uploads/3da5d896-6671-4343-a0dd-3d5e126f812b.png",
    slug: "cement",
  },
];

const HotDeals = () => {
  return (
    <section className="py-10 bg-buniyaad-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Flame className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-2xl font-bold text-buniyaad-dark">Hot Deals</h2>
          </div>
          <Link to="/products">
            <Button variant="ghost" className="text-buniyaad-orange hover:text-buniyaad-orange/90">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount} OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-buniyaad-dark">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="mt-3 flex items-center">
                  <span className="font-bold text-buniyaad-orange">₹{product.price}</span>
                  <span className="text-gray-500 text-sm font-normal ml-1">{product.unit}</span>
                  <span className="ml-2 text-gray-500 text-sm line-through">₹{product.originalPrice}</span>
                </div>
                <Button 
                  className="w-full mt-3 bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
