import { motion } from "framer-motion";
import { Shield, Globe, Handshake, Film, Award, Users } from "lucide-react";
import businessPartnership from "@/assets/business-partnership.jpg";
import heroPort from "@/assets/hero-port.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const About = () => {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-background/70 max-w-xl mx-auto"
          >
            Learn about our journey, values, and global business operations.
          </motion.p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.img
              src={businessPartnership}
              alt="Business partnership"
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            />
            <div>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Professional Overview
              </motion.p>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Syed Sharfuddin <span className="text-gradient">Al Hashmi</span>
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="mt-6 text-muted-foreground leading-relaxed">
                Syed Sharfuddin Al Hashmi is an international businessman, entrepreneur, and film producer with diversified business interests across metals trading, energy commodities, precious metals, and the entertainment industry. Belonging to the noble lineage with business presence in India, Dubai (UAE), and Oman.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="mt-4 text-muted-foreground leading-relaxed">
                The business focuses on ethical trade practices, transparency, and long-term global partnerships, establishing secure LC-based trade agreements with international partners worldwide.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-alt py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Core Values
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in every transaction and partnership." },
              { icon: Globe, title: "Global Reach", desc: "Operating seamlessly across India, UAE, and Oman with international partners." },
              { icon: Handshake, title: "Trust", desc: "Building long-term relationships through transparent and secure trade practices." },
              { icon: Award, title: "Excellence", desc: "Delivering premium quality products with full documentation and compliance." },
              { icon: Users, title: "Partnership", desc: "Strategic joint ventures and collaborations for mutual growth and success." },
              { icon: Film, title: "Diversification", desc: "Active film production across Hindi, Tamil, Telugu, Kannada, Malayalam & Bengali cinema." },
            ].map((v, i) => (
              <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-background p-8 rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Objectives */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">
            Business Objectives
          </motion.h2>
          <div className="space-y-4">
            {[
              "Direct refinery supply partnerships",
              "Long-term oil and petroleum contracts",
              "Metal supply agreements",
              "Strategic joint ventures",
              "Film production and investment collaborations",
            ].map((obj, i) => (
              <motion.div key={obj} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-foreground font-medium">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
