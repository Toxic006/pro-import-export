import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const products = [
  {
    category: "Precious Metals",
    items: [
      { name: "Gold Dore Bars", desc: "Available in bulk quantity with full documentation", image: goldBars },
      { name: "Gold Nuggets", desc: "Premium quality gold nuggets for trading", image: goldBars },
      { name: "Platinum Bars", desc: "High-purity platinum bars available in bulk", image: preciousMetals },
      { name: "Silver Bars", desc: "Refined silver bars for industrial and investment use", image: preciousMetals },
      { name: "Rough Diamonds", desc: "Rough diamonds available in bulk quantity", image: preciousMetals },
    ],
  },
  {
    category: "Copper & Metals",
    items: [
      { name: "Copper Cathode", desc: "Premium copper cathode available in bulk quantity", image: copperTrading },
      { name: "Copper Wire Scrap", desc: "High-grade copper wire scrap, Millberry and related grades", image: copperTrading },
      { name: "Aluminium Wire Scrap", desc: "Aluminium wire scrap available in bulk quantities", image: copperTrading },
    ],
  },
  {
    category: "Oil & Petroleum",
    items: [
      { name: "EN590 Diesel", desc: "10 PPM diesel with refinery-linked supply chain", image: oilRefinery },
      { name: "Petroleum Derivatives", desc: "Various petroleum products for international trade", image: oilRefinery },
    ],
  },
];

const Products = () => {
  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroPort} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-background"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-background/70 max-w-xl mx-auto"
          >
            Explore our range of precious metals, industrial metals, and energy commodities.
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((cat, ci) => (
        <section key={cat.category} className={ci % 2 === 0 ? "py-20" : "section-alt py-20"}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10"
            >
              {cat.category}
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-semibold hover:underline"
                    >
                      Request Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Products;
