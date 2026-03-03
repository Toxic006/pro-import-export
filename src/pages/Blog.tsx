import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
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
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const blogPosts = [
  {
    title: "Understanding Global Copper Trade Dynamics in 2026",
    excerpt: "The copper market continues to evolve with shifting supply chains and growing demand from the renewable energy sector. We explore the latest trends affecting international copper wire and cathode trading, and how LC-based contracts are providing security for buyers and sellers in an uncertain market.",
    date: "Feb 25, 2026",
    category: "Metals Trading",
    image: copperTrading,
    slug: "copper-trade-dynamics-2026",
  },
  {
    title: "Gold Market Outlook: Trends Shaping Precious Metals",
    excerpt: "Gold prices have been influenced by geopolitical tensions, central bank policies, and shifting investor sentiment. This article examines the key factors driving gold dore bars and nuggets trading across the India-UAE corridor and what it means for our clients.",
    date: "Feb 18, 2026",
    category: "Precious Metals",
    image: goldBars,
    slug: "gold-market-outlook",
  },
  {
    title: "EN590 Diesel: Navigating Refinery Partnerships in the Gulf",
    excerpt: "Securing reliable petroleum supply chains requires strong refinery partnerships and robust documentation. Learn how LC-based trade agreements are facilitating long-term EN590 diesel contracts between Gulf refineries and international buyers.",
    date: "Feb 10, 2026",
    category: "Energy",
    image: oilRefinery,
    slug: "en590-refinery-partnerships",
  },
  {
    title: "The Rise of Ethical Trading in Precious Metals Markets",
    excerpt: "Transparency and ethical sourcing are becoming non-negotiable in the precious metals industry. Discover how our commitment to integrity and full documentation is setting new standards for platinum, silver, and gold trading worldwide.",
    date: "Jan 30, 2026",
    category: "Precious Metals",
    image: preciousMetals,
    slug: "ethical-trading-precious-metals",
  },
  {
    title: "Building Long-Term Trade Partnerships: A Strategic Guide",
    excerpt: "Successful international trade depends on trust, transparency, and strategic alignment. We share insights from our experience building lasting partnerships across India, Dubai, and Oman, including best practices for LC-based agreements.",
    date: "Jan 22, 2026",
    category: "Business",
    image: businessPartnership,
    slug: "long-term-trade-partnerships",
  },
  {
    title: "Non-Ferrous Metals Import: Opportunities for Indian Buyers",
    excerpt: "India's growing industrial sector presents massive opportunities for copper, aluminium, and other non-ferrous metal imports. We break down the key considerations, documentation requirements, and how to establish reliable supply chains.",
    date: "Jan 15, 2026",
    category: "Metals Trading",
    image: copperTrading,
    slug: "non-ferrous-metals-india",
  },
];

const categories = ["All", "Metals Trading", "Precious Metals", "Energy", "Business"];

const Blog = () => {
  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <img src={heroPort} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold"
            style={{ color: "white" }}
          >
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Industry news, market insights, and updates from the world of international trade.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-4 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${
                  cat === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="grid lg:grid-cols-2 gap-6 sm:gap-10 bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className="h-56 sm:h-72 lg:h-auto overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{blogPosts[0].category}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> {blogPosts[0].date}
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4 leading-snug">
                {blogPosts[0].title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div>
                <span className="inline-flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer text-sm sm:text-base">
                  Read Full Article <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-14 sm:pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-8">More Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.slug}
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
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 leading-snug line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-semibold hover:underline cursor-pointer">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
