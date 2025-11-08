const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">P's Recruitment Agency</h3>
            <p className="text-background/80">
              Committed to providing jobs for the unemployed and connecting talent with opportunity since 2023.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-background transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("services");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-background transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("clients");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-background transition-colors"
                >
                  Clients
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>Number 2 Akinsaya Street</li>
              <li>Behind GTbank Gwagwalada</li>
              <li>FCT Abuja, Nigeria</li>
              <li className="pt-2">Phone: 08145427009</li>
              <li>WhatsApp: 09038787272</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} P's Recruitment Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
