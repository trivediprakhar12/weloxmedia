/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  BarChart3, 
  Share2, 
  PenTool, 
  ArrowRight, 
  Menu, 
  X,
  CheckCircle2,
  TrendingUp,
  Users
} from "lucide-react";
import { useState, useEffect } from "react";

const Logo = ({ className = "", size = "md" }) => {
  const isSmall = size === "sm";
  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      <div className="relative flex items-center">
        {/* The Purple Shield/Quadrant */}
        <div className={`${isSmall ? "w-8 h-8" : "w-11 h-11"} bg-[#6336ad] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[1.8rem] flex items-center justify-center shadow-lg relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          <span className={`text-white font-display font-black ${isSmall ? "text-lg" : "text-2xl"} relative z-10`}>W</span>
        </div>
        {/* The Purple Sphere */}
        <div className={`${isSmall ? "w-3.5 h-3.5 -right-2 bottom-0.5" : "w-5 h-5 -right-3 bottom-1"} bg-gradient-to-br from-[#8a5cf5] to-[#4c2a8a] rounded-full absolute shadow-md border border-white/10`} />
      </div>
      {/* The Brand Text */}
      <span className={`font-sans font-black tracking-tight text-on-surface ${isSmall ? "text-lg" : "text-xl"}`}>Welox</span>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-nav ambient-shadow rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? "mx-0" : "mx-4"}`}>
          <Logo size="sm" className="scale-90" />

          <div className="hidden md:flex items-center gap-8">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 primary-gradient text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button 
              className="md:hidden p-2 text-on-surface"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-6 right-6 mt-4 glass-nav ambient-shadow rounded-3xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-on-surface py-2 border-b border-outline-variant/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-4 primary-gradient text-white rounded-full text-lg font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-accent text-secondary text-2xl md:text-3xl mb-4 block"
            >
              Future of Growth
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-on-surface leading-[1.1] mb-8"
            >
              Elevate Your Brand with <span className="text-primary">Data–Driven</span> Marketing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed"
            >
              We blend high-performance strategy with editorial precision to build market-dominating digital engines.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 primary-gradient text-white rounded-full font-bold text-lg ambient-shadow hover:scale-105 transition-transform">
                Get a Free Audit
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary/5 transition-colors">
                View Showcase
              </button>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden ambient-shadow"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Specializations = () => {
  const services = [
    {
      icon: <Search className="text-primary" size={24} />,
      title: "SEO Engine",
      description: "Semantic dominance through technical precision and high-authority link mapping.",
      color: "bg-primary/10"
    },
    {
      icon: <BarChart3 className="text-secondary" size={24} />,
      title: "Market Analysis",
      description: "Algorithmic ad management that prioritizes ROI over vanity impression metrics.",
      color: "bg-secondary/10"
    },
    {
      icon: <Share2 className="text-blue-500" size={24} />,
      title: "Social Pulse",
      description: "Cultural-driven content strategies that turn followers into brand evangelists.",
      color: "bg-blue-500/10"
    },
    {
      icon: <PenTool className="text-purple-500" size={24} />,
      title: "Content Lab",
      description: "High-end editorial storytelling that defines your brand's authority in the field.",
      color: "bg-purple-500/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Specializations</h2>
            <p className="text-lg text-on-surface-variant">
              We don't do templates. We build bespoke growth frameworks tailored to your unique market positioning.
            </p>
          </div>
          <span className="font-accent text-secondary text-2xl rotate-[-5deg]">Expertise focus</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex flex-col gap-6"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-outline-variant/10">
                <div className="w-8 h-1 bg-secondary/30 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-5xl font-bold mb-8">Selected Works.</h2>
            <p className="text-lg text-on-surface-variant mb-12">
              Exploring the intersection of aesthetic brilliance and commercial success.
            </p>
            
            <div className="bg-surface-container p-8 rounded-xl">
              <div className="text-secondary text-4xl font-extrabold mb-2">+320%</div>
              <div className="font-bold text-xl mb-2">Avg. Organic Growth</div>
              <p className="text-sm text-on-surface-variant">
                Measured across our top 15 lifestyle brand partnerships.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden ambient-shadow mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" 
                  alt="Project 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Aura Skincare</h3>
              <p className="text-on-surface-variant">Brand Identity & Digital Strategy</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group md:mt-16"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden ambient-shadow mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Project 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lumina Tech</h3>
              <p className="text-on-surface-variant">Performance Marketing Engine</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  return (
    <section className="py-24 bg-surface-dim relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-accent text-primary text-2xl mb-4 block">Data Integrity</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Precision Insights for <span className="text-secondary">Unrivaled</span> Growth.
            </h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-lg">
              We leverage advanced behavioral analytics and real-time market signals to architect campaigns that outperform the competition by every measurable metric.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-extrabold mb-1">98%</div>
                <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Client Retention</div>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <div className="text-4xl font-extrabold mb-1">1.2B</div>
                <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">Data Points Managed</div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-on-surface rounded-2xl p-4 ambient-shadow overflow-hidden">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-[10px] text-white/40 font-mono uppercase tracking-widest">Live Metrics Engine</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1000" 
                alt="Dashboard" 
                className="rounded-lg opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 glass-nav ambient-shadow px-6 py-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="text-green-500" size={20} />
              </div>
              <div>
                <div className="text-xs text-on-surface-variant font-bold uppercase">Real-time ROI</div>
                <div className="text-lg font-extrabold text-green-600">+42.5%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background text decoration */}
      <div className="absolute bottom-0 right-0 text-[20rem] font-extrabold text-on-surface/[0.02] select-none pointer-events-none leading-none -mb-20 -mr-20">
        WELOX
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="primary-gradient rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-8">Ready to dominate the market?</h2>
            <p className="text-xl text-white/80 mb-12">
              Join 50+ industry leaders who have scaled their operations using our kinetic growth engine.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-white text-primary rounded-full font-bold text-xl hover:scale-105 transition-transform ambient-shadow">
                Claim Your Free Audit
              </button>
              <button className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
          
          {/* Decorative rocket icon background */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 rotate-[-15deg]">
            <TrendingUp size={600} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-dim pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="!items-start mb-6" />
            <p className="text-on-surface-variant leading-relaxed">
              High-performance editorial marketing for brands that refuse to blend in.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Expertise</h4>
            <ul className="flex flex-col gap-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Search Authority</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creative Lab</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conversion Ops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-on-surface-variant">
          <p>© 2026 Welox. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Specializations />
        <Portfolio />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
