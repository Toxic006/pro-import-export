import { motion } from "framer-motion";
import { Shield, Globe, Handshake, Film, Award, Users, MapPin, Briefcase, ChevronRight, Droplets, Gem, Factory, Clapperboard } from "lucide-react";
import { useState } from "react";
import businessPartnership from "@/assets/business-partnership.jpg";
import heroPort from "@/assets/hero-port.jpg";
import filmProduction from "@/assets/film-production.jpg";
import dubaiOps from "@/assets/dubai-operations.jpg";
import indiaOps from "@/assets/india-operations.jpg";
import goldBars from "@/assets/gold-bars.jpg";
import oilRefinery from "@/assets/oil-refinery.jpg";
import copperTrading from "@/assets/copper-trading.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const filmIndustries = [
  { name: "Hindi", aka: "Bollywood", color: "from-primary/80 to-primary/40" },
  { name: "Tamil", aka: "Kollywood", color: "from-primary/70 to-primary/30" },
  { name: "Telugu", aka: "Tollywood", color: "from-primary/80 to-primary/40" },
  { name: "Kannada", aka: "Sandalwood", color: "from-primary/70 to-primary/30" },
  { name: "Malayalam", aka: "Mollywood", color: "from-primary/80 to-primary/40" },
  { name: "Bengali", aka: "Tollywood", color: "from-primary/70 to-primary/30" },
];

const operationsData = [
  {
    region: "India",
    image: indiaOps,
    items: [
      "Import of copper wire (Millberry and related grades)",
      "Import of non-ferrous and industrial metals",
      "Long-term buyer–seller contracts",
      "LC-based and documentation-supported trade",
    ],
  },
  {
    region: "Dubai & Oman",
    image: dubaiOps,
    items: [
      "Gold trading and precious metals",
      "Oil and petroleum products including EN590 (10 PPM)",
      "Diesel and derivatives supply",
      "Collaboration with refinery-linked suppliers and authorized mandates",
    ],
  },
];

