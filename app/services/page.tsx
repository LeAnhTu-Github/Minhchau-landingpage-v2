import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Code, Link2, ShieldCheck, Microscope, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { FadeInView, StaggerContainer, BlurInView } from "@/components/ui/animations";
import { SERVICES } from "@/lib/constants";
import { JsonLd, serviceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Cung cấp các dịch vụ phát triển phần mềm, tích hợp hệ thống viễn thông, vận hành bảo trì SLA và kiểm thử QA chuyên nghiệp.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={serviceJsonLd} />
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <Container className="relative z-10">
          <StaggerContainer className="flex flex-col gap-8 max-w-4xl">
            <FadeInView direction="down">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[1.2] py-2">
                Dịch vụ <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 via-cyan-300 px-4 -mx-4">Minh Châu</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium">
                Cung cấp giải pháp theo mô-đun, hướng tới khả năng vận hành thực tế và tối ưu chi phí dài hạn.
              </p>
            </FadeInView>
          </StaggerContainer>
        </Container>
      </section>

      {/* Main Services List */}
      <section className=" py-24 overflow-hidden">
  <Container>
    <div className="flex flex-col gap-20 md:gap-32">
      {SERVICES.map((service, i) => (
        <div
          key={service.id}
          className={cn(
            "flex flex-col lg:flex-row gap-10 md:gap-20 items-center",
            i % 2 === 1 ? "lg:flex-row-reverse" : ""
          )}
        >
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col gap-8 md:gap-10">
            {/* Header */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div
                className={cn(
                  "w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-linear-to-br p-0.5 shadow-2xl",
                  service.color
                )}
              >
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                  <service.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </div>

              {/* ❌ bỏ -ml-4 */}
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter italic px-2 md:px-4 break-words">
                {service.title}
              </h2>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 md:gap-5 p-5 md:p-6 rounded-[20px] md:rounded-[28px] bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-xl hover:bg-slate-800/40"
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 shrink-0" />
                  <span className="text-slate-200 font-bold text-xs md:text-sm uppercase tracking-wider leading-tight">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="w-fit px-8 md:px-12 py-4 md:py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-lg transition-all flex items-center gap-3 md:gap-4 uppercase tracking-widest text-xs md:text-sm"
            >
              {service.cta}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full aspect-square bg-slate-950 rounded-[40px] md:rounded-[80px] overflow-hidden border border-slate-800 relative shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div
                  className={cn(
                    "absolute inset-0 blur-[80px] md:blur-[100px] opacity-30",
                    service.color.replace("from-", "bg-")
                  )}
                />
                {/* ❌ giảm size icon mobile */}
                <service.icon className="w-40 h-40 md:w-64 md:h-64 text-slate-900 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950">
        <Container>
          <FadeInView className="bg-linear-to-br from-slate-900 to-slate-950 p-8 lg:p-16 xl:p-32 rounded-[60px] border border-slate-800 flex flex-col items-center text-center gap-12 shadow-3xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none" />
            <div className="flex flex-col gap-8 max-w-4xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase italic px-4 -mx-4">Chưa chắc chọn dịch vụ nào?</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Gửi mô tả yêu cầu, Minh Châu sẽ tư vấn mô hình phù hợp và đề xuất lộ trình triển khai theo mục tiêu thực tế.
              </p>
            </div>
            <Link href="/contact" className="px-10 lg:px-20 py-8 bg-white text-slate-950 font-black rounded-3xl shadow-3xl hover:bg-cyan-500 hover:text-white transition-all text-2xl uppercase tracking-[0.3em] relative z-10 hover:scale-110 active:scale-95">
              Tư vấn ngay
            </Link>
          </FadeInView>
        </Container>
      </section>
    </div>
  );
}
