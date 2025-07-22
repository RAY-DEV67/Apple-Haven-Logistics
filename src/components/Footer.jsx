import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import appleLogoImg from '@/assets/apple-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-brand-text text-brand-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={appleLogoImg} 
                alt="Apple Haven Logistics" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Apple Haven</h3>
                <p className="text-sm text-brand-white/70">Logistics</p>
              </div>
            </div>
            <p className="text-brand-white/80 text-sm leading-relaxed">
              Your trusted logistics partner, delivering excellence in shipping, 
              warehousing, and distribution services worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Express Shipping</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Warehousing</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">International Freight</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Packaging Solutions</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Cargo Insurance</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Supply Chain Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-brand-white/80 hover:text-brand-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-brand-white/80 hover:text-brand-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-brand-white/80 hover:text-brand-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-brand-white/80 hover:text-brand-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Track Shipment</a></li>
              <li><a href="#" className="text-brand-white/80 hover:text-brand-white transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1" />
                <p className="text-brand-white/80">
                  123 Logistics Boulevard<br />
                  Commerce City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <p className="text-brand-white/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <p className="text-brand-white/80">info@applehavenlogistics.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-white/60 text-sm">
              © 2024 Apple Haven Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">Terms of Service</a>
              <a href="#" className="text-brand-white/60 hover:text-brand-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;