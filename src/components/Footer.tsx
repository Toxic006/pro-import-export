import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">SH</span>
              </div>
              <div>
                <p className="font-heading font-bold text-base leading-tight">Syed Sharfuddin</p>
                <p className="text-xs text-primary font-semibold">Al Hashmi</p>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              International businessman and entrepreneur with diversified interests across metals trading, energy commodities, and precious metals.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Business Areas</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>Copper & Non-Ferrous Metals</li>
              <li>Gold & Precious Metals</li>
              <li>Oil & Petroleum Products</li>
              <li>Film Production</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-background/60">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span>India | Dubai (UAE) | Oman</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Mail size={16} className="text-primary shrink-0" />
                <span>contact@alhashmi.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Syed Sharfuddin Al Hashmi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-background/40 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-sm text-background/40 hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
