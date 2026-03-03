import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Handshake, Gem, Fuel, Factory, FileText, Calendar } from "lucide-react";
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
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Factory,
    title: "Copper & Non-Ferrous Metals",
    description: "High-grade copper wire, cathodes, and industrial metals import with full documentation.",
    image: copperTrading,
  },
  {
    icon: Gem,
    title: "Gold & Precious Metals",
    description: "Trading in gold, silver, platinum, and precious stones with secure LC-based agreements.",
    image: goldBars,
  },
  {
    icon: Fuel,
    title: "Oil & Petroleum Products",
    description: "EN590, diesel, and petroleum derivatives with refinery-linked supply chains.",
    image: oilRefinery,
  },
];

const stats = [
  { value: "3+", label: "Countries" },
  { value: "5+", label: "Business Sectors" },
  { value: "100+", label: "Trade Partners" },
  { value: "20+", label: "Years Experience" },
];

const blogPosts = [
  {
    title: "Understanding Global Copper Trade Dynamics in 2026",
    excerpt: "An overview of the evolving copper market, supply chain shifts, and what it means for international buyers.",
    date: "Feb 25, 2026",
    category: "Metals Trading",
    image: copperTrading,
  },
  {
    title: "Gold Market Outlook: Trends Shaping Precious Metals",
    excerpt: "Key factors influencing gold prices and trading strategies for the coming quarters.",
    date: "Feb 18, 2026",
    category: "Precious Metals",
    image: goldBars,
  },
  {
    title: "EN590 Diesel: Navigating Refinery Partnerships",
    excerpt: "How LC-based contracts are securing long-term petroleum supply partnerships across the Gulf region.",
    date: "Feb 10, 2026",
    category: "Energy",
    image: oilRefinery,
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroPort}
          alt="International shipping port at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-20 pb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4"
          >
            International Import–Export Company
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-[1.15] max-w-4xl mx-auto drop-shadow-lg"
            style={{ color: "white" }}
          >
            Global Trade.{" "}
            <span className="text-primary">Precious Metals.</span>{" "}
            <br className="hidden sm:block" />
            Energy Commodities.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Operating across India, Dubai (UAE) & Oman with integrity, transparency, and long-term global partnerships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              View Products <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 sm:h-13 px-8 rounded-lg border-2 font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-xs sm:text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <img
                src={businessPartnership}
                alt="Business partnership handshake"
                className="rounded-2xl shadow-xl w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
              />
            </motion.div>
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2"
              >
                About Us
              </motion.p>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight"
              >
                Building Global Trade Through{" "}
                <span className="text-gradient">Trust & Integrity</span>
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                Syed Sharfuddin Al Hashmi is an international businessman and entrepreneur with diversified business interests across metals trading, energy commodities, precious metals, and film production. The company operates with integrity, transparency, and long-term global partnerships.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3}
                className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
              >
                {[
                  { icon: Shield, label: "Ethical Trade" },
                  { icon: Globe, label: "Global Reach" },
                  { icon: Handshake, label: "LC-Based Contracts" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-foreground">
                    <item.icon size={18} className="text-primary shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-primary font-semibold hover:underline text-sm sm:text-base"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-alt py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2"
            >
              Core Business Areas
            </motion.p>
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
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border group"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2"
            >
              Global Presence
            </motion.p>
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                flag: "🇮🇳",
                country: "India",
                items: ["Copper Wire Import", "Non-Ferrous Metals", "Long-Term Contracts"],
              },
              {
                flag: "🇦🇪",
                country: "Dubai (UAE)",
                items: ["Gold Trading", "EN590 Diesel", "Refinery Partnerships"],
              },
              {
                flag: "🇴🇲",
                country: "Oman",
                items: ["Petroleum Products", "Oil Trading", "Energy Commodities"],
              },
            ].map((loc, i) => (
              <motion.div
                key={loc.country}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">{loc.flag}</span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-3 sm:mb-4">{loc.country}</h3>
                <ul className="space-y-2">
                  {loc.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Preview */}
      <section className="section-alt py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2"
              >
                Latest Insights
              </motion.p>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm sm:text-base">
                View All Posts <ArrowRight size={16} />
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
                variants={fadeUp}
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-semibold hover:underline">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <img
          src={heroPort}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold max-w-2xl mx-auto"
            style={{ color: "white" }}
          >
            Partner With Us for Ethical, Transparent & Secure International Trade
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Get In Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
