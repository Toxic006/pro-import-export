import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Globe,
  Award,
  CheckCircle2,
  Target,
  Heart,
  Users,
  Handshake,
  MapPin,
  Film,
  Quote,
  Star,
  Compass,
} from "lucide-react";
import portrait from "@/assets/brand/syed-sharfuddin.jpeg";
import logo from "@/assets/brand/khadria-logo.jpeg";
import heroPort from "@/assets/hero-port.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const values = [
  { icon: Shield, title: "Integrity First", desc: "Every deal is LC-backed and fully documented. No shortcuts." },
  { icon: Award, title: "Certified Quality", desc: "ISO, SGS, LBMA good-delivery, HACCP — the standards that matter." },
  { icon: Globe, title: "Global Reach", desc: "Hubs across India, Dubai, Oman, Saudi Arabia and Singapore." },
  { icon: Heart, title: "Long-term Trust", desc: "A decade of repeat business built on transparent partnerships." },
  { icon: Users, title: "People-first Trade", desc: "Fair pricing, faithful contracts and communication that respects your time." },
  { icon: Compass, title: "Diversified Vision", desc: "From bullion to blockbusters — one house, six verticals, endless focus." },
];

const filmIndustries = ["Hindi (Bollywood)", "Tamil (Kollywood)", "Telugu (Tollywood)", "Malayalam (Mollywood)", "Kannada (Sandalwood)", "Bengali (Tollywood-BN)"];

const timeline = [
  { year: "2004", title: "Foundations", desc: "Syed Sharfuddin begins commodity trading operations from India." },
  { year: "2010", title: "Gulf Expansion", desc: "Dubai office established for gold and petroleum products." },
  { year: "2015", title: "Oman Hub", desc: "Muscat operations open for copper, chrome and manganese trade." },
  { year: "2019", title: "Film Production", desc: "Diversification into Indian cinema across six film industries." },
  { year: "2022", title: "Saudi Arabia Desk", desc: "Agricultural sourcing and distribution across the Kingdom." },
  { year: "2023", title: "Singapore Finance", desc: "Bank instrument trade & purchase desk (LC · SBLC · BG) opens." },
  { year: "2024", title: "Khadria Groups", desc: "Consolidation under one brand — 37+ product lines, 5 countries." },
];

