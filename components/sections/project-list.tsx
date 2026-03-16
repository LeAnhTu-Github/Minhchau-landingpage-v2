"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Filter, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { cn } from "@/lib/utils";
import { ScaleInView, BlurInView, StaggerContainer, FadeInView } from "@/components/ui/animations";
import { AnimatePresence, motion } from "framer-motion";

import { PROJECTS } from "@/lib/constants";

const categories = ["Tất cả", "Phần mềm", "Viễn thông", "Multimedia/VR"];

export function ProjectList() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

   const filteredProjects = PROJECTS.filter(p =>
    activeCategory === "Tất cả" || p.category === activeCategory
  );

  return (
    <div className="flex flex-col gap-16">
      {/* Filter UI */}
      <FadeInView direction="up">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pb-10 border-b border-slate-800">
          <div className="flex items-center gap-3 mr-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] shrink-0">
            <Filter className="w-5 h-5" /> Lọc dự án
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2",
                  activeCategory === cat
                    ? "bg-cyan-600 border-cyan-500 text-white shadow-2xl shadow-cyan-900/30 scale-110"
                    : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* Project Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.1, delay: i * 0, ease: [0.21, 0.21, 0.21, 0.21] }}
              className="group relative flex flex-col rounded-[24px] overflow-hidden border border-slate-800 bg-slate-900/50 h-full hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
            >
              <Link href={`/projects/${project.id}`} className="absolute inset-0 z-30" />
              <div className="aspect-16/11 overflow-hidden relative">
                <BlurInView delay={0.2} duration={1}>
                  <ImageWithFallback src={project.img} alt={project.title} width={1000} height={700} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                </BlurInView>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <p className="text-white/60 font-bold text-sm tracking-tight uppercase italic">{project.client}</p>
                    <h4 className="text-lg font-extrabold text-white leading-tight uppercase group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between font-black text-[9px] uppercase tracking-[0.2em]">
                    <p className="text-cyan-500 font-bold text-sm uppercase">{project.value}</p>
                    <div className="flex items-center gap-2 text-white/50 group/btn hover:text-cyan-400 transition-colors">
                      Chi tiết <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
