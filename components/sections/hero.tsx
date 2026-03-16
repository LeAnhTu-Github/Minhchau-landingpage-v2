"use client";

import Link from "next/link";
import { ArrowRight, Terminal, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Container } from "@/components/ui/container";
import { FadeInView, BlurInView, ScaleInView, StaggerContainer } from "@/components/ui/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <StaggerContainer className="flex flex-col gap-6">
            <FadeInView direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Giải pháp CNTT & Viễn thông hàng đầu
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2} distance={60}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white tracking-tight">
                Giải pháp CNTT <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 via-cyan-300">Triển khai nhanh, vận hành bền vững</span>
              </h1>
            </FadeInView>

            <FadeInView direction="right" delay={0.4} distance={40}>
              <p className="text-base text-slate-400 leading-relaxed max-w-xl">
                Minh Châu cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA. Chúng tôi tập trung vào hiệu quả triển khai thực tế: hệ thống chạy ổn định, quy trình nghiệm thu rõ ràng.
              </p>
            </FadeInView>

            <FadeInView direction="right" delay={0.5} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              {[
                { icon: Terminal, text: "Phần mềm theo yêu cầu" },
                { icon: Zap, text: "Tích hợp viễn thông" },
                { icon: ShieldCheck, text: "Vận hành bảo trì SLA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300 group">
                  <item.icon className="w-5 h-5 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{item.text}</span>
                </div>
              ))}
            </FadeInView>

            <FadeInView direction="right" delay={0.6} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                Nhận tư vấn & báo giá
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                Xem dự án tiêu biểu
              </Link>
            </FadeInView>
          </StaggerContainer>

          <FadeInView direction="left" delay={0.4} duration={1} distance={100} className="relative">
            <ScaleInView delay={0.6} duration={1} className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-slate-800 group">
                <BlurInView delay={0.6}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765561667528-28e39c6174dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzczNjI2NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Minh Chau Services Team"
                    width={1080}
                    height={810}
                    priority
                    className="w-full h-auto aspect-4/3 object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                </BlurInView>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <FadeInView delay={1} direction="up" className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">Đội ngũ chuyên nghiệp</p>
                    <p className="text-slate-400 text-sm font-medium">86% trình độ Đại học trở lên</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-800 bg-slate-700 overflow-hidden relative shadow-lg">
                        <ImageWithFallback src={`https://i.pravatar.cc/150?u=${i}`} alt="Team Member" width={48} height={48} />
                      </div>
                    ))}
                  </div>
                </FadeInView>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-14 -left-14 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-700" />

              {/* Animated floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-cyan-500/20 to-transparent backdrop-blur-3xl rounded-3xl border border-white/10 z-20 flex items-center justify-center shadow-2xl"
              >
                <Zap className="w-10 h-10 text-cyan-400" />
              </motion.div>
            </ScaleInView>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
