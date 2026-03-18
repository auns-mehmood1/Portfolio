import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { cn } from '../lib/utils';

const categories = ['All', 'Mobile', 'Web', 'Backend', 'AI/Marketing'];

const projects = [
  {
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial management dashboard with real-time data visualization and automated reporting.',
    tags: ['Web', 'React', 'D3.js'],
    category: 'Web',
    image: 'https://picsum.photos/seed/fintech/800/600'
  },
  {
    title: 'HealthTrack App',
    description: 'A cross-platform mobile application for tracking fitness goals, nutrition, and sleep patterns.',
    tags: ['Mobile', 'Flutter', 'Firebase'],
    category: 'Mobile',
    image: 'https://picsum.photos/seed/health/800/600'
  },
  {
    title: 'AI Content Engine',
    description: 'An AI-powered platform for generating high-quality marketing content and social media posts.',
    tags: ['AI/Marketing', 'Python', 'OpenAI'],
    category: 'AI/Marketing',
    image: 'https://picsum.photos/seed/ai/800/600'
  },
  {
    title: 'E-Commerce API',
    description: 'A high-performance backend API for a global e-commerce platform supporting millions of transactions.',
    tags: ['Backend', 'Node.js', 'PostgreSQL'],
    category: 'Backend',
    image: 'https://picsum.photos/seed/backend/800/600'
  },
  {
    title: 'Crypto Wallet',
    description: 'A secure and intuitive mobile wallet for managing multiple cryptocurrencies and NFTs.',
    tags: ['Mobile', 'React Native', 'Web3'],
    category: 'Mobile',
    image: 'https://picsum.photos/seed/crypto/800/600'
  },
  {
    title: 'SaaS Analytics',
    description: 'A powerful analytics tool for SaaS businesses to track user behavior and churn rates.',
    tags: ['Web', 'Next.js', 'Tailwind'],
    category: 'Web',
    image: 'https://picsum.photos/seed/saas/800/600'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20" 
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.title}
                {...project}
                liveUrl="#"
                githubUrl="#"
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
