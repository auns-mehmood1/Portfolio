import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { sectionVariants, itemVariants } from '../lib/motion';
import SectionBorderReveal from './SectionBorderReveal';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechFlow',
    feedback: 'MetaBuf Sol. transformed our vision into a reality. Their attention to detail and technical expertise is unmatched.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateX',
    feedback: 'Working with them was a seamless experience. They delivered our mobile app ahead of schedule and exceeded expectations.',
    rating: 5
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'CreativePulse',
    feedback: 'The branding and design work they did for us was incredible. It perfectly captured our brand essence.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <motion.section
      className="py-24 bg-dark-bg relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionBorderReveal className="max-w-7xl mx-auto" innerClassName="px-6 md:px-8 py-8 md:py-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-[color:var(--text-muted)] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.03, rotateX: 1, rotateY: -1 }}
              className="glass-card p-8 relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(139,92,246,0.2)]"
            >
              <Quote className="absolute top-6 right-8 text-[color:var(--text-decorative)] w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-purple text-brand-purple" />
                ))}
              </div>
              <p className="text-[color:var(--text-secondary)] mb-8 italic leading-relaxed">
                "{t.feedback}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-[color:var(--text-faint)]">{t.role} @ {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionBorderReveal>
    </motion.section>
  );
};

export default Testimonials;
