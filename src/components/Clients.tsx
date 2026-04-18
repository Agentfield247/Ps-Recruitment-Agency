import { Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Clients = () => {
  const clients = [
    { name: "Mayfair Collection Unisex Saloon", location: "Maitama, FCT Abuja" },
    { name: "Rezor Contractors Nigeria Limited", location: "Jabi, FCT Abuja" },
    { name: "Desco Drilling Company", location: "Gwagwalada, FCT Abuja" },
    { name: "Potter's Field Academy", location: "Gwagwalada, FCT Abuja" },
    { name: "Silverstarcoop Micro Finance Bank", location: "Jabi, FCT Abuja" },
    { name: "Annville-Chloe Nursery And Primary School", location: "Dukpa Gwagwalada, FCT Abuja" },
    { name: "Al-Nura International Nigeria Limited", location: "Gwagwalada, FCT Abuja" },
    { name: "Hajiya Restaurant", location: "Bumpia Road, Kano" },
    { name: "Tim-Kenny Bakery", location: "Gwagwalada, FCT Abuja" },
    { name: "Cossy Rest Hotel", location: "Gwagwalada, FCT Abuja" },
    { name: "Cossy Rest Hotel", location: "Enugu" },
    { name: "Cuisine Restaurant Specialist Hospital", location: "Gwagwalada, FCT Abuja" },
    { name: "Piccadilly", location: "Behind NNPC Tower Area 10, FCT Abuja" },
    { name: "Khia Super Market And Pharmacy", location: "Lugbe, FCT Abuja" },
    { name: "Marvin Fancy", location: "Lugbe, FCT Abuja" },
    { name: "Faz Beauty Saloon", location: "Banez Wuse 2, FCT Abuja" },
    { name: "Ladies Beauty World", location: "Banez Wuse 2, FCT Abuja" },
    { name: "Too Ventures", location: "Gwagwalada, FCT Abuja" },
    { name: "Pink And Blues", location: "Wuse Market, FCT Abuja" },
    { name: "Depro Lodge", location: "Lugbe, FCT Abuja" },
    { name: "Olatunji Prestige Nigeria Limited", location: "Phase 1 Gwagwalada, FCT Abuja" },
    { name: "Havana Hotel And Suites", location: "Chika Airport Road, FCT Abuja" },
      { name: "Jumken International IT Limited", location: "Lugbe, FCT Abuja" },
    { name: "Doctor Ade House", location: "Utako, FCT Abuja" },
    { name: "Zara Unisex Saloon", location: "Lugbe Market, FCT Abuja" },
  ];

  return (
    <section id="clients" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Valued Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across Nigeria. We focus on creating conducive working 
            environments and ensuring fair compensation for our applicants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-accent text-accent-foreground rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-6">Technical Partners</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-4">
              Our technical partners include G4S Securicor in security, tracking, training, and deployment.
            </p>
            <p className="text-lg">
              We also represent Mikano Generators, John Holt Generators, and Veranox Point Integrated Ltd 
              in sales of generators and power plant equipment such as inverters, transformers, solar systems, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
