import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Globe,
  Award,
  CheckCircle2,
  Gem,
  Factory,
  Fuel,
  Wheat,
  Handshake,
  Film,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import portrait from "@/assets/brand/syed-sharfuddin.jpeg";
import logo from "@/assets/brand/khadria-logo.jpeg";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const verticals = [
  { icon: Gem, title: "Precious Metals", desc: "Gold, silver, platinum & certified diamonds — LBMA good delivery.", color: "text-amber-600" },
  { icon: Factory, title: "Base Metals & Ores", desc: "Copper cathodes, aluminium, iron, bauxite, chrome, manganese.", color: "text-orange-600" },
  { icon: Fuel, title: "Petroleum & Energy", desc: "EN590, D2, Jet A-1, LPG, LNG and crude oil for refineries.", color: "text-blue-600" },
  { icon: Wheat, title: "Agri Commodities", desc: "Refined oils, sugar ICUMSA 45, urea and edible-grade feedstock.", color: "text-green-600" },
  { icon: Handshake, title: "Trade Finance", desc: "LC · SBLC · DLC · BG issuance and monetization worldwide.", color: "text-purple-600" },
  { icon: Film, title: "Film Production", desc: "Movies, web series & ad films across 6+ Indian film industries.", color: "text-primary" },
];

// Feature products for hero showcase
const featured = products.filter((p) =>
  ["gold-999-bar", "copper-cathodes", "en590-diesel", "natural-diamonds", "sunflower-refined-oil", "iron-ore"].includes(p.slug)
);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main className="overflow-hidden bg-brand-soft">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative min-h-[92svh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center overflow-hidden">

        {/* Decorative background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full bg-amber-500/[0.05] blur-3xl" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Text side */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-3.5 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.18em]">
                  Est. Since 2004 · Global Trade House
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground"
              >
                Trade, <span className="text-gradient">Trust</span> &
                <br />
                Global <span className="text-primary">Presence.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                <strong className="text-foreground">Khadria Groups</strong> is a diversified international trade house dealing in precious metals, industrial commodities, petroleum products and premium film production — operating with LC-backed contracts across <strong className="text-foreground">India, Dubai (UAE) & Oman.</strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Explore Products
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full border-2 border-foreground/15 text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Request Quote
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
              >
                {[
                  { k: "37+", v: "Products" },
                  { k: "5", v: "Countries" },
                  { k: "20+", v: "Years Trust" },
                ].map((s) => (
                  <div key={s.k} className="border-l-2 border-primary/40 pl-3 sm:pl-4">
                    <p className="font-heading font-bold text-2xl sm:text-3xl text-foreground">{s.k}</p>
                    <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{s.v}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Portrait side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 order-1 lg:order-2 relative"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-6 rounded-[2rem] border-2 border-primary/15"
                  animate={{ rotate: [0, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />

                {/* Portrait frame */}
                <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl bg-gradient-to-br from-foreground to-foreground/70 aspect-[4/5]">
                  <img
                    src={portrait}
                    alt="Syed Sharfuddin Al Hashmi, Founder of Khadria Groups"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "50% 12%" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Name plate */}
                  <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-3.5 py-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-primary/40 shrink-0">
                      <img src={logo} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-white text-sm sm:text-base truncate">Syed Sharfuddin Al Hashmi</p>
                      <p className="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-wider">Founder · Khadria Groups</p>
                    </div>
                  </div>
                </div>

                {/* Floating experience badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-2xl shadow-xl border border-border p-3 sm:p-4 w-32 sm:w-40"
                >
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="mt-1.5 font-heading font-bold text-foreground text-sm sm:text-base leading-tight">20+ Years Trade Legacy</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Trusted globally</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ VERTICALS ============ */}
      <section className="py-14 sm:py-20 bg-brand-soft-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              <Sparkles size={14} /> Six Business Verticals
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              What We Do <span className="text-gradient">Best.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Diversified expertise across commodities, energy, agriculture, finance and entertainment — under a single trusted name.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {verticals.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-2xl p-6 sm:p-7 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <v.icon size={22} className={`text-primary group-hover:text-primary-foreground transition-colors`} />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                <Award size={14} /> Featured Catalog
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                Flagship <span className="text-gradient">Commodities.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                A glimpse of our 37+ certified products. Each item ships with lab reports and full trade documentation.
              </p>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors self-start sm:self-auto"
            >
              View full catalog
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featured.map((p, i) => (
              <motion.div
                key={p.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-heading font-bold text-lg leading-tight">{p.name}</p>
                    <p className="text-white/70 text-xs mt-0.5">{p.tagline}</p>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-1.5">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-foreground/70">
                        <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-br from-foreground to-[#0d0d0f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--primary)), transparent 40%), radial-gradient(circle at 80% 80%, #c9a84c, transparent 40%)"
        }} />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              <Shield size={14} /> Why Khadria
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Institutional-grade trading. <span className="text-primary">Human-scale trust.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: "LC-Backed Deals", desc: "Every contract routed through international bank instruments." },
              { icon: Award, title: "Certified Quality", desc: "ISO, SGS, HACCP and LBMA good-delivery standards." },
              { icon: Globe, title: "3-Country Reach", desc: "Operational hubs in India, Dubai (UAE) and Oman." },
              { icon: Handshake, title: "Ethical Sourcing", desc: "Conflict-free minerals and transparent origin certificates." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/[0.07] hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  <f.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg mb-1.5">{f.title}</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GLOBAL PRESENCE ============ */}
      <section className="py-16 sm:py-24 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              <Globe size={14} /> Our Global Presence
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Rooted in <span className="text-gradient">India</span>. Trading with the world.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { city: "India", desc: "Head office & film production hub. Precious metals and industrial metals trade.", tags: ["Metals", "Film Production", "Agri"] },
              { city: "Dubai · UAE", desc: "Regional gateway to the Gulf. LC issuance, gold & petroleum trading.", tags: ["Gold", "Petroleum", "Trade Finance"] },
              { city: "Oman", desc: "Middle East logistics hub. Copper, chrome, manganese and shipping ops.", tags: ["Copper", "Chrome", "Logistics"] },
            ].map((c, i) => (
              <motion.div
                key={c.city}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-2xl p-6 sm:p-7 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                    <MapPin size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">{c.city}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[11px] bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 60%)`
        }} />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl leading-tight max-w-3xl mx-auto">
              Ready to <span className="text-primary">trade globally?</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-background/70 max-w-xl mx-auto leading-relaxed">
              Talk to our desk about LC-backed contracts, spot quotes or long-term supply. Response within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                <Mail size={16} />
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border-2 border-white/20 text-white font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Phone size={16} />
                About Khadria
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
