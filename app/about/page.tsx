"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Target, Users, Landmark, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="flex flex-col gap-8 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight"
            >
              Về <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Minh Châu</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium"
            >
              Minh Châu hoạt động trong lĩnh vực dịch vụ và giải pháp công nghệ, cung cấp các dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì, kiểm thử và nội dung số. Chúng tôi theo đuổi định hướng <span className="text-cyan-400 font-bold">“chuyên nghiệp – uy tín – đồng hành”</span>.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest w-fit">
                Tầm nhìn & Sứ mệnh
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Tư duy triển khai hướng tới vận hành
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-lg text-slate-400 leading-relaxed">
                  Với Minh Châu, chất lượng dự án được thể hiện ở khả năng vận hành bền vững sau go-live. Chúng tôi ưu tiên làm rõ tiêu chí nghiệm thu, kế hoạch kiểm thử và tài liệu bàn giao.
                </p>
                <p className="text-slate-500">
                  Chúng tôi luôn đề xuất phương án vận hành phù hợp để khách hàng kiểm soát rủi ro và tối ưu chi phí vận hành dài hạn, thay vì chỉ "code xong là hết".
                </p>
              </div>
              <Link href="/contact" className="w-fit px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all flex items-center gap-2">
                Trao đổi mục tiêu dự án <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Chuyên nghiệp", desc: "Quy trình làm việc bài bản, tài liệu rõ ràng, cam kết tiến độ." },
                { icon: Award, title: "Uy tín", desc: "Năng lực thật, con số thật, kết quả có thể đo lường.", offset: true },
                { icon: Users, title: "Đồng hành", desc: "Hỗ trợ vận hành sau triển khai, phát triển cùng khách hàng." },
                { icon: ShieldCheck, title: "Bền vững", desc: "Hệ thống ổn định, khả năng mở rộng và bảo mật cao.", offset: true }
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-[32px] bg-slate-900 border border-slate-800 shadow-xl transition-all hover:border-cyan-500/30 group ${item.offset ? 'md:mt-12' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all">
                    <item.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="flex flex-col gap-16 lg:gap-24">
            <div className="max-w-4xl flex flex-col gap-8">
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Đội ngũ triển khai là nền tảng
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Minh Châu có quy mô <span className="text-white font-bold">56 nhân sự</span>, trong đó khối kỹ thuật chiếm tỷ trọng lớn; tỷ lệ nhân sự có trình độ Đại học trở lên đạt <span className="text-white font-bold">86%</span>.
              </p>
            </div>

            <div className="w-full bg-slate-900 rounded-[40px] overflow-hidden border border-slate-800 relative shadow-2xl p-8 md:p-16">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="flex-1">
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight italic opacity-90">
                    "Chúng tôi triển khai dự án theo đúng vai trò: quản lý dự án, phân tích nghiệp vụ, phát triển, kiểm thử và vận hành – đảm bảo tiến độ và chất lượng bàn giao."
                  </p>
                </div>
                <div className="flex items-center gap-12 shrink-0">
                  <div className="text-center">
                    <span className="block text-6xl font-black text-cyan-500 mb-2">56</span>
                    <span className="text-sm uppercase font-bold tracking-[0.2em] text-slate-500">Nhân sự</span>
                  </div>
                  <div className="w-px h-16 bg-slate-800 hidden md:block" />
                  <div className="text-center">
                    <span className="block text-6xl font-black text-cyan-500 mb-2">86%</span>
                    <span className="text-sm uppercase font-bold tracking-[0.2em] text-slate-500">Đại học+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Financial Transparency */}
      <section className="py-24">
        <Container>
          <div className="bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[40px] p-12 md:p-24 relative overflow-hidden flex flex-col gap-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
            
            <div className="max-w-3xl flex flex-col gap-6 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Minh bạch năng lực – vững cơ sở hợp tác
              </h2>
              <p className="text-lg text-slate-400">
                Minh Châu công bố các chỉ tiêu theo năm để minh bạch năng lực tổ chức và khả năng tài chính đảm bảo hợp tác dài hạn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { label: "Tổng tài sản 2024", value: "4.228.282.851 VNĐ", desc: "Tăng trưởng ổn định" },
                { label: "Lợi nhuận sau thuế 2024", value: "29.816.780 VNĐ", desc: "Vận hành lành mạnh" },
                { label: "Doanh thu", value: "Tăng trưởng dương", desc: "Chu kỳ 2022-2024" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-950/50 border border-slate-800 p-10 rounded-[32px] flex flex-col gap-4 hover:border-cyan-500/30 transition-all group">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-500 transition-colors">{item.label}</span>
                  <span className="text-2xl font-black text-white">{item.value}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span className="text-sm text-slate-500 font-medium">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start pt-8 relative z-10">
              <button className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-black/20 flex items-center gap-3">
                Tải hồ sơ năng lực (PDF) <Landmark className="w-5 h-5 opacity-50" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="flex flex-col items-center gap-10 text-center px-8 py-20 rounded-[40px] bg-linear-to-b from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight uppercase">Sẵn sàng đồng hành cùng dự án của bạn?</h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Hãy để chúng tôi lắng nghe yêu cầu của bạn và đề xuất lộ trình triển khai phù hợp nhất.
            </p>
            <Link href="/contact" className="px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-cyan-900/40 text-lg uppercase tracking-wider">
              Trao đổi ngay
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
