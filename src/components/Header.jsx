import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import appleLogoImg from '@/assets/apple-logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-brand-white shadow-md relative z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span>info@applehavenlogistics.com</span>
            </div>
          </div>
          <div className="text-sm">
            24/7 Customer Support
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={appleLogoImg} 
              alt="Apple Haven Logistics" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-brand-text">Apple Haven</h1>
              <p className="text-sm text-muted-foreground">Logistics</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-brand-text hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-brand-text hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-brand-text hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-brand-text hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-brand-text"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-brand-text hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-brand-text hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-brand-text hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-brand-text hover:text-primary transition-colors">Contact</a>
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