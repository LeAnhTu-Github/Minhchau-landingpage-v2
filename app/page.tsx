import Link from "next/link";
import { ArrowRight, Code, ShieldCheck, Zap, Search, CheckCircle2, ChevronRight } from "lucide-react";
import Hero from "@/components/sections/hero";
import FinancialStats from "@/components/sections/financial-stats";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Container } from "@/components/ui/container";
import { JsonLd, organizationJsonLd } from "@/components/seo/JsonLd";
import { FadeInView, ScaleInView, StaggerContainer, BlurInView } from "@/components/ui/animations";

import { SERVICES, PROJECTS } from "@/lib/constants";

const processSteps = [
  { step: "01", title: "Tiếp nhận yêu cầu", desc: "Lắng nghe và phân tích bài toán khách hàng" },
  { step: "02", title: "Đề xuất giải pháp", desc: "Tư vấn kiến trúc & báo giá chi tiết" },
  { step: "03", title: "Thiết kế/POC", desc: "Xây dựng mẫu thử & kiểm chứng kỹ thuật" },
  { step: "04", title: "Triển khai & Tích hợp", desc: "Phát triển phần mềm & kết nối hệ thống" },
  { step: "05", title: "Kiểm thử & Bàn giao", desc: "QA/QC nghiêm ngặt & đầy đủ tài liệu" },
  { step: "06", title: "Vận hành & Bảo trì", desc: "Đồng hành sau go-live theo SLA" }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <JsonLd data={organizationJsonLd} />
      <Hero />

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-80 h-80 bg-cyan-500/5 blur-[100px] pointer-events-none" />
        <Container>
          <FadeInView className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Dịch vụ cốt lõi</h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase">Dịch vụ của Minh Châu</h3>
            <p className="text-slate-400 text-base">
              Chúng tôi xây dựng dịch vụ theo mô-đun để phù hợp nhiều loại dự án, từ triển khai trọn gói đến vận hành chuyên nghiệp.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <FadeInView
                key={i}
                delay={i * 0.1}
                className="group p-8 rounded-[24px] bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:bg-slate-800/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} p-0.5 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link href="/services" className="text-sm font-bold text-cyan-500 flex items-center gap-2 group/link uppercase tracking-wider">
                  Tìm hiểu thêm <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </FadeInView>
            ))}
          </StaggerContainer>

          <FadeInView delay={0.4} className="mt-16 flex justify-center">
            <Link href="/services" className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:scale-105">
              Xem tất cả dịch vụ
            </Link>
          </FadeInView>
        </Container>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-900/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <ScaleInView className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative border border-slate-800">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="Tech" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl mt-12 relative border border-slate-800">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team" width={400} height={400} className="w-full h-full object-cover" />
                </div>
              </ScaleInView>
              <FadeInView direction="right" delay={0.6} className="absolute -bottom-10 -right-6 p-10 bg-linear-to-br from-cyan-600 to-blue-700 rounded-[40px] shadow-3xl max-w-xs border border-white/20 hidden md:block group hover:scale-105 transition-transform">
                <p className="text-white font-black text-5xl mb-2">100%</p>
                <p className="text-cyan-50 text-base font-bold leading-tight">Cam kết nghiệm thu và bàn giao đầy đủ tài liệu cho mọi dự án.</p>
              </FadeInView>
            </div>

            <StaggerContainer className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <FadeInView direction="left">
                  <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase">Giá trị cốt lõi</h2>
                </FadeInView>
                <FadeInView direction="left" delay={0.1}>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase tracking-tight">Chuyên nghiệp triển khai – Rõ ràng bàn giao</h3>
                </FadeInView>
              </div>

              <FadeInView direction="left" delay={0.2}>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Với Minh Châu, “xong dự án” không chỉ là hoàn thành code. Chúng tôi ưu tiên kiểm soát rủi ro bằng phạm vi rõ ràng, kế hoạch kiểm thử phù hợp.
                </p>
              </FadeInView>

              <div className="space-y-4">
                {[
                  "Scope/Timeline/Acceptance criteria rõ ngay từ đầu",
                  "Kiểm thử & tài liệu nghiệm thu theo tiêu chuẩn dự án",
                  "Có phương án vận hành–bảo trì, giảm rủi ro tối đa"
                ].map((item, i) => (
                  <FadeInView key={i} direction="left" delay={0.3 + i * 0.1} className="flex gap-5 items-center p-6 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    </div>
                    <p className="text-slate-200 font-bold text-base">{item}</p>
                  </FadeInView>
                ))}
              </div>

              <FadeInView direction="left" delay={0.6} className="pt-4">
                <Link href="/contact" className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-2xl shadow-cyan-900/40 inline-flex items-center gap-3 transition-all hover:scale-105 uppercase tracking-widest text-sm">
                  Trao đổi yêu cầu <ArrowRight className="w-5 h-5" />
                </Link>
              </FadeInView>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      <FinancialStats />

      {/* Projects Preview */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeInView className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase">Dự án thực tế</h2>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight">Hợp đồng tiêu biểu</h3>
              <p className="text-slate-400 text-lg font-medium">
                Kinh nghiệm triển khai thực tế trên nhiều quy mô và lĩnh vực khác nhau.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <Link href="/projects" className="px-8 py-4 border border-slate-700 hover:bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-3 shrink-0 transition-all hover:scale-105 uppercase tracking-wider text-xs">
                Tất cả dự án <ChevronRight className="w-5 h-5" />
              </Link>
            </FadeInView>
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map((project, i) => (
              <ScaleInView
                key={i}
                delay={i * 0.1}
                className="group relative rounded-[24px] overflow-hidden border border-slate-800 bg-slate-900/50 h-full hover:border-cyan-500/30 transition-all duration-500 shadow-xl flex flex-col"
              >
                <Link href={`/projects/${project.id}`} className="absolute inset-0 z-20" />
                <div className="aspect-16/11 overflow-hidden relative">
                  <BlurInView delay={0.2 + i * 0.1}>
                    <ImageWithFallback src={project.img} alt={project.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </BlurInView>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                </div>
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 z-10 flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <p className="text-white/60 font-bold text-sm tracking-tight uppercase italic">{project.client}</p>
                    <h4 className="text-lg font-extrabold text-white leading-tight uppercase group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between">
                    <p className="text-cyan-500 font-bold text-sm uppercase">{project.value}</p>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-500 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </ScaleInView>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />
        <Container>
          <FadeInView className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 gap-6">
            <h2 className="text-sm font-bold tracking-[0.4em] text-cyan-500 uppercase">Quy trình làm việc</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-[1.2] py-2">Triển khai rõ ràng</h3>
            <p className="text-slate-400 text-lg font-medium">
              Kiểm soát tiến độ và chất lượng, giảm thiểu rủi ro tối đa cho đối tác.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((p, i) => (
              <FadeInView key={i} delay={i * 0.1} className="relative p-8 rounded-[30px] bg-slate-900 border border-slate-800 flex flex-col gap-4 group hover:border-cyan-500/20 transition-all duration-500 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-7xl font-black text-slate-800/40 group-hover:text-cyan-500/10 transition-colors absolute top-6 right-10 select-none italic">
                  {p.step}
                </div>
                <h4 className="text-xl font-black text-white relative z-10 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{p.title}</h4>
                <p className="text-slate-400 text-base relative z-10 leading-relaxed font-medium">{p.desc}</p>
              </FadeInView>
            ))}
          </StaggerContainer>

          <FadeInView delay={0.6} className="mt-20 flex flex-col items-center gap-6">
            <Link href="/contact" className="px-12 py-6 bg-linear-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-black rounded-[20px] shadow-3xl shadow-blue-900/40 text-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
              Nhận tư vấn ngay
            </Link>
          </FadeInView>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <FadeInView className="bg-linear-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[50px] p-16 md:p-32 relative overflow-hidden text-center flex flex-col items-center gap-12 shadow-3xl">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/20 blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse delay-1000" />

            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] max-w-5xl uppercase tracking-tighter italic px-4 -mx-4">
              Bắt đầu hành trình <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Kỹ thuật số bền vững</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl font-medium leading-relaxed">
              Minh Châu sẵn sàng đồng hành cùng bạn từ ý tưởng đến vận hành thực tế. Hãy để chúng tôi làm rõ nhu cầu và đề xuất phương án tối ưu nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10 pt-4">
              <Link href="/contact" className="px-14 py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-2xl shadow-cyan-900/50 transition-all hover:scale-110 active:scale-95 uppercase tracking-widest text-sm">
                Gửi yêu cầu tư vấn
              </Link>
              <Link href="/about" className="px-14 py-6 bg-slate-900/50 backdrop-blur-md border border-slate-700 hover:bg-slate-800 text-white font-black rounded-2xl transition-all hover:scale-110 active:scale-95 uppercase tracking-widest text-sm">
                Về Minh Châu
              </Link>
            </div>
          </FadeInView>
        </Container>
      </section>
    </div>
  );
}
