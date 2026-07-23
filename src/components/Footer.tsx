import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Shield, ArrowUpRight } from "lucide-react";
import logo from "@/assets/brand/khadria-logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative bg-[#0d0d0f] text-white overflow-hidden">
      {/* subtle gold pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 10%, hsl(var(--primary)) 0%, transparent 40%), radial-gradient(circle at 80% 90%, #c9a84c 0%, transparent 40%)"
      }} />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-primary/40 bg-black shrink-0">
                <img src={logo} alt="Khadria Groups" className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <p className="font-heading font-bold text-lg tracking-wide">KHADRIA</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">Groups</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              A global trade house dealing in precious metals, industrial commodities, petroleum products, agri commodities, bank instruments and premium film production — operating across India, Dubai, Oman, Saudi Arabia and Singapore.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-white/50">
              <Shield size={14} className="text-primary" />
              <span>LC-Backed · Fully Documented · Ethically Sourced</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-widest text-white/90">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-primary transition-colors">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-widest text-white/90">Business Verticals</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Precious Metals & Diamonds</li>
              <li>Copper, Iron & Base Metals</li>
              <li>Petroleum & Energy Products</li>
              <li>Agri Commodities & Edible Oils</li>
              <li>Film Production Worldwide</li>
              <li>Trade Finance (LC / SBLC / BG)</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-widest text-white/90">Contact</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
                <span>India · Dubai (UAE) · Oman</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 · +971 (on request)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={16} className="text-primary shrink-0" />
                <span>contact@khadriagroups.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Globe size={16} className="text-primary shrink-0" />
                <span>Serving 3 continents</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Khadria Groups. All rights reserved. Founded & led by Syed Sharfuddin Al Hashmi.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-white/40 hover:text-primary transition-colors">Privacy</Link>
            <Link to="/" className="text-xs text-white/40 hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
