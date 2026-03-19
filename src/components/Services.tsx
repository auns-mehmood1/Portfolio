import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Smartphone, 
  Globe, 
  Megaphone, 
  Palette, 
  ShoppingCart,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI-Focused Marketing',
    description: 'Leverage machine learning to optimize your reach and conversion rates with data-driven strategies.',
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions that provide seamless user experiences on iOS and Android.',
    icon: Smartphone,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Website Design & Development',
    description: 'High-performance, SEO-optimized websites built with modern frameworks like React and Next.js.',
    icon: Globe,
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    title: 'Social Media & Content Marketing',
    description: 'Strategic content creation and social management to build brand authority and engage your audience.',
    icon: Megaphone,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  },
  {
    title: 'Branding & Design',
    description: 'Visual identities that resonate. From logos to full brand guidelines, we craft memorable designs.',
    icon: Palette,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10'
  },
  {
    title: 'E-Commerce Development',
    description: 'Scalable online stores with secure payments and optimized checkout flows to drive sales.',
    icon: ShoppingCart,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Our <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[color:var(--text-muted)] max-w-2xl mx-auto"
          >
            We provide comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, we've got you covered.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group hover:border-brand-purple/50 transition-colors"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={service.color} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-[color:var(--text-muted)] mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--text-faint)] group-hover:text-[color:var(--text-primary)] transition-colors"
              >
                Learn More
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
