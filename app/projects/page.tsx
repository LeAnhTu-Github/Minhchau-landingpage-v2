"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, ExternalLink, Filter, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "vr-360",
    title: "VR 360",
    client: "MobiFone IT Center",
    category: "Multimedia/VR",
    value: "993.000.000 VNĐ",
    img: "https://images.unsplash.com/photo-1592477342258-c4f30d121f45",
    desc: "Phát triển nền tảng thực tế ảo hỗ trợ trải nghiệm số cho trung tâm dữ liệu.",
    results: "Tăng tương tác khách hàng số, bàn giao đầy đủ tài liệu vận hành."
  },
  {
    id: "scall-vnpt",
    title: "Nâng cấp phần mềm Tổng đài di động SCall",
    client: "VNPT Vĩnh Phúc",
    category: "Viễn thông",
    value: "850.000.000 VNĐ",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    desc: "Nâng cấp hệ thống lõi để đáp ứng tải cao và tích hợp các tính năng viễn thông mới.",
    results: "Hệ thống hoạt động ổn định, giảm 30% gián đoạn dịch vụ."
  },
  {
    id: "bhxh-icorp",
    title: "Nâng cấp hệ thống phần mềm BHXH",
    client: "ICORP",
    category: "Phần mềm",
    value: "654.215.150 VNĐ",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    desc: "Tối ưu hóa quy trình xử lý dữ liệu bảo hiểm và cải thiện giao diện quản trị.",
    results: "Tốc độ xử lý hồ sơ tăng 40%, quy trình nghiệm thu rõ ràng."
  },
  {
    id: "mnp-repair",
    title: "Sửa chữa hệ thống tiếp nhận chuyển mạng giữ số online",
    client: "Đối tác Viễn thông",
    category: "Viễn thông",
    value: "966.175.041 VNĐ",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
    desc: "Xử lý các lỗi logic trong luồng chuyển mạng online và bảo trì định kỳ.",
    results: "Đạt chuẩn SLA 99.99% sau triển khai."
  }
];

const categories = ["Tất cả", "Phần mềm", "Viễn thông", "Multimedia/VR"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredProjects = projects.filter(p =>
    activeCategory === "Tất cả" || p.category === activeCategory
  );

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="flex flex-col gap-8 max-w-4xl text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight"
            >
              Dự án <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Tiêu Biểu</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium"
            >
              Danh mục dự án thể hiện năng lực triển khai thực tế của Minh Châu trong các mảng phần mềm, tích hợp, multimedia và các hạng mục vận hành.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Filter & List Section */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-12">
            {/* Filter UI */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pb-8 border-b border-slate-800">
               <div className="flex items-center gap-2 mr-4 text-slate-500 text-xs font-bold uppercase tracking-[0.2em] shrink-0">
                  <Filter className="w-4 h-4" /> Lọc dự án
               </div>
               <div className="flex flex-wrap gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "px-6 py-2.5 rounded-xl text-sm font-bold transition-all border",
                        activeCategory === cat
                          ? "bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-900/30"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:border-cyan-500/30 hover:text-slate-200"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative flex flex-col rounded-[40px] overflow-hidden border border-slate-800 bg-slate-900/50 hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
                  >
                    <Link href={`/projects/${project.id}`} className="absolute inset-0 z-30" />
                    <div className="aspect-16/10 overflow-hidden relative">
                      <ImageWithFallback src={project.img} alt={project.title} width={800} height={500} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                      <div className="absolute top-6 left-6 z-10">
                         <span className="px-4 py-1.5 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                           {project.category}
                         </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-950 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                             <ExternalLink className="w-6 h-6" />
                          </div>
                      </div>
                    </div>

                    <div className="p-10 flex flex-col gap-8 flex-1 relative bg-slate-900">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight uppercase group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-bold text-cyan-500 uppercase">
                             Hợp đồng
                           </div>
                           <span className="text-xl font-black text-white">{project.value}</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                           <span className="text-[10px] font-bold uppercase text-slate-500 tracking-[0.2em]">Đối tác chiến lược</span>
                           <span className="text-white font-bold text-lg">{project.client}</span>
                        </div>
                        <p className="text-slate-400 text-base leading-relaxed line-clamp-2">
                           {project.desc}
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl w-full sm:w-auto">
                           <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                           <span className="text-xs font-bold text-emerald-400 leading-tight">
                             {project.results}
                           </span>
                        </div>
                        <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group/btn shrink-0">
                           Xem chi tiết <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>

      {/* Concept CTA Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="bg-linear-to-br from-cyan-600 to-blue-700 p-12 md:p-20 rounded-[40px] shadow-3xl relative overflow-hidden group flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="absolute -right-32 -top-32 w-80 h-80 bg-white/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left relative z-10">
               <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">Cần một giải pháp tương tự?</h2>
               <p className="text-xl text-cyan-50 text-medium opacity-90 leading-relaxed font-medium">
                 Chúng tôi cam kết chất lượng triển khai và bàn giao đầy đủ tài liệu, hỗ trợ vận hành 24/7 theo cam kết SLA.
               </p>
            </div>
            <Link href="/contact" className="px-12 py-6 bg-white text-slate-950 font-black rounded-2xl shadow-2xl hover:bg-slate-950 hover:text-white transition-all text-lg uppercase tracking-widest relative z-10 shrink-0">
               Trao đổi dự án ngay
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
