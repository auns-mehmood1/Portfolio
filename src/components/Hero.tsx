import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-purple text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
            </span>
            Now accepting new projects
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Where <span className="gradient-text">Innovation</span> <br />
            Meets Execution
          </h1>
          
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            MetaBuf Sol. is a premier digital agency crafting high-performance 
            software solutions. We turn complex challenges into seamless digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary flex items-center gap-2 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-secondary flex items-center gap-2 group">
              See Our Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* 3D-like Service Cards */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {[
              { title: 'Development', icon: '💻', color: 'from-blue-500/20' },
              { title: 'Design', icon: '🎨', color: 'from-purple-500/20' },
              { title: 'Mobile', icon: '📱', color: 'from-green-500/20' },
              { title: 'Web', icon: '🌐', color: 'from-orange-500/20' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                  "glass-card p-6 flex flex-col items-center justify-center text-center gap-3 group cursor-default",
                  "bg-gradient-to-br to-transparent",
                  item.color
                )}
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue/30 blur-3xl rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
