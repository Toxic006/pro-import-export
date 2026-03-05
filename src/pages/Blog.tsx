import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  BookOpen,
  TrendingUp,
  Tag,
} from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import goldBars from "@/assets/gold-bars.jpg";
import copperTrading from "@/assets/copper-trading.jpg";
import oilRefinery from "@/assets/oil-refinery.jpg";
import preciousMetals from "@/assets/precious-metals.jpg";
import businessPartnership from "@/assets/business-partnership.jpg";

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

const blogPosts = [
  {
    title: "Understanding Global Copper Trade Dynamics in 2026",
    excerpt: "The copper market continues to evolve with shifting supply chains and growing demand from the renewable energy sector. We explore the latest trends affecting international copper wire and cathode trading.",
    date: "Feb 25, 2026",
    category: "Metals Trading",
    image: copperTrading,
    readTime: "5 min read",
    slug: "copper-trade-dynamics-2026",
  },
  {
    title: "Gold Market Outlook: Trends Shaping Precious Metals",
    excerpt: "Gold prices have been influenced by geopolitical tensions, central bank policies, and shifting investor sentiment. This article examines the key factors driving gold trading across the India-UAE corridor.",
    date: "Feb 18, 2026",
    category: "Precious Metals",
    image: goldBars,
    readTime: "7 min read",
    slug: "gold-market-outlook",
  },
  {
    title: "EN590 Diesel: Navigating Refinery Partnerships in the Gulf",
    excerpt: "Securing reliable petroleum supply chains requires strong refinery partnerships and robust documentation. Learn how LC-based trade agreements facilitate long-term EN590 diesel contracts.",
    date: "Feb 10, 2026",
    category: "Energy",
    image: oilRefinery,
    readTime: "6 min read",
    slug: "en590-refinery-partnerships",
  },
  {
    title: "The Rise of Ethical Trading in Precious Metals Markets",
    excerpt: "Transparency and ethical sourcing are becoming non-negotiable. Discover how our commitment to integrity and full documentation is setting new standards for precious metals trading worldwide.",
    date: "Jan 30, 2026",
    category: "Precious Metals",
    image: preciousMetals,
    readTime: "4 min read",
    slug: "ethical-trading-precious-metals",
  },
  {
    title: "Building Long-Term Trade Partnerships: A Strategic Guide",
    excerpt: "Successful international trade depends on trust, transparency, and strategic alignment. We share insights from our experience building lasting partnerships across India, Dubai, and Oman.",
    date: "Jan 22, 2026",
    category: "Business",
    image: businessPartnership,
    readTime: "8 min read",
    slug: "long-term-trade-partnerships",
  },
  {
    title: "Non-Ferrous Metals Import: Opportunities for Indian Buyers",
    excerpt: "India's growing industrial sector presents massive opportunities for copper, aluminium, and other non-ferrous metal imports. We break down the key considerations and documentation requirements.",
    date: "Jan 15, 2026",
    category: "Metals Trading",
    image: copperTrading,
    readTime: "6 min read",
    slug: "non-ferrous-metals-india",
  },
];

const categories = ["All", "Metals Trading", "Precious Metals", "Energy", "Business"];

const Blog = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <main className="overflow-hidden">
      {/* Hero Banner — parallax */}
      <section ref={heroRef} className="relative min-h-[60svh] sm:min-h-[50svh] flex items-center justify-center overflow-hidden">
        <motion.img src={heroPort} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ scale: heroScale }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-primary/20 hidden lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm"
          >
            <BookOpen size={14} className="text-primary" />
            <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.15em]">Industry Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] max-w-4xl mx-auto"
            style={{ color: "white", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Blog & <span className="text-primary">Insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Industry news, market analysis, and expert updates from the world of international commodity trading.
          </motion.p>
        </motion.div>
      </section>


      {/* Category Filter */}
      <section className="border-b border-border sticky top-16 z-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                  cat === activeCategory
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="grid lg:grid-cols-2 gap-0 bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="h-56 sm:h-72 lg:h-auto overflow-hidden relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Featured
                </span>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{featuredPost.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} /> {featuredPost.date}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div>
                  <span className="group/link inline-flex items-center gap-2 text-primary font-semibold cursor-pointer text-sm sm:text-base">
                    Read Full Article <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-14 sm:pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-3 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">More Articles</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
              >
                <div className="h-44 sm:h-52 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 flex items-center gap-1">
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                    <Calendar size={12} className="text-primary" /> {post.date}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {otherPosts.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-16 text-sm"
            >
              No articles found in this category yet.
            </motion.p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
