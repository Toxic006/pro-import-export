import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Clock,
  Globe,
  Shield,
  CheckCircle2,
  Handshake,
  ArrowRight,
} from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import preciousMetals from "@/assets/precious-metals.jpg";
import { toast } from "sonner";

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
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const contactInfo = [
  { icon: MapPin, label: "Business Presence", value: "India | Dubai (UAE) | Oman", color: "bg-primary/10" },
  { icon: Phone, label: "Phone", value: "+91 XXXXXXXXXX", color: "bg-primary/10" },
  { icon: Mail, label: "Email", value: "contact@alhashmi.com", color: "bg-primary/10" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat, 9 AM – 6 PM (IST / GST)", color: "bg-primary/10" },
];

const trustBadges = [
  { icon: Shield, label: "LC-Based Contracts" },
  { icon: Globe, label: "3+ Countries" },
  { icon: CheckCircle2, label: "Full Documentation" },
  { icon: Handshake, label: "20+ Years Trust" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Banner — parallax */}
      <section ref={heroRef} className="relative min-h-[60svh] sm:min-h-[50svh] flex items-center justify-center overflow-hidden">
        <motion.img src={heroPort} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ scale: heroScale }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

        <motion.div
          className="absolute top-24 left-16 w-28 h-28 rounded-full border border-primary/20 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm"
          >
            <Mail size={14} className="text-primary" />
            <span className="text-primary font-semibold text-[11px] sm:text-xs uppercase tracking-[0.15em]">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.1] max-w-4xl mx-auto"
            style={{ color: "white", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Get in touch for trade inquiries, partnerships, or quotations. Our team responds within 24 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        <div className="relative container mx-auto px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
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
                  className="w-10 h-10 mx-auto mb-2 rounded-xl bg-primary-foreground/15 flex items-center justify-center"
                >
                  <badge.icon size={18} className="text-primary-foreground" />
                </motion.div>
                <p className="font-heading font-bold text-sm text-primary-foreground">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                  <Sparkles size={14} />
                  Reach Out
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                  Let's Start a <span className="text-gradient">Conversation</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Whether you're looking for bulk trading partnerships, product inquiries, or strategic collaborations — we're here to help build lasting trade relationships.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-start gap-4 group cursor-default p-3 rounded-xl hover:bg-muted/50 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300"
                    >
                      <item.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground text-sm sm:text-base group-hover:text-primary transition-colors duration-300">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={5}
                className="bg-card border border-border rounded-2xl p-5 mt-6"
              >
                <h4 className="font-heading font-bold text-sm text-foreground mb-3">Quick Inquiry Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {["Gold Trading", "Copper Import", "EN590 Diesel", "Bulk Orders", "LC Documentation", "Partnerships"].map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-5 hover:shadow-xl transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Send size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">Send a Message</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-sm font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors duration-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/40"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors duration-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/40"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-sm font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors duration-300">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/40"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors duration-300">Subject *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/40"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors duration-300">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none hover:border-primary/40"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto"
                >
                  <Send size={16} />
                  Send Message
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Globe size={14} className="text-primary" />
              Global Operations
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold max-w-3xl mx-auto leading-tight"
              style={{ color: "white", textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Operating Across <span className="text-primary">India, Dubai & Oman</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              With business presence in three countries, we're strategically positioned to serve your international trading needs.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
