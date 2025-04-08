
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-buniyaad-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              Buniyaad is your trusted partner for all construction material needs. Building dreams together.
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
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-buniyaad-orange" />
                <span className="text-gray-300">
                  123 Construction Street, Building City, 400001
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-buniyaad-orange" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-buniyaad-orange">
                  +91 9876543210
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
