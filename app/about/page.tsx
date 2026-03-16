import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Target, Users, Landmark, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeInView, StaggerContainer, ScaleInView, BlurInView } from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Tìm hiểu về Minh Châu - Đội ngũ chuyên nghiệp, uy tín và đồng hành cùng khách hàng trong các dự án CNTT & Viễn thông.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <Container className="relative z-10">
          <StaggerContainer className="flex flex-col gap-8 max-w-5xl">
            <FadeInView direction="down">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[1.2] py-2">
                Về <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 via-cyan-300  px-4 -mx-4">Minh Châu</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium max-w-4xl">
                Cung cấp giải pháp công nghệ với định hướng <span className="text-cyan-400 font-black">“Chuyên nghiệp – Uy tín – Đồng hành”</span>. Chúng tôi tập trung vào giá trị thực tế và vận hành bền vững.
              </p>
            </FadeInView>
          </StaggerContainer>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <StaggerContainer className="flex flex-col gap-10">
              <FadeInView direction="left" className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.4em] w-fit">
                Giá trị cốt lõi
              </FadeInView>
              <FadeInView direction="left" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase italic px-4 -mx-4 py-2">
                  Hướng tới vận hành
                </h2>
              </FadeInView>
              <div className="flex flex-col gap-8">
                <FadeInView direction="left" delay={0.2}>
                  <p className="text-xl text-slate-400 leading-relaxed font-medium">
                    Với Minh Châu, chất lượng dự án được thể hiện ở khả năng vận hành bền vững sau go-live.
                  </p>
                </FadeInView>
                <FadeInView direction="left" delay={0.3}>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Chúng tôi luôn đề xuất phương án vận hành phù hợp để khách hàng kiểm soát rủi ro và tối ưu chi phí vận hành dài hạn.
                  </p>
                </FadeInView>
              </div>
              <FadeInView direction="left" delay={0.4}>
                <Link href="/contact" className="w-fit px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-3xl shadow-cyan-900/40 transition-all flex items-center gap-4 uppercase tracking-widest text-sm hover:scale-105 active:scale-95">
                  Trao đổi ngay <ArrowRight className="w-6 h-6" />
                </Link>
              </FadeInView>
            </StaggerContainer>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Target, title: "Chuyên nghiệp", desc: "Quy trình bài bản, tài liệu rõ ràng, cam kết tiến độ." },
                { icon: Award, title: "Uy tín", desc: "Năng lực thật, con số thật, kết quả đo lường được." },
                { icon: Users, title: "Đồng hành", desc: "Hỗ trợ sau triển khai, phát triển cùng khách hàng." },
                { icon: ShieldCheck, title: "Bền vững", desc: "Hệ thống ổn định, bảo mật và mở rộng cao." }
              ].map((item, i) => (
                <ScaleInView key={i} delay={i * 0.1} className="p-6 rounded-[28px] bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-500 hover:border-cyan-500/40 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 rounded-[18px] bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all group-hover:scale-110 duration-500 relative z-10">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight relative z-10">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium relative z-10">{item.desc}</p>
                </ScaleInView>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-20">
            <FadeInView className="max-w-5xl flex flex-col gap-10">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight uppercase py-2">
                Đội ngũ là <span className="inline-block py-2 -my-2  text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Nền tảng</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                Minh Châu có quy mô <span className="text-white font-black">56+ nhân sự</span>, tỷ lệ trình độ Đại học trở lên đạt <span className="text-white font-black">86%</span>.
              </p>
            </FadeInView>

            <ScaleInView delay={0.2} className="w-full bg-slate-900 rounded-[60px] overflow-hidden border border-slate-800 relative shadow-3xl p-12 md:p-24 group">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[150px] pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-20">
                <div className="flex-1">
                  <BlurInView delay={0.4}>
                    <p className="text-2xl md:text-4xl font-black text-white leading-tight italic opacity-90 tracking-normal">
                      "Chúng tôi triển khai theo đúng vai trò, đảm bảo tiến độ và chất lượng bàn giao tuyệt đối."
                    </p>
                  </BlurInView>
                </div>
                <StaggerContainer className="flex items-center gap-16 shrink-0">
                  <FadeInView direction="up" delay={0.6} className="text-center">
                    <span className="block text-6xl font-black text-cyan-500 mb-2 tracking-tighter">56+</span>
                    <span className="text-xs uppercase font-black tracking-[0.5em] text-slate-500">Nhân sự</span>
                  </FadeInView>
                  <div className="w-px h-24 bg-slate-800 hidden md:block" />
                  <FadeInView direction="up" delay={0.8} className="text-center">
                    <span className="block text-6xl font-black text-cyan-500 mb-2 tracking-tighter">86%</span>
                    <span className="text-xs uppercase font-black tracking-[0.5em] text-slate-500">Đại học+</span>
                  </FadeInView>
                </StaggerContainer>
              </div>
            </ScaleInView>
          </div>
        </Container>
      </section>

      {/* Financial Transparency */}
      <section className="py-24">
        <Container>
          <FadeInView className="bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[60px] p-16 md:p-32 relative overflow-hidden flex flex-col gap-20 shadow-3xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

            <div className="max-w-4xl flex flex-col gap-8 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-normal text-white leading-tight uppercase py-2">
                Minh bạch năng lực
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Minh Châu công bố các chỉ tiêu hàng năm để minh bạch năng lực tổ chức và khả năng tài chính.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                { label: "Tổng tài sản 2024", value: "4.2B+ VNĐ", desc: "Tăng trưởng ổn định" },
                { label: "Lợi nhuận sau thuế", value: "Lành mạnh", desc: "Vận hành hiệu quả" },
                { label: "Doanh thu", value: "Tăng trưởng", desc: "Chu kỳ 2022-2024" }
              ].map((item, i) => (
                <FadeInView key={i} delay={0.4 + i * 0.1} className="bg-slate-950/50 border border-slate-800 p-12 rounded-[45px] flex flex-col gap-6 hover:border-cyan-500/40 transition-all group duration-500">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-cyan-500 transition-colors">{item.label}</span>
                  <span className="text-4xl font-black text-white tracking-tight">{item.value}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    <span className="text-sm text-slate-500 font-black uppercase tracking-widest">{item.desc}</span>
                  </div>
                </FadeInView>
              ))}
            </StaggerContainer>

            <FadeInView delay={0.8} className="flex justify-center md:justify-start relative z-10">
              <button className="px-14 py-7 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-3xl transition-all shadow-3xl flex items-center gap-4 uppercase tracking-[0.3em] text-sm hover:scale-105 active:scale-95">
                Tải Profile (PDF) <Landmark className="w-6 h-6 opacity-40" />
              </button>
            </FadeInView>
          </FadeInView>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <FadeInView className="flex flex-col items-center gap-16 text-center px-12 py-32 rounded-[60px] bg-linear-to-b from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
            <h2 className="text-3xl md:text-4xl font-black text-white max-w-4xl leading-[1.1] py-4 uppercase tracking-normal italic px-4 -mx-4">Sẵn sàng đồng hành?</h2>
            <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
              Hãy để chúng tôi lắng nghe yêu cầu của bạn và đề xuất lộ trình triển khai phù hợp nhất.
            </p>
            <Link href="/contact" className="px-20 py-8 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-[30px] transition-all shadow-3xl shadow-cyan-900/50 text-2xl uppercase tracking-[0.3em] hover:scale-110 active:scale-95">
              Trao đổi ngay
            </Link>
          </FadeInView>
        </Container>
      </section>
    </div>
  );
}