const About = () => {
  const [activeRegion, setActiveRegion] = useState<"india" | "dubai" | "oman" | "saudi" | "singapore">("india");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const regions = {
    india: {
      title: "India Operations",
      subtitle: "Head office · Film production · Precious metals",
      points: [
        "Head office and film production headquarters",
        "Sourcing hub for precious metals, iron ore, coal and agri commodities",
        "Six-language film production (Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali)",
        "Domestic distribution of edible oils and industrial chemicals",
      ],
    },
    dubai: {
      title: "Dubai · UAE Operations",
      subtitle: "Trade finance · Gold & bullion · Petroleum",
      points: [
        "Gulf regional office managing LC, SBLC and DLC issuance",
        "Gold, silver and diamond trading with LBMA-standard bullion",
        "Petroleum products bunkering and refining feedstock deals",
        "Access to European, African and Asian counterparties",
      ],
    },
    oman: {
      title: "Oman Operations",
      subtitle: "Copper · Chrome · Shipping & logistics",
      points: [
        "Middle East logistics hub with direct port access",
        "Copper cathodes, chrome ore and manganese ore export",
        "Bauxite and industrial chemicals for regional refineries",
        "Strategic bridge between GCC and Indian markets",
      ],
    },
    saudi: {
      title: "Saudi Arabia Operations",
      subtitle: "Agriculture · Edible oils · Food-grade commodities",
      points: [
        "Agricultural sourcing and Kingdom-wide distribution",
        "Sugar (ICUMSA 45), refined edible oils and grains supply",
        "Long-term supply contracts with GCC food distributors",
        "HACCP and food-grade certified logistics",
      ],
    },
    singapore: {
      title: "Singapore Operations",
      subtitle: "Bank instruments · Trade finance · Structured deals",
      points: [
        "Bank instrument trade & purchase — LC, SBLC, DLC and BG",
        "Monetization and discounting of financial instruments",
        "Southeast Asia gateway for structured commodity finance",
        "Compliance-first, KYC-driven counterparty onboarding",
      ],
    },
  };

  return (
    <main className="overflow-hidden bg-brand-soft">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60svh] flex items-center justify-center overflow-hidden">
        <motion.img src={heroPort} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ scale: heroScale }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.15em]">About Khadria Groups</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] max-w-4xl mx-auto text-white"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Twenty years of <span className="text-primary">honest trade.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-white/80"
          >
            From bullion vaults in Dubai to iron mines in India and refineries in Oman — meet the family behind Khadria Groups.
          </motion.p>
        </motion.div>
      </section>

      {/* Founder */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative max-w-md mx-auto">
                <motion.div
                  className="absolute -inset-4 rounded-[2rem] border-2 border-primary/15"
                  animate={{ rotate: [0, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl aspect-[4/5] bg-foreground">
                  <img
                    src={portrait}
                    alt="Syed Sharfuddin Al Hashmi, Founder"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "50% 28%" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="font-heading font-bold text-white text-xl sm:text-2xl leading-tight">Syed Sharfuddin Al Hashmi</p>
                    <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mt-1">Founder · Chairman</p>
                  </div>
                </div>

                {/* logo badge */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-background shadow-xl bg-black">
                  <img src={logo} alt="Khadria Groups emblem" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                <Sparkles size={14} /> Our Founder
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                The vision behind <span className="text-gradient">Khadria Groups.</span>
              </h2>

              <div className="mt-6 relative pl-6 border-l-2 border-primary/30">
                <Quote size={20} className="absolute -left-3 top-0 bg-background text-primary" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                  "Trade is trust made tangible. Every gram of gold, every barrel of oil, every reel of film we handle is a promise kept — on time, on spec, with dignity."
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">— Syed Sharfuddin Al Hashmi</p>
              </div>

              <div className="mt-8 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  For over a decade, <strong className="text-foreground">Syed Sharfuddin Al Hashmi</strong> has built Khadria Groups into a diversified international trade house operating across India, the UAE, Oman, Saudi Arabia and Singapore.
                </p>
                <p>
                  What began as a small precious-metals desk has grown into a 37-product portfolio spanning gold and diamonds, copper cathodes and iron ore, petroleum and LNG, edible oils and sugar, industrial chemicals — and a thriving global film-production arm covering six Indian cinema industries.
                </p>
                <p>
                  Khadria's edge is old-fashioned: personal relationships, LC-backed contracts, and lab-tested quality on every shipment.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
                {[{ k: "10+", v: "Years" }, { k: "5", v: "Countries" }, { k: "37+", v: "Products" }].map((s) => (
                  <div key={s.k} className="border-l-2 border-primary/40 pl-3">
                    <p className="font-heading font-bold text-2xl sm:text-3xl text-foreground">{s.k}</p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional operations tabs */}
      <section className="py-14 sm:py-20 bg-brand-soft-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              <Globe size={14} /> Where We Operate
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Five regions. <span className="text-gradient">One trusted name.</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(["india", "dubai", "oman", "saudi", "singapore"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeRegion === r ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-card border border-border text-foreground hover:border-primary/40"
                }`}
              >
                {r === "india" ? "India" : r === "dubai" ? "Dubai · UAE" : r === "oman" ? "Oman" : r === "saudi" ? "Saudi Arabia" : "Singapore"}
              </button>
            ))}
          </div>

          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">{regions[activeRegion].title}</h3>
                <p className="text-xs sm:text-sm text-primary font-semibold">{regions[activeRegion].subtitle}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {regions[activeRegion].points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              <Heart size={14} /> Our Values
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              What we <span className="text-gradient">stand for.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                  <v.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-20 bg-brand-soft-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              <Target size={14} /> Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Two decades of <span className="text-gradient">growth.</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 mb-8 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="hidden sm:block flex-1" />
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                <div className="pl-12 sm:pl-0 flex-1">
                  <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-lg transition-all">
                    <span className="text-primary font-heading font-bold text-lg">{t.year}</span>
                    <h4 className="font-heading font-bold text-base text-foreground mt-1">{t.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Film production */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                <Film size={14} /> Film Production Arm
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                Stories worth <span className="text-gradient">telling.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Beyond commodities, Khadria Groups produces feature films, web series and ad films across <strong className="text-foreground">six major Indian film industries.</strong> From concept and casting to worldwide distribution, we back stories that carry Indian craft to global audiences.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {filmIndustries.map((f, i) => (
                  <motion.div
                    key={f}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-2.5 bg-card border border-border rounded-lg px-3 py-2.5 hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <Film size={14} className="text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-foreground to-[#0d0d0f] text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative">
                  <Film size={40} className="text-primary mb-6" />
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">Lights. Camera. The world.</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    We produce movies, web series, TV shows, documentaries and ad films — with shooting units across Asia, Europe, the Middle East and beyond.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {["Concept & Development", "Film Production", "Post Production", "Global Distribution"].map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl leading-tight max-w-2xl mx-auto">
            Partner with a trade house that keeps its word.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary-foreground text-primary font-semibold hover:shadow-xl transition-all"
            >
              <Handshake size={16} />
              Start a Conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:border-primary-foreground transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
