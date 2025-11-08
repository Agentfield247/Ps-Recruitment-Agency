import { Users, GraduationCap, Briefcase, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Recruitment",
      description: "We conduct daily interviews both in our offices and online. We collect data, verify guarantors, and ensure proper vetting before deployment.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-accent" />,
      title: "Training",
      description: "Free training sessions every Monday and Wednesday where we pass on our values, vision, and professional standards to ensure customer satisfaction.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Deployment",
      description: "We deploy qualified staff to various organizations, providing all necessary documentation and maintaining records for future reference.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Engineering Services",
      description: "As a subsidiary service, we provide engineering solutions including sales and servicing of generators and power plant equipment.",
    },
  ];

  const trainingFocus = [
    { area: "Security", icon: "🛡️" },
    { area: "Administration", icon: "📊" },
    { area: "Hospitality", icon: "🏨" },
    { area: "Logistics", icon: "🚚" },
  ];

  return (
    <section id="services" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive recruitment and training solutions tailored to meet your organizational needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-section-bg rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Training Focus Areas
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {trainingFocus.map((focus, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{focus.icon}</div>
                <h4 className="text-xl font-semibold text-foreground">{focus.area}</h4>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Training is provided free of charge to ensure compliance and excellence at deployment locations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
