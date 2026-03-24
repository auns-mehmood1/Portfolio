import React from 'react';
import { motion } from 'motion/react';
import { sectionVariants, itemVariants } from '../lib/motion';

const techGroups = [
  {
    title: 'Mobile',
    items: [
      { name: 'iOS', icon: '🍎' },
      { name: 'Swift', icon: '🧡' },
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
      { name: 'MUI', icon: '🎛️' },
      { name: 'Tailwind', icon: '🌊' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🦁' },
      { name: 'Python', icon: '🐍' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' }
    ]
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '🔷' },
      { name: 'CI/CD', icon: '🔁' },
      { name: 'Monitoring', icon: '📈' }
    ]
  }
];

const TechStack = () => {
  return (
    <motion.section
      className="py-20 bg-dark-bg/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-[color:var(--text-muted)]">
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              transition={{ delay: idx * 0.06 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-[color:var(--text-faint)]">
                {group.title}
              </h3>

              <div className="flex flex-col gap-2">
                {group.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -8, scale: 1.03, rotateX: 1, rotateY: -1 }}
                    className="glass-card p-3 flex items-center gap-3 transition-all duration-300 cursor-default group hover:scale-[1.03] bg-gradient-to-br from-purple-900/20 to-blue-900/20 hover:shadow-[0_16px_40px_rgba(139,92,246,0.2)]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                      {tech.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium block">{tech.name}</span>
                      <span className="text-xs text-[color:var(--text-faint)]">Production-ready tooling</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default TechStack;