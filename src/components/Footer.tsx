import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Adiban Aviation" className="h-12" />
            <p className="text-sm text-muted-foreground">
              Shaping the future of unmanned aviation in India through innovation and precision engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/uav" className="text-sm text-muted-foreground hover:text-accent transition-colors">UAV Systems</Link></li>
              <li><Link to="/products/testrix" className="text-sm text-muted-foreground hover:text-accent transition-colors">Testrix Solutions</Link></li>
              <li><Link to="/products/hardware" className="text-sm text-muted-foreground hover:text-accent transition-colors">Hardware</Link></li>
              <li><Link to="/software" className="text-sm text-muted-foreground hover:text-accent transition-colors">Software</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span>65/65, Trichy Main Road, Nathamedu, Pidagam, Villupuram, Tamil Nadu, 605401</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+918903501042" className="hover:text-accent transition-colors">+91 8903501042</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contact@adibanaviation.in" className="hover:text-accent transition-colors">contact@adibanaviation.in</a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="https://www.linkedin.com/company/adiban-aviation/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/adiban_aviation/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adiban Aviation Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;