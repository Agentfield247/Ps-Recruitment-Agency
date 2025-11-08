import { Button } from "./ui/button";
import heroImage from "@/assets/hero-recruitment.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 99, 198, 0.9), rgba(0, 153, 204, 0.8)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            P's Recruitment Agency is committed to providing jobs for the unemployed in our society. 
            We recruit, train, and deploy staff to organizations across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            >
              Get Started
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary text-lg px-8"
            >
              Learn More
            </Button>
          </div>
	  <p className="mt-8 text-sm text-white/90 font-medium tracking-wider">
            RC: 8654735
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
