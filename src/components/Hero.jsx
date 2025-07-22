import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-gray to-brand-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
                Your Trusted
                <span className="text-primary block">Logistics Partner</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Apple Haven Logistics delivers excellence in shipping, warehousing, and distribution. 
                We ensure your cargo reaches its destination safely, on time, every time.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="text-brand-text">Real-time tracking & monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="text-brand-text">Nationwide distribution network</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="text-brand-text">24/7 customer support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Get Free Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Logistics Operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-brand-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-brand-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;