
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Truck } from "lucide-react";
import GoogleMap from "./GoogleMap";

const Footer = () => {
  const deliveryLocations = ["Kanpur", "Lucknow", "Unnao", "Kanpur Dehat", "Mahoba", "Hamirpur"];
  
  const officeAddresses = [
    {
      name: "Kanpur Office",
      address: "Yogendra Vihar, Kanpur 208021",
      fullAddress: "Yogendra Vihar, Kanpur 208021, Uttar Pradesh, India"
    },
    {
      name: "Hamirpur Office",
      address: "Hamirpur, UP 210301",
      fullAddress: "Hamirpur, UP 210301, Uttar Pradesh, India"
    }
  ];

  return (
    <footer className="bg-buniyaad-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/lovable-uploads/333a7b92-28ea-4892-8388-22a34f651071.png"
                alt="Buniyaad Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-4 text-gray-300">
              Buniyaad is your trusted partner for all construction material needs. Building dreams together since 2022.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-buniyaad-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-buniyaad-orange">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-buniyaad-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-buniyaad-orange">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-buniyaad-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-buniyaad-orange">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-buniyaad-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-buniyaad-orange">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6 border-b border-gray-600 pb-2">Delivery Locations</h3>
            <div className="flex flex-wrap gap-2">
              {deliveryLocations.map(location => (
                <span key={location} className="bg-buniyaad-dark/50 text-gray-300 px-2 py-1 rounded text-xs flex items-center">
                  <Truck className="h-3 w-3 mr-1" /> {location}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/river-sand" className="text-gray-300 hover:text-buniyaad-orange">
                  River Sand
                </Link>
              </li>
              <li>
                <Link to="/products/crushed-stone" className="text-gray-300 hover:text-buniyaad-orange">
                  Crushed Stone
                </Link>
              </li>
              <li>
                <Link to="/products/bricks" className="text-gray-300 hover:text-buniyaad-orange">
                  Bricks
                </Link>
              </li>
              <li>
                <Link to="/products/cement" className="text-gray-300 hover:text-buniyaad-orange">
                  Cement
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6 border-b border-gray-600 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-buniyaad-orange" />
                <a href="tel:+917651853974" className="text-gray-300 hover:text-buniyaad-orange">
                  +91 7651853974
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-buniyaad-orange" />
                <a href="mailto:info@buniyaad.com" className="text-gray-300 hover:text-buniyaad-orange">
                  info@buniyaad.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Addresses with Maps */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Our Offices</h3>
            <div className="space-y-6">
              {officeAddresses.map((office, index) => (
                <div key={index}>
                  <div className="flex items-start mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-buniyaad-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">{office.name}</p>
                      <p className="text-sm text-gray-300">{office.address}</p>
                    </div>
                  </div>
                  <GoogleMap address={office.fullAddress} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Buniyaad. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-buniyaad-orange">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-buniyaad-orange">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
