import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Shield,
  Globe,
  Handshake,
  Gem,
  Fuel,
  Factory,
  Calendar,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  Ship,
  Landmark,
  BarChart3,
} from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import goldBars from "@/assets/gold-bars.jpg";
import copperTrading from "@/assets/copper-trading.jpg";
import oilRefinery from "@/assets/oil-refinery.jpg";
import businessPartnership from "@/assets/business-partnership.jpg";
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const services = [
  {
    icon: Factory,
    title: "Copper & Non-Ferrous Metals",
    description:
      "High-grade copper wire (Millberry), cathodes, and industrial metals import with LC-backed documentation and long-term contracts.",
    image: copperTrading,
    stats: "50+ Suppliers",
    highlight: "India Operations",
  },
  {
    icon: Gem,
    title: "Gold & Precious Metals",
    description:
      "Trading in gold, silver, platinum, and precious stones with secure LC-based agreements across the Gulf region.",
    image: goldBars,
    stats: "Dubai Hub",
    highlight: "LC-Based Agreements",
  },
  {
    icon: Fuel,
    title: "Oil & Petroleum Products",
    description:
      "EN590 diesel, crude oil, and petroleum derivatives with refinery-linked supply chains across Oman & UAE.",
    image: oilRefinery,
    stats: "Refinery Linked",
    highlight: "Oman & UAE",
  },
];

const stats = [
  { value: "3+", label: "Countries", icon: Globe },
  { value: "5+", label: "Business Sectors", icon: BarChart3 },
  { value: "100+", label: "Trade Partners", icon: Users },
  { value: "20+", label: "Years Experience", icon: Award },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Ethical & Transparent",
    description: "Every deal is backed by documented LC-based contracts ensuring full transparency.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "We build sustainable relationships with suppliers and buyers across continents.",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "20+ years of deep commodity market knowledge across metals, energy, and precious stones.",
  },
  {
    icon: Landmark,
    title: "Institutional Grade",
    description: "Professional operations with banking-grade documentation and compliance standards.",
  },
];

