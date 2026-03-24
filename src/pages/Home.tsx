import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { sectionVariants, itemVariants } from '../lib/motion';

const AnimatedPercent = ({ value, start }: { value: number; start: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, value]);

  return <>{count}%</>;
};

const Home = () => {
  const aboutImageRef = useRef<HTMLDivElement | null>(null);
  const isAboutImageInView = useInView(aboutImageRef, { once: true, amount: 0.35 });

  return (
    <div className="pt-20">
      <Hero />
      
      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={itemVariants}
            className="relative"
            ref={aboutImageRef}
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
            <div className="absolute -bottom-6 -right-6 glass-card p-6 shadow-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20">
              <div className="text-3xl font-bold gradient-text"><AnimatedPercent value={95} start={isAboutImageInView} /></div>
              <div className="text-xs text-[color:var(--text-faint)] uppercase tracking-widest">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
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
      </motion.section>

      <Services />
      <TechStack />
      <Testimonials />

      {/* CTA Section */}
      <motion.section
        className="py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-brand-blue/20 to-brand-green/20 -z-10" />
            <div className="absolute inset-0 bg-dark-card/80 backdrop-blur-xl -z-20" />
            
            <motion.h2 
              variants={itemVariants}
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
      </motion.section>
    </div>
  );
};

export default Home;
