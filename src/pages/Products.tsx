import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Gem,
  Factory,
  Fuel,
  Sparkles,
  CheckCircle2,
  Shield,
  FileText,
  Globe,
  Handshake,
} from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import goldBars from "@/assets/gold-bars.jpg";
import copperTrading from "@/assets/copper-trading.jpg";
import oilRefinery from "@/assets/oil-refinery.jpg";
import preciousMetals from "@/assets/precious-metals.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const products = [
  {
    category: "Precious Metals",
    icon: Gem,
    description: "Premium precious metals and stones with full documentation, LC-backed trading, and secure supply chains across the Gulf region.",
    items: [
      { name: "Gold Dore Bars", desc: "Available in bulk quantity with full documentation and refinery certificates", image: goldBars, tags: ["Bulk", "Certified"] },
      { name: "Gold Nuggets", desc: "Premium quality gold nuggets sourced from verified mining operations", image: goldBars, tags: ["Premium", "Verified"] },
      { name: "Platinum Bars", desc: "High-purity platinum bars available in bulk for industrial and investment", image: preciousMetals, tags: ["High-Purity", "Investment"] },
      { name: "Silver Bars", desc: "Refined silver bars for industrial applications and investment portfolios", image: preciousMetals, tags: ["Refined", "Industrial"] },
      { name: "Rough Diamonds", desc: "Rough diamonds available in bulk quantity with origin certificates", image: preciousMetals, tags: ["Bulk", "Certified"] },
    ],
  },
  {
    category: "Copper & Metals",
    icon: Factory,
    description: "High-grade industrial metals import with LC-backed documentation, long-term contracts, and reliable supply chain partnerships.",
    items: [
      { name: "Copper Cathode", desc: "Premium copper cathode available in bulk quantity with refinery documentation", image: copperTrading, tags: ["Premium", "Bulk"] },
      { name: "Copper Wire Scrap", desc: "High-grade copper wire scrap, Millberry and related grades for recycling", image: copperTrading, tags: ["Millberry", "High-Grade"] },
      { name: "Aluminium Wire Scrap", desc: "Aluminium wire scrap available in bulk quantities for industrial use", image: copperTrading, tags: ["Industrial", "Bulk"] },
    ],
  },
  {
    category: "Oil & Petroleum",
    icon: Fuel,
    description: "Refinery-linked petroleum supply chains with secure LC-based agreements across Oman and UAE operations.",
    items: [
      { name: "EN590 Diesel", desc: "10 PPM diesel with refinery-linked supply chain and full trade documentation", image: oilRefinery, tags: ["10PPM", "Refinery-Linked"] },
      { name: "Petroleum Derivatives", desc: "Various petroleum products for international trade with compliance documentation", image: oilRefinery, tags: ["International", "Compliant"] },
    ],
  },
];

const tradeFeatures = [
  { icon: Shield, title: "LC-Based Contracts", desc: "All trades backed by Letter of Credit documentation" },
  { icon: FileText, title: "Full Documentation", desc: "Complete compliance and certification for every product" },
  { icon: Globe, title: "Global Supply Chain", desc: "Verified suppliers across India, Dubai & Oman" },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "Sustainable relationships with buyers worldwide" },
];

const Products = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="overflow-hidden">
      {/* Hero Banner — parallax */}
      <section ref={heroRef} className="relative min-h-[60svh] sm:min-h-[50svh] flex items-center justify-center overflow-hidden">
        <motion.img src={heroPort} alt="International shipping port" className="absolute inset-0 w-full h-full object-cover" style={{ scale: heroScale }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full border border-primary/20 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.15em]">Product Catalogue</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] max-w-4xl mx-auto"
            style={{ color: "white", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Our <span className="text-primary">Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Explore our range of precious metals, industrial metals, and energy commodities — all backed by LC-based contracts and full documentation.
          </motion.p>
        </motion.div>
      </section>

      {/* Trade Features Strip */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        <div className="relative container mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tradeFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-primary-foreground/15 flex items-center justify-center"
                >
                  <feat.icon size={20} className="text-primary-foreground" />
                </motion.div>
                <p className="font-heading font-bold text-sm sm:text-base text-primary-foreground">{feat.title}</p>
                <p className="text-xs text-primary-foreground/70 mt-1 hidden sm:block">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((cat, ci) => (
        <section key={cat.category} className={ci % 2 === 0 ? "py-16 sm:py-24" : "section-alt py-16 sm:py-24"}>
          <div className="container mx-auto px-6 lg:px-8">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10 sm:mb-14">
              <div className="flex-1">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={0}
                  className="flex items-center gap-3 mb-3"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    <cat.icon size={24} className="text-primary" />
                  </motion.div>
                  <span className="text-primary font-semibold text-xs uppercase tracking-widest">{cat.category}</span>
                </motion.div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={1}
                  className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground"
                >
                  {cat.category}
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={2}
                  className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed"
                >
                  {cat.description}
                </motion.p>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
                  onMouseEnter={() => setActiveCategory(item.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="h-48 sm:h-56 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating tags */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-75">
                      <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-primary" />
                        LC-Backed
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Request Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <motion.img
          src={preciousMetals}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 8, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Handshake size={14} className="text-primary" />
              Get Started
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold max-w-3xl mx-auto leading-tight"
              style={{ color: "white", textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Need a <span className="text-primary">Custom Quote</span> for Bulk Orders?
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Contact us with your requirements and our team will provide competitive pricing with full documentation support.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;
