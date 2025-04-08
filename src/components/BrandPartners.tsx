
import { useState } from "react";

const brands = [
  {
    id: 1,
    name: "UltraTech Cement",
    logo: "/lovable-uploads/14f754b6-ca50-4cb3-94e7-5719e2a86fb1.png",
  },
  {
    id: 2,
    name: "ACC Cement",
    logo: "/lovable-uploads/490dd0b6-ff92-4973-bb45-c0230fc4bf99.png",
  },
  {
    id: 3,
    name: "Ambuja Cement",
    logo: "/lovable-uploads/1a3f50c2-92e9-40bd-8da8-88470ce48178.png",
  },
];

const BrandPartners = () => {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-buniyaad-dark">Our Brand Partners</h2>
          <p className="text-gray-600 mt-2">We collaborate with the best brands in the industry</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative group"
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div className={`w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-white rounded-lg p-4 transition-all ${
                hoveredBrand === brand.id ? "shadow-lg scale-105" : "shadow"
              }`}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className={`absolute inset-x-0 bottom-0 bg-buniyaad-orange text-white text-center py-2 rounded-b-lg transition-opacity ${
                hoveredBrand === brand.id ? "opacity-100" : "opacity-0"
              }`}>
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
