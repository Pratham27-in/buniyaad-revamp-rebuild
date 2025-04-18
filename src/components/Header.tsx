
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

const productCategories = [
  {
    name: "River Sand",
    slug: "river-sand",
    image: "/lovable-uploads/ed20a8dc-5084-4e57-9cbf-049e86fdd3e6.png"
  },
  {
    name: "Crushed Stone",
    slug: "crushed-stone",
    image: "/lovable-uploads/a44ed421-d363-427a-9758-1731bbc084b5.png"
  },
  {
    name: "Bricks",
    slug: "bricks",
    image: "/lovable-uploads/56ca1bd4-fccb-49ac-adec-74fd6e4dfe81.png"
  },
  {
    name: "Cement",
    slug: "cement",
    image: "/lovable-uploads/534cadea-5947-4337-8bd2-9cb75f3d5e23.png"
  }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/333a7b92-28ea-4892-8388-22a34f651071.png"
                alt="Buniyaad Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-buniyaad-dark hover:text-buniyaad-orange px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-sm font-medium">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 grid grid-cols-2 gap-2 p-2 bg-white">
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.slug} asChild className="p-2 hover:bg-buniyaad-orange/10">
                    <Link to={`/products/${category.slug}`} className="w-full flex items-center">
                      <img src={category.image} alt={category.name} className="w-8 h-8 object-cover rounded mr-2" />
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="p-2 col-span-2 hover:bg-buniyaad-orange/10 mt-2 border-t pt-3">
                  <Link to="/products" className="w-full flex items-center justify-center font-medium text-buniyaad-orange">
                    View All Products
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="text-buniyaad-dark hover:text-buniyaad-orange px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-buniyaad-dark hover:text-buniyaad-orange px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <a href="tel:+917651853974" className="text-buniyaad-dark hover:text-buniyaad-orange px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-1" /> 
              <span>7651853974</span>
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-buniyaad-orange text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-buniyaad-orange hover:bg-buniyaad-orange/90 text-white">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-2">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-buniyaad-orange text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  0
                </span>
              </Button>
            </Link>
            <a href="tel:+917651853974" className="mr-3">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5 text-buniyaad-dark" />
              </Button>
            </a>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-buniyaad-dark hover:text-buniyaad-orange focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-buniyaad-dark hover:text-buniyaad-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative">
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-buniyaad-dark hover:text-buniyaad-orange"
              >
                Products
              </button>
              <div className="pl-4 grid grid-cols-2 gap-2">
                {productCategories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/products/${category.slug}`}
                    className="flex items-center px-3 py-2 rounded-md text-sm text-buniyaad-dark hover:text-buniyaad-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <img src={category.image} alt={category.name} className="w-6 h-6 object-cover rounded mr-2" />
                    <span>{category.name}</span>
                  </Link>
                ))}
                <Link
                  to="/products"
                  className="flex items-center col-span-2 px-3 py-2 rounded-md text-sm font-medium text-buniyaad-orange hover:bg-buniyaad-orange/10 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Products
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-buniyaad-dark hover:text-buniyaad-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-buniyaad-dark hover:text-buniyaad-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Link
                    to="/login"
                    className="w-full block text-center px-4 py-2 rounded bg-white border border-buniyaad-dark text-buniyaad-dark hover:bg-buniyaad-dark hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
                <div className="ml-3">
                  <Link
                    to="/register"
                    className="w-full block text-center px-4 py-2 rounded bg-buniyaad-orange text-white hover:bg-buniyaad-orange/90 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
