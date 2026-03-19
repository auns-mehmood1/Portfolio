import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden gradient-border">
              <div className="gradient-border-inner flex items-center justify-center p-8">
                <img 
                  src="https://picsum.photos/seed/agency/800/800" 
                  alt="About MetaBuf Sol" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 shadow-2xl">
              <div className="text-3xl font-bold gradient-text">99%</div>
              <div className="text-xs text-[color:var(--text-faint)] uppercase tracking-widest">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Innovation <span className="gradient-text">Meets</span> Execution
            </h2>
            <p className="text-[color:var(--text-muted)] mb-8 leading-relaxed">
              MetaBuf Sol. is more than just a software agency. We are your strategic 
              partners in digital growth. Our focus is on delivering high-impact 
              solutions that combine cutting-edge innovation with flawless execution.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Data-driven decision making',
                'In-house expertise across all domains',
                'Agile development methodology',
                'Focus on long-term scalability'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[color:var(--text-secondary)]">
                  <CheckCircle2 className="text-brand-green" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Services />
      <TechStack />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-brand-blue/20 to-brand-green/20 -z-10" />
            <div className="absolute inset-0 bg-dark-card/80 backdrop-blur-xl -z-20" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Let's build something <br />
              <span className="gradient-text">great together</span>
            </motion.h2>
            <p className="text-[color:var(--text-muted)] mb-10 max-w-xl mx-auto text-lg">
              Ready to take your digital presence to the next level? 
              Our team is ready to help you achieve your goals.
            </p>
            <Link to="/contact" className="btn-primary px-12 py-4 text-lg">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
