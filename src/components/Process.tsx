import { FileText, Users, GraduationCap, CheckCircle } from "lucide-react";
import trainingImage from "@/assets/training.jpg";

const Process = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Application & Interview",
      description: "Daily interviews conducted in our offices and online with comprehensive data collection",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vetting & Documentation",
      description: "Thorough verification of guarantors and documentation for transparency and security",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Training",
      description: "Free comprehensive training every Monday and Wednesday to ensure job readiness",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Deployment",
      description: "Placement with suitable organizations with full documentation and ongoing support",
    },
  ];

  return (
    <section className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to ensure the best match between candidates and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary">{step.icon}</div>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={trainingImage}
              alt="Professional training session"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Training Schedule</h3>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Every Monday and Wednesday at our office
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We conduct comprehensive training to our applicants before deployment. This is where we pass on 
            the values and vision of our company, ensuring customer satisfaction is always key.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
