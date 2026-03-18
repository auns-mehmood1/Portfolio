import React from 'react';
import { motion } from 'motion/react';

const techGroups = [
  {
    title: 'Mobile',
    items: [
      { name: 'iOS', icon: '🍎' },
      { name: 'Android', icon: '🤖' },
      { name: 'Flutter', icon: '🐦' },
      { name: 'React Native', icon: '⚛️' }
    ]
  },
  {
    title: 'Web',
    items: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind', icon: '🌊' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🦁' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' }
    ]
  },
  {
    title: 'Design',
    items: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Adobe XD', icon: '💎' },
      { name: 'Photoshop', icon: '📸' },
      { name: 'Illustrator', icon: '🖌️' }
    ]
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-white/60">
              We use the latest technologies to build scalable, high-performance 
              solutions.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
              Performance First
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
              Scalable Architecture
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
                {group.title}
              </h3>

              <div className="flex flex-col gap-2">
                {group.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className="glass-card p-3 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-default group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;