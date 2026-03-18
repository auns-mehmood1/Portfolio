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
    <section className="py-24 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-white/60">
              We use the latest technologies to build scalable, high-performance 
              solutions that stand the test of time.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
              Performance First
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
              Scalable Architecture
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">
                {group.title}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className="glass-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="font-medium">{tech.name}</span>
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
