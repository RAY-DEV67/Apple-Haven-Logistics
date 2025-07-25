import { Truck, Warehouse, Package, Globe, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: "Express Shipping",
      description:
        "Fast and reliable shipping solutions for urgent deliveries with real-time tracking.",
      features: ["Same-day delivery", "Express lanes", "Priority handling"],
    },
    {
      icon: <Warehouse className="w-12 h-12 text-primary" />,
      title: "Warehousing",
      description:
        "Secure storage facilities with advanced inventory management systems.",
      features: ["Climate control", "24/7 security", "Inventory tracking"],
    },
    {
      icon: <Package className="w-12 h-12 text-primary" />,
      title: "Packaging Solutions",
      description:
        "Professional packaging services to ensure your goods arrive safely.",
      features: [
        "Custom packaging",
        "Fragile handling",
        "Eco-friendly options",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "International Freight",
      description:
        "Global shipping solutions with customs clearance and documentation.",
      features: ["Customs handling", "Door-to-door", "Import/export"],
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Cargo Insurance",
      description:
        "Comprehensive insurance coverage for your valuable shipments.",
      features: ["Full coverage", "Quick claims", "Risk assessment"],
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Supply Chain",
      description:
        "End-to-end supply chain management and optimization services.",
      features: ["Route optimization", "Cost reduction", "Efficiency analysis"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-brand-text mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
