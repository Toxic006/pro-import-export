import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useMemo } from "react";
import {
  ArrowRight,
  Sparkles,
  Shield,
  X,
  Search,
  Gem,
  Factory,
  Fuel,
  Wheat,
  FlaskConical,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { products, categories, type ProductCategory } from "@/data/products";
import heroPort from "@/assets/hero-port.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

const categoryMeta: Record<ProductCategory, { icon: typeof Gem; color: string }> = {
  "Precious Metals & Diamonds": { icon: Gem, color: "from-amber-500/20 to-yellow-600/10" },
  "Base Metals & Ores": { icon: Factory, color: "from-orange-500/20 to-red-600/10" },
  "Petroleum & Energy": { icon: Fuel, color: "from-blue-500/20 to-slate-700/10" },
  "Agri Commodities & Oils": { icon: Wheat, color: "from-green-500/20 to-lime-600/10" },
  "Industrial Chemicals": { icon: FlaskConical, color: "from-yellow-400/20 to-amber-600/10" },
  "Trade Services": { icon: Handshake, color: "from-purple-500/20 to-primary/10" },
};

const Products = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCat, setActiveCat] = useState<ProductCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = activeCat === "All" || p.category === activeCat;
      const searchOk = !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [activeCat, query]);

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60svh] sm:min-h-[55svh] flex items-center justify-center overflow-hidden">
        <motion.img src={heroPort} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ scale: heroScale }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.15em]">Product Catalog · 37+ Commodities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] max-w-4xl mx-auto text-white"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Our <span className="text-primary">Products</span> & Commodities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-white/80"
          >
            From LBMA-standard gold and rough diamonds to EN590 diesel, copper cathodes and premium edible oils — sourced ethically, delivered globally with full documentation.
          </motion.p>
        </motion.div>
      </section>

      {/* Sticky filter bar */}
      <section className="sticky top-16 sm:top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search gold, copper, diesel..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-thin">
              <button
                onClick={() => setActiveCat("All")}
                className={`shrink-0 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeCat === "All" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                All ({products.length})
              </button>
              {categories.map((cat) => {
                const count = products.filter((p) => p.category === cat).length;
                const active = activeCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`shrink-0 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                      active ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {cat.split(" ")[0]} <span className="opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background via-section-alt to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg">No products match your search.</p>
              <button onClick={() => { setQuery(""); setActiveCat("All"); }} className="mt-4 text-primary font-semibold hover:underline">Clear filters</button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => {
                  const Icon = categoryMeta[p.category].icon;
                  return (
                    <motion.article
                      key={p.slug}
                      layout
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500 flex flex-col"
                    >
                      {/* Image */}
                      <button
                        onClick={() => setLightbox(p.image)}
                        className="relative aspect-[4/3] overflow-hidden block bg-muted"
                        aria-label={`View ${p.name} spec sheet`}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* category chip */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-3 py-1 shadow-sm">
                          <Icon size={12} className="text-primary" />
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
                            {p.category.split(" ")[0]}
                          </span>
                        </div>
                        {/* hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="inline-flex items-center gap-2 text-white text-xs font-semibold">
                            <Search size={14} /> View Full Spec Sheet
                          </span>
                        </div>
                      </button>

                      {/* Body */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>

                        <ul className="mt-4 space-y-1.5 flex-1">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-xs text-foreground/70">
                              <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          to="/contact"
                          className="mt-5 inline-flex items-center justify-between gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
                        >
                          <span>Request Quote</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-14 sm:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { k: "LC / SBLC", v: "Backed contracts" },
              { k: "ISO · SGS", v: "Lab certified" },
              { k: "3 Regions", v: "India · UAE · Oman" },
              { k: "20+ Years", v: "Trade experience" },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-heading font-bold text-xl sm:text-2xl text-primary">{s.k}</p>
                <p className="text-xs sm:text-sm text-background/60 mt-1">{s.v}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Shield size={16} />
              Start a Trade Inquiry
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox}
              alt="Product specification sheet"
              className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Products;
