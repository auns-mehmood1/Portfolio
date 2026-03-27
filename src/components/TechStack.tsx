import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { sectionVariants, itemVariants } from "../lib/motion";
import SectionBorderReveal from "./SectionBorderReveal";

const techGroups = [
  {
    title: "Mobile",
    items: [
      { name: "iOS", icon: "🍎" },
      { name: "Swift", icon: "🧡" },
      { name: "Android", icon: "🤖" },
      { name: "Flutter", icon: "🐦" },
      { name: "React Native", icon: "⚛️" },
    ],
  },
  {
    title: "Web",
    items: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "MUI", icon: "🎛️" },
      { name: "Tailwind", icon: "🌊" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "NestJS", icon: "🦁" },
      { name: "Python", icon: "🐍" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔷" },
      { name: "CI/CD", icon: "🔁" },
      { name: "Monitoring", icon: "📈" },
    ],
  },
];

const TechStack = () => {
  const containerRef = useRef(null);
  const paused = useRef(false);
  const x = useRef(0);
  const rowWidth = useRef(0);

  const [dragOffset, setDragOffset] = useState(0);

  // calculate full width after mount
  useEffect(() => {
    if (containerRef.current) {
      rowWidth.current = containerRef.current.scrollWidth / 2;
    }
  }, []);

  // infinite scroll
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (!paused.current && !dragOffset) {
        x.current -= 0.5;
        if (Math.abs(x.current) >= rowWidth.current) x.current = 0;
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(${x.current}px)`;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [dragOffset]);

  const handleMouseEnter = () => (paused.current = true);
  const handleMouseLeave = () => (paused.current = false);

  const handleDrag = (event, info) => {
    x.current += info.delta.x;
    setDragOffset(info.offset.x);
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  };

  const handleDragEnd = () => {
    setDragOffset(0);
  };

  return (
    <motion.section
      className="py-20 bg-dark-bg/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionBorderReveal
        className="max-w-7xl mx-auto"
        innerClassName="px-6 md:px-8 py-8 md:py-10"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
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

        {/* MOBILE SWIPER */}
        <div className="block md:hidden overflow-hidden relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop
          >
            {techGroups.map((group) => (
              <SwiperSlide key={group.title}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[color:var(--text-faint)]">
                    {group.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {group.items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ y: -4 }}
                        className="glass-card p-3 flex items-center gap-3 bg-gradient-to-br from-purple-900/20 to-blue-900/20"
                      >
                        <div className="w-9 h-9 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <span className="text-sm">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP INFINITE MARQUEE */}
        <div
          className="hidden md:block overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={containerRef}
            className="flex gap-6 w-max items-start"
            drag="x"
            dragConstraints={{ left: -rowWidth.current, right: 0 }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {[...techGroups, ...techGroups].map((group, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex flex-col gap-2 items-center border-r border-white/10 pr-6"
              >
                <h4 className="text-[color:var(--text-faint)] text-xs font-bold mb-1">
                  {group.title}
                </h4>
                <div className="flex gap-2">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="glass-card p-2 flex items-center gap-1 bg-gradient-to-br from-purple-900/20 to-blue-900/20"
                    >
                      <span>{tech.icon}</span>
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionBorderReveal>

      {/* Arrow styling */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 24px;
          height: 24px;
          background: transparent;
          color: white;
          opacity: 0.5;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 14px;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          opacity: 0.9;
        }
      `}</style>
    </motion.section>
  );
};

export default TechStack;
