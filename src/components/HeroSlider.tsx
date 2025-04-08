
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/43374e0b-2017-4c12-b260-4d72f725f5ab.png",
    title: "Quality Building Materials",
    description: "Find all your construction needs at one place",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 2,
    image: "/lovable-uploads/a0598f22-0bbb-4f38-b25b-1a4240706803.png",
    title: "Professional Construction Solutions",
    description: "Building dreams, one brick at a time",
    buttonText: "Get a Quote",
    buttonLink: "/quote",
  },
  {
    id: 3,
    image: "/lovable-uploads/550b6ea5-b6c9-406e-bd91-f1e63f24e150.png",
    title: "Trusted Suppliers",
    description: "Partner with the best in the industry",
    buttonText: "Become a Seller",
    buttonLink: "/become-seller",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="h-[300px] md:h-[500px] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl text-white mb-6">{slide.description}</p>
              <Link to={slide.buttonLink}>
                <Button className="bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white px-6 py-2">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
