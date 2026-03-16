"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

import { PROJECTS } from "@/lib/constants";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.id === slug) || PROJECTS[0];

  return (
    <div className="flex flex-col">
      <section className="pt-24 pb-12 bg-slate-950">
        <Container>
          <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Quay lại danh sách dự án
          </Link>

          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase rounded-full border border-cyan-500/20">
                {project.category}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight uppercase">
              {project.title}
            </h1>
            <p className="text-2xl font-bold text-cyan-500">
              Giá trị hợp đồng: {project.value}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 flex flex-col gap-16">
              <div className="rounded-[40px] overflow-hidden border border-slate-800 shadow-2xl relative">
                <ImageWithFallback src={project.img} alt={project.title} width={1200} height={800} className="w-full h-auto" />
              </div>

              <div className="grid gap-12">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-white">Bài toán</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-white">Giải pháp Minh Châu</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {project.solution}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {[
                      "Khảo sát & Phân tích nghiệp vụ",
                      "Thiết kế giải pháp & POC",
                      "Triển khai & Tích hợp hệ thống",
                      "Kiểm thử QA & Nghiệm thu",
                      "Bàn giao tài liệu đầy đủ",
                      "Vận hành - Bảo trì SLA"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center p-4 rounded-2xl bg-slate-900 border border-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                        <span className="text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-white">Kết quả</h2>
                  <p className="text-slate-400 text-lg leading-relaxed italic bg-slate-900/50 p-8 rounded-3xl border border-slate-800/50">
                    “{project.results}”
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 p-8 bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[40px] shadow-2xl flex flex-col gap-8">
                <h3 className="text-2xl font-bold text-white">Xây dựng giải pháp tương tự?</h3>
                <p className="text-slate-400">
                  Hãy để Minh Châu tư vấn mô hình triển khai và ước tính chi phí - tiến độ cho dự án của bạn.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span>Cam kết SLA vận hành</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span>Hỗ trợ kỹ thuật 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    <span>Tài liệu bàn giao rõ ràng</span>
                  </div>
                </div>
                <Link href="/contact" className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all flex items-center justify-center gap-2">
                  Nhận tư vấn dự án tương tự <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
