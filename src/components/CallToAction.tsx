
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-buniyaad-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help with Your Construction Project?
            </h2>
            <p className="text-gray-300 mb-6">
              Get a customized quote for your construction materials. Our experts will help you find the best solutions for your project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote">
                <Button className="bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/become-seller">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-buniyaad-dark">
                  Become a Seller
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-buniyaad-orange/20 rounded-lg"></div>
            <img
              src="/lovable-uploads/43374e0b-2017-4c12-b260-4d72f725f5ab.png"
              alt="Construction Site"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
