import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProjectList } from "@/components/sections/project-list";
import { FadeInView, StaggerContainer } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Khám phá các dự án tiêu biểu của Minh Châu trong các lĩnh vực phát triển phần mềm, tích hợp hệ thống và viễn thông.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-green-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <Container className="relative z-10">
          <StaggerContainer className="flex flex-col  gap-8 max-w-4xl">
            <FadeInView direction="down">
              <h1 className="text-3xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
                Dự án <span className="inline-block py-2 -my-2  text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Tiêu Biểu</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium">
                Danh mục dự án thể hiện năng lực triển khai thực tế của Minh Châu trong các mảng phần mềm, tích hợp và multimedia.
              </p>
            </FadeInView>
          </StaggerContainer>
        </Container>
      </section>

      {/* Filter & List Section */}
      <section className="py-24">
        <Container>
          <ProjectList />
        </Container>
      </section>

      {/* Concept CTA Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <FadeInView className="bg-linear-to-br from-cyan-600 to-blue-700 p-16 md:p-32 rounded-[60px] shadow-3xl relative overflow-hidden group flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-white/10 rounded-full blur-[120px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="flex flex-col gap-8 max-w-3xl text-center lg:text-left relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter italic px-4 -mx-4">Cần một giải pháp tương tự?</h2>
              <p className="text-xl text-cyan-50 font-medium opacity-90 leading-relaxed">
                Chúng tôi cam kết chất lượng triển khai và bàn giao đầy đủ tài liệu, hỗ trợ vận hành 24/7 theo cam kết SLA.
              </p>
            </div>
            <Link href="/contact" className="px-16 py-8 bg-white text-slate-950 font-black rounded-3xl shadow-3xl hover:bg-slate-950 hover:text-white transition-all text-xl uppercase tracking-[0.3em] relative z-10 shrink-0 hover:scale-110 active:scale-95">
              Liên hệ ngay
            </Link>
          </FadeInView>
        </Container>
      </section>
    </div>
  );
}
