import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-[color:var(--text-muted)] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 relative"
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
      </div>
    </section>
  );
};

export default Testimonials;
