import { Card, CardContent } from "./ui/card";
import { User } from "lucide-react";

const Board = () => {
  const boardMembers = [
    { position: "Chairman", name: "TBD" },
    { position: "Managing Director", name: "Philips John Ameh" },
    { position: "Chief Security Officer", name: "TBD" },
    { position: "Secretary", name: "TBD" },
    { position: "Head Of Marketing", name: "Onyeyechi Njoku Cynthia" },
  ];

  return (
    <section id="board" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Board of Directors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced leadership team dedicated to excellence in recruitment and human resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {boardMembers.map((member, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