const About = () => {
  const [activeOp, setActiveOp] = useState(0);

  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <motion.img
          src={heroPort}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" as const }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Briefcase size={14} className="text-primary-foreground" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground">Est. Business Profile</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground drop-shadow-lg"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Discover our journey in global trade, ethical business practices, and creative ventures across three continents.
          </motion.p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 bg-background rounded-2xl shadow-xl border border-border overflow-hidden"
          >
            {[
              { value: "3+", label: "Countries" },
              { value: "6", label: "Film Industries" },
              { value: "10+", label: "Product Lines" },
              { value: "100%", label: "LC-Backed Trade" },
            ].map((stat, i) => (
              <div key={stat.label} className={`p-6 md:p-8 text-center ${i < 3 ? "border-r border-border" : ""} ${i < 2 ? "border-b md:border-b-0 border-border" : i === 2 ? "border-b md:border-b-0 border-border md:border-r" : ""}`}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="relative group"
            >
              <img
                src={businessPartnership}
                alt="Business partnership"
                className="rounded-2xl shadow-xl w-full h-[350px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">India | Dubai (UAE) | Oman</span>
                </div>
              </motion.div>
            </motion.div>
            <div>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Professional Overview
              </motion.p>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Syed Sharfuddin <span className="text-gradient">Al Hashmi</span>
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mt-6 text-muted-foreground leading-relaxed">
                Syed Sharfuddin Al Hashmi is an international businessman, entrepreneur, and film producer with diversified business interests across metals trading, energy commodities, precious metals, and the entertainment industry. Belonging to the noble lineage of Prophet Muhammad (ﷺ), descendant of Imam Hassan (RA) and Imam Hussain (RA), with business presence in India, Dubai (UAE), and Oman.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mt-4 text-muted-foreground leading-relaxed">
                The business focuses on ethical trade practices, transparency, and long-term global partnerships, establishing secure LC-based trade agreements with international partners worldwide.
              </motion.p>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-3">
                {["Metals Trading", "Energy Commodities", "Precious Metals", "Film Production"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-primary/5 border border-primary/15 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300 cursor-default">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Operations - Interactive Tabs */}
      <section className="section-alt py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Global Presence
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Business Operations
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mt-4 text-muted-foreground">
              Strategic operations spanning across India, Dubai, and Oman with diversified trade portfolios.
            </motion.p>
          </div>

          {/* Region Tabs */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="flex justify-center gap-4 mb-10">
            {operationsData.map((op, i) => (
              <button
                key={op.region}
                onClick={() => setActiveOp(i)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeOp === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-background border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <MapPin size={14} className="inline mr-2" />
                {op.region}
              </button>
            ))}
          </motion.div>

          {/* Active Region Content */}
          <motion.div
            key={activeOp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={operationsData[activeOp].image}
                alt={operationsData[activeOp].region}
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground">{operationsData[activeOp].region}</h3>
                <p className="text-primary-foreground/70 text-sm">Active Operations</p>
              </div>
            </div>
            <div className="space-y-4">
              {operationsData[activeOp].items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <ChevronRight size={18} className="text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed pt-1.5">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trade Products Showcase */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              What We Trade
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Trade Portfolio
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Gem, title: "Precious Metals", desc: "Gold trading and precious metals through Dubai and Oman markets with verified refinery partnerships.", image: goldBars },
              { icon: Factory, title: "Industrial Metals", desc: "Copper wire (Millberry grade), non-ferrous metals, and industrial materials with LC-backed contracts.", image: copperTrading },
              { icon: Droplets, title: "Oil & Petroleum", desc: "EN590 (10 PPM), diesel, and derivatives through refinery-linked suppliers and authorized mandates.", image: oilRefinery },
            ].map((product, i) => (
              <motion.div
                key={product.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <product.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Film Production */}
      <section className="section-alt py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Entertainment Vertical
              </motion.p>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Film <span className="text-gradient">Production</span>
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mt-6 text-muted-foreground leading-relaxed">
                Beyond international trade, Syed Sharfuddin Al Hashmi is actively involved as a Film Producer across multiple Indian film industries, contributing to the growth of regional cinema and fostering creative talent.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mt-4 text-muted-foreground leading-relaxed">
                With productions spanning six major Indian film industries, the focus is on quality storytelling, cultural representation, and strategic investment in the entertainment sector.
              </motion.p>

              {/* Film Industries Grid */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filmIndustries.map((industry, i) => (
                  <motion.div
                    key={industry.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative">
                      <Clapperboard size={16} className="text-primary mb-2" />
                      <p className="font-bold text-foreground text-sm">{industry.name}</p>
                      <p className="text-xs text-muted-foreground">{industry.aka}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="relative group"
            >
              <img
                src={filmProduction}
                alt="Film production set"
                className="rounded-2xl shadow-xl w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Film size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">Multi-Industry Producer</p>
                      <p className="text-xs text-muted-foreground">Active across 6 Indian film industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              What Drives Us
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Core Values
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in every transaction, ensuring full compliance and transparent documentation." },
              { icon: Globe, title: "Global Reach", desc: "Operating seamlessly across India, UAE, and Oman with robust international trade networks and partnerships." },
              { icon: Handshake, title: "Trust", desc: "Building long-term relationships through transparent, secure LC-based trade practices and verified agreements." },
              { icon: Award, title: "Excellence", desc: "Delivering premium quality products with full documentation, certifications, and regulatory compliance." },
              { icon: Users, title: "Partnership", desc: "Strategic joint ventures and collaborations with refinery-linked suppliers for mutual growth and success." },
              { icon: Film, title: "Diversification", desc: "Expanding into film production across six Indian industries while maintaining core trading operations." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <v.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Objectives */}
      <section className="section-alt py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Vision
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Business Objectives
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Direct Refinery Partnerships", desc: "Establishing direct supply lines with verified refineries for precious metals and petroleum products." },
              { title: "Long-term Oil Contracts", desc: "Securing sustainable, long-term contracts for EN590, diesel, and petroleum derivatives." },
              { title: "Metal Supply Agreements", desc: "Building reliable supply chains for copper wire, non-ferrous and industrial metals." },
              { title: "Strategic Joint Ventures", desc: "Partnering with international businesses for mutual growth across trade verticals." },
              { title: "Film Investment", desc: "Expanding film production and investment collaborations across Indian cinema industries." },
              { title: "Global Expansion", desc: "Extending business footprint into new international markets with ethical trade practices." },
            ].map((obj, i) => (
              <motion.div
                key={obj.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group flex items-start gap-4 p-5 md:p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <span className="text-primary font-bold text-sm group-hover:text-primary-foreground transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{obj.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-10 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
                Whether you're interested in metals trading, energy commodities, or film production collaborations, we'd love to discuss how we can work together.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
              >
                Get In Touch
                <ChevronRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
