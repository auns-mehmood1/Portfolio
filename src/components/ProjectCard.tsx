import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors">{title}</h3>
        <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
