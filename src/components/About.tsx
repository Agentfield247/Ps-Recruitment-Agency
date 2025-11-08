import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About P's Recruitment Agency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established in November 2023 in FCT Abuja, we are dedicated to bridging the gap between 
            talented professionals and organizations in need of skilled workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={teamImage}
              alt="Professional team collaboration"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Who We Are</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              P's Recruitment Agency is an organization committed to providing jobs for the unemployed in our society. 
              We recruit and train workers across various fields including Civil Engineers, Nurses, Marketers, Teachers, 
              Office Assistants, Chefs, Drivers, Hotel Workers, Managers, and many more.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a human resources organization, our main goal is to utilize the potential of our youths and job seekers 
              and meaningfully engage them to heighten the dreams of the organizations they are deployed to work for.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To supply top-notch staff who provide adequate and satisfactory service in any field, 
                aligned with company rules and establishing a cooperative working environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Through Human Resource Management, we provide affordable, satisfactory service to our clients 
                and esteemed customers through the supply of various workers in any field of endeavor.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Core Values</h3>
              <p className="text-muted-foreground">
                Our core values are Integrity, Honesty, and Faith. We believe in the impossible and draw from 
                years of experience working with leading organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
