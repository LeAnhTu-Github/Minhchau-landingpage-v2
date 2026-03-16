import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Code, Link2, ShieldCheck, Microscope, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { FadeInView, StaggerContainer, BlurInView } from "@/components/ui/animations";
import { JsonLd, serviceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Cung cấp các dịch vụ phát triển phần mềm, tích hợp hệ thống viễn thông, vận hành bảo trì SLA và kiểm thử QA chuyên nghiệp.",
};

const services = [
  {
    id: "software",
    title: "Phát triển phần mềm & chuyển đổi số",
    short: "Phát triển phần mềm theo yêu cầu",
    desc: "Chúng tôi xây mới hoặc nâng cấp hệ thống phần mềm phục vụ nghiệp vụ doanh nghiệp, ưu tiên tính ổn định, khả năng mở rộng và bảo mật. Phù hợp với các dự án cần xử lý nghiệp vụ phức tạp hoặc hệ thống tải cao.",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    bullets: [
      "Web/app, portal, dashboard vận hành",
      "Nâng cấp/tối ưu hệ thống hiện hữu",
      "Tích hợp API, đồng bộ dữ liệu"
    ],
    cta: "Nhận tư vấn giải pháp phần mềm"
  },
  {
    id: "telecom",
    title: "Tích hợp hệ thống & viễn thông",
    short: "Tích hợp hệ thống viễn thông",
    desc: "Minh Châu có năng lực tích hợp hệ thống viễn thông theo yêu cầu dự án, bao gồm các nền tảng và kết nối như IP/SS7/HLR/IN. Chúng tôi tập trung vào tính ổn định, liên thông dữ liệu và khả năng vận hành bền vững.",
    icon: Link2,
    color: "from-amber-400 to-orange-600",
    bullets: [
      "Liên thông hệ thống, tích hợp nền tảng",
      "Thiết kế luồng dữ liệu & kiểm soát rủi ro",
      "Hỗ trợ vận hành sau triển khai"
    ],
    cta: "Trao đổi yêu cầu tích hợp"
  },
  {
    id: "sla",
    title: "Vận hành – bảo trì – SLA",
    short: "Vận hành theo SLA",
    desc: "Sau khi go-live, tính ổn định quyết định hiệu quả dự án. Minh Châu cung cấp dịch vụ vận hành–bảo trì theo SLA, hỗ trợ xử lý sự cố, bảo trì định kỳ và đề xuất cải tiến vận hành.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-600",
    bullets: [
      "Tiếp nhận & phân loại sự cố theo mức độ",
      "Bảo trì định kỳ, tối ưu hiệu năng",
      "Báo cáo vận hành & khuyến nghị cải tiến"
    ],
    cta: "Nhận đề xuất SLA"
  },
  {
    id: "qa",
    title: "Kiểm thử & đảm bảo chất lượng",
    short: "Kiểm thử QA",
    desc: "Minh Châu triển khai hoạt động kiểm thử từ phân tích yêu cầu đến xây dựng test plan, test case và báo cáo chất lượng, hỗ trợ nghiệm thu và bàn giao tài liệu theo tiêu chuẩn dự án.",
    icon: Microscope,
    color: "from-purple-500 to-indigo-600",
    bullets: [
      "Test chức năng, hồi quy (tuỳ dự án)",
      "Báo cáo lỗi & theo dõi khắc phục",
      "Tài liệu kiểm thử phục vụ nghiệm thu"
    ],
    cta: "Nhận gói QA"
  }
];

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
              <h1 className="text-4xl md:text-8xl font-black tracking-tight text-white uppercase leading-tight">
                Dịch vụ của <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Minh Châu</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl md:text-3xl text-slate-400 leading-relaxed font-medium">
                Cung cấp giải pháp theo mô-đun, hướng tới khả năng vận hành thực tế và tối ưu chi phí dài hạn.
              </p>
            </FadeInView>
          </StaggerContainer>
        </Container>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-32">
            {services.map((service, i) => (
              <FadeInView
                key={service.id}
                delay={0.1}
                className={cn(
                  "flex flex-col lg:flex-row gap-20 items-center",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <StaggerContainer className="flex-1 flex flex-col gap-10">
                  <div className="flex flex-col gap-8">
                    <FadeInView direction="up">
                      <div className={cn("w-24 h-24 rounded-3xl bg-linear-to-br p-0.5 shadow-2xl", service.color)}>
                        <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                          <service.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </FadeInView>
                    <FadeInView direction="up" delay={0.1}>
                      <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter italic px-4 -ml-4">{service.title}</h2>
                    </FadeInView>
                    <FadeInView direction="up" delay={0.2}>
                      <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </FadeInView>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.bullets.map((bullet, idx) => (
                      <FadeInView key={idx} delay={0.3 + idx * 0.1} direction="left">
                        <div className="flex gap-5 p-6 rounded-[28px] bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-xl hover:bg-slate-800/40">
                          <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 group-hover:scale-125 transition-transform" />
                          <span className="text-slate-200 font-black text-sm uppercase tracking-wider leading-tight">{bullet}</span>
                        </div>
                      </FadeInView>
                    ))}
                  </div>

                  <FadeInView delay={0.6}>
                    <Link href="/contact" className="w-fit px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-3xl shadow-cyan-900/40 transition-all flex items-center gap-4 uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95">
                      {service.cta} <ArrowRight className="w-6 h-6" />
                    </Link>
                  </FadeInView>
                </StaggerContainer>

                <div className="flex-1 w-full aspect-square bg-slate-950 rounded-[80px] overflow-hidden border border-slate-800 relative group shadow-3xl">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className={cn("absolute inset-0 blur-[100px] opacity-30", service.color.replace('from-', 'bg-'))} />
                      <BlurInView delay={0.4}>
                        <service.icon className="w-64 h-64 text-slate-900 transition-all duration-1000 group-hover:text-cyan-500/10 group-hover:scale-110 group-hover:-rotate-6 relative z-10" />
                      </BlurInView>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-16 left-16 w-32 h-px bg-linear-to-r from-cyan-500/50 to-transparent" />
                  <div className="absolute top-16 left-16 h-32 w-px bg-linear-to-b from-cyan-500/50 to-transparent" />
                  <div className="absolute bottom-16 right-16 w-32 h-px bg-linear-to-l from-cyan-500/50 to-transparent" />
                  <div className="absolute bottom-16 right-16 h-32 w-px bg-linear-to-t from-cyan-500/50 to-transparent" />
                </div>
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950">
        <Container>
          <FadeInView className="bg-linear-to-br from-slate-900 to-slate-950 p-16 md:p-32 rounded-[60px] border border-slate-800 flex flex-col items-center text-center gap-12 shadow-3xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none" />
            <div className="flex flex-col gap-8 max-w-4xl relative z-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight uppercase italic px-4 -ml-4">Chưa chắc chọn dịch vụ nào?</h2>
              <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                Gửi mô tả yêu cầu, Minh Châu sẽ tư vấn mô hình phù hợp và đề xuất lộ trình triển khai theo mục tiêu thực tế.
              </p>
            </div>
            <Link href="/contact" className="px-20 py-8 bg-white text-slate-950 font-black rounded-3xl shadow-3xl hover:bg-cyan-500 hover:text-white transition-all text-2xl uppercase tracking-[0.3em] relative z-10 hover:scale-110 active:scale-95">
              Tư vấn ngay
            </Link>
          </FadeInView>
        </Container>
      </section>
    </div>
  );
}
