
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/products/river-sand" className="w-full">River Sand</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/crushed-stone" className="w-full">Crushed Stone</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/bricks" className="w-full">Bricks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/cement" className="w-full">Cement</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="text-buniyaad-dark hover:text-buniyaad-orange px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-buniyaad-dark hover:text-buniyaad-orange px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
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
              <div className="pl-4 space-y-1">
                <Link
                  to="/products/river-sand"
                  className="block px-3 py-2 rounded-md text-sm text-buniyaad-dark hover:text-buniyaad-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  River Sand
                </Link>
                <Link
                  to="/products/crushed-stone"
                  className="block px-3 py-2 rounded-md text-sm text-buniyaad-dark hover:text-buniyaad-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Crushed Stone
                </Link>
                <Link
                  to="/products/bricks"
                  className="block px-3 py-2 rounded-md text-sm text-buniyaad-dark hover:text-buniyaad-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bricks
                </Link>
                <Link
                  to="/products/cement"
                  className="block px-3 py-2 rounded-md text-sm text-buniyaad-dark hover:text-buniyaad-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cement
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
