import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      details: "Number 2 Akinsaya Street Behind GTbank Gwagwalada, FCT Abuja",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: "Office: 08145427009",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "09038787272",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "Monday - Friday: 8am - 5pm\nSaturday: 8am - 12pm",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-section-alt-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find the perfect talent for your organization or looking for employment opportunities? 
            Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Whether you are an employer seeking qualified staff or a job seeker looking for opportunities, 
            we are here to help bridge the gap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg"
              onClick={() => window.open("https://wa.me/2349038787272", "_blank")}
            >
              <MessageCircle className="mr-2" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary text-lg"
              onClick={() => window.open("tel:08145427009")}
            >
              <Phone className="mr-2" />
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
