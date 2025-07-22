import { Users, Award, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      number: "50+",
      label: "Global Partners"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "99.9%",
      label: "Success Rate"
    }
  ];

  return (
    <section id="about" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-brand-text mb-6">
                About Apple Haven Logistics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to revolutionize the logistics industry, Apple Haven Logistics 
                has been your trusted partner for over 15 years. We combine cutting-edge technology 
                with personalized service to deliver exceptional results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence, safety, and reliability has made us a leader in the 
                logistics sector. From small packages to large freight, we handle every shipment 
                with the utmost care and precision.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-brand-text">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-brand-text">Advanced Technology</h4>
                    <p className="text-muted-foreground">Real-time tracking and automated systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-brand-text">Expert Team</h4>
                    <p className="text-muted-foreground">Experienced professionals dedicated to your success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-brand-text">Global Network</h4>
                    <p className="text-muted-foreground">Worldwide partnerships for seamless delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-brand-white p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-brand-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;