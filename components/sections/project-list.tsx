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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative flex flex-col rounded-[60px] overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-500/40 transition-all duration-700 shadow-3xl"
            >
              <Link href={`/projects/${project.id}`} className="absolute inset-0 z-30" />
              <div className="aspect-16/11 overflow-hidden relative">
                <BlurInView delay={0.2} duration={1}>
                  <ImageWithFallback src={project.img} alt={project.title} width={1000} height={700} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                </BlurInView>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                <div className="absolute top-8 left-8 z-10">
                  <span className="px-5 py-2 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_50px_rgba(255,255,255,0.3)] scale-50 group-hover:scale-100 transition-transform duration-700 delay-100">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <div className="p-12 flex flex-col gap-10 flex-1 relative bg-slate-900/20 backdrop-blur-sm">
                <div className="flex flex-col gap-6">
                  <h3 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter italic group-hover:text-cyan-400 transition-colors duration-500 px-4 -ml-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-[10px] font-black text-cyan-500 uppercase tracking-widest">
                      Hợp đồng
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight">{project.value}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em]">Đối tác chiến lược</span>
                    <span className="text-white font-black text-2xl tracking-tight uppercase italic px-4 -ml-4">{project.client}</span>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-auto pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4 px-6 py-3 bg-emerald-500/5 border border-emerald-500/20 rounded-[20px] w-full sm:w-auto shadow-inner">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-sm font-black text-emerald-400 uppercase tracking-wider leading-tight">
                      {project.results}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] group/btn shrink-0 hover:text-cyan-400 transition-colors">
                    Chi tiết <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform duration-500" />
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
