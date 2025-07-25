import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandDetails from "../json/brandDetails";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-brand-white shadow-md relative z-50">
      {/* Top contact bar */}

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={BrandDetails.logo}
              alt="Apple Haven Logistics"
              className="w-20 h-20 rounded-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-brand-text hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-brand-text hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-brand-text hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-brand-text hover:text-primary transition-colors"
            >
              Contact
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-brand-text" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-brand-text hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-brand-text hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-brand-text hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-brand-text hover:text-primary transition-colors"
              >
                Contact
              </a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors w-full">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