const blogPosts = [
  {
    title: "Understanding Global Copper Trade Dynamics in 2026",
    excerpt:
      "An overview of the evolving copper market, supply chain shifts, and what it means for international buyers.",
    date: "Feb 25, 2026",
    category: "Metals Trading",
    image: copperTrading,
  },
  {
    title: "Gold Market Outlook: Trends Shaping Precious Metals",
    excerpt:
      "Key factors influencing gold prices and trading strategies for the coming quarters.",
    date: "Feb 18, 2026",
    category: "Precious Metals",
    image: goldBars,
  },
  {
    title: "EN590 Diesel: Navigating Refinery Partnerships",
    excerpt:
      "How LC-based contracts are securing long-term petroleum supply partnerships across the Gulf region.",
    date: "Feb 10, 2026",
    category: "Energy",
    image: oilRefinery,
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section — parallax zoom */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      >
        <motion.img
          src={heroPort}
          alt="International shipping port at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: heroScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full border border-primary/20 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-20 h-20 rounded-full border border-primary/15 hidden lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-20 pb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-5 sm:mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.15em]">
              International Import–Export Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] max-w-5xl mx-auto"
            style={{ color: "white", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Global Trade.{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Precious Metals.
            </motion.span>
            <br className="hidden sm:block" />
            Energy Commodities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Operating across India, Dubai (UAE) & Oman — delivering integrity,
            transparency, and long-term global partnerships in commodity trading.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm sm:text-base"
            >
              View Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 sm:h-13 px-8 rounded-lg border-2 font-semibold hover:bg-white/15 hover:border-white/60 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <div className="w-1 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Strip — animated counters with icons */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        <div className="relative container mx-auto px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
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
                  <stat.icon size={20} className="text-primary-foreground" />
                </motion.div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview — split layout with floating badges */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src={businessPartnership}
                  alt="Business partnership handshake"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-5 -right-3 sm:right-6 bg-background border border-border rounded-xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">20+ Years</p>
                  <p className="text-xs text-muted-foreground">Industry Experience</p>
                </div>
              </motion.div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl hidden lg:block" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
                <Ship size={14} />
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Building Global Trade Through{" "}
                <span className="text-gradient">Trust & Integrity</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Syed Sharfuddin Al Hashmi is an international businessman and
                entrepreneur with diversified business interests across metals
                trading, energy commodities, precious metals, and film
                production. With operations spanning India, Dubai & Oman, the
                company delivers on every commitment.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3">
                {[
                  { icon: Shield, label: "Ethical & Transparent Trade Practices" },
                  { icon: Globe, label: "Operations in 3+ Countries" },
                  { icon: Handshake, label: "LC-Based Secure Contracts" },
                  { icon: CheckCircle2, label: "Full Documentation & Compliance" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-md transition-all duration-300">
                      <item.icon
                        size={16}
                        className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={5}
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 mt-8 sm:mt-10 bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base shadow-sm hover:shadow-lg"
                >
                  Learn More About Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services — interactive cards with overlay */}
      <section className="section-alt py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3"
            >
              <Sparkles size={14} />
              Core Business Areas
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground"
            >
              What We Trade
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto"
            >
              Specializing in high-value commodity trading with secure,
              documentation-backed operations across three major sectors.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-border group relative"
              >
                <div className="h-48 sm:h-56 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Floating tags */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      {service.stats}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-75">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-400">
                    <service.icon
                      size={22}
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-400"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — icon grid */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3"
              >
                <Award size={14} />
                Why Choose Us
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight"
              >
                A Trusted Partner in{" "}
                <span className="text-gradient">Global Commodity Trading</span>
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                We combine decades of market expertise with modern trade
                practices to deliver reliable, ethical, and profitable
                partnerships for all stakeholders.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 40px -10px hsl(0 78% 52% / 0.15)",
                  }}
                  className="bg-card border border-border rounded-2xl p-5 sm:p-6 cursor-default group transition-colors duration-300 hover:border-primary/30"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-all duration-300"
                  >
                    <item.icon
                      size={22}
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </motion.div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence — interactive cards */}
      <section className="section-alt py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3"
            >
              <Globe size={14} />
              Global Presence
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground"
            >
              Operating Across Continents
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                flag: "🇮🇳",
                country: "India",
                desc: "Primary import hub for copper wire and industrial metals",
                items: [
                  "Copper Wire (Millberry)",
                  "Non-Ferrous Metals",
                  "Long-Term Buyer Contracts",
                  "LC-Based Documentation",
                ],
              },
              {
                flag: "🇦🇪",
                country: "Dubai (UAE)",
                desc: "Gold and precious metals trading center",
                items: [
                  "Gold & Precious Metals",
                  "EN590 Diesel Trading",
                  "Refinery Partnerships",
                  "Film Production Finance",
                ],
              },
              {
                flag: "🇴🇲",
                country: "Oman",
                desc: "Oil and energy commodities operations",
                items: [
                  "Petroleum Products",
                  "Crude Oil Trading",
                  "Energy Commodities",
                  "Supply Chain Logistics",
                ],
              },
            ].map((loc, i) => (
              <motion.div
                key={loc.country}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="bg-background border border-border rounded-2xl p-6 sm:p-8 group hover:border-primary/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover accent glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="text-4xl sm:text-5xl mb-3 block inline-block cursor-default"
                  >
                    {loc.flag}
                  </motion.span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {loc.country}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {loc.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {loc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Preview */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3"
              >
                <Sparkles size={14} />
                Latest Insights
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground"
              >
                Industry News & Updates
              </motion.h2>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm sm:text-base"
              >
                View All Posts
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="h-44 sm:h-52 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                    <Calendar size={12} className="text-primary" /> {post.date}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="group/link inline-flex items-center gap-1.5 mt-4 text-sm text-primary font-semibold"
                  >
                    Read More
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — with animated background */}
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
            <span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <Handshake size={14} className="text-primary" />
              Start a Partnership
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold max-w-3xl mx-auto leading-tight"
              style={{
                color: "white",
                textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Partner With Us for Ethical, Transparent &{" "}
              <span className="text-primary">Secure</span> International Trade
            </h2>
            <p
              className="mt-4 sm:mt-6 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Ready to explore opportunities in metals, energy, or precious
              commodities? Let's build something lasting together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 h-13 px-10 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center h-13 px-10 rounded-lg border-2 font-semibold hover:bg-white/15 transition-all duration-300 text-sm sm:text-base"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "white" }}
            >
              Browse Products
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
