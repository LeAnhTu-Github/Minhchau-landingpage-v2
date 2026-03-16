"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Link2, ShieldCheck, Microscope, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

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
              Dịch vụ của <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Minh Châu</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium"
            >
              Cung cấp dịch vụ theo mô-đun, giúp khách hàng lựa chọn đúng phương án theo mục tiêu dự án. Mỗi dịch vụ đều hướng tới khả năng vận hành thực tế và tối ưu chi phí dài hạn.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Main Services List */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col gap-32">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={cn(
                  "flex flex-col lg:flex-row gap-16 items-center",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="flex-1 flex flex-col gap-10">
                  <div className="flex flex-col gap-6">
                    <div className={cn("w-20 h-20 rounded-3xl bg-linear-to-br p-0.5 shadow-xl", service.color)}>
                      <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">{service.title}</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-lg">
                        <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-200 font-bold text-sm leading-tight">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="w-fit px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-2xl shadow-cyan-900/30 transition-all flex items-center gap-3 uppercase tracking-wider text-sm">
                    {service.cta} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="flex-1 w-full aspect-square bg-slate-950 rounded-[60px] overflow-hidden border border-slate-800 relative group shadow-2xl">
                   <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className={cn("absolute inset-0 blur-[60px] opacity-20", service.color.replace('from-', 'bg-'))} />
                        <service.icon className="w-48 h-48 text-slate-800 transition-all duration-700 group-hover:text-cyan-500/20 group-hover:scale-125 group-hover:rotate-12 relative z-10" />
                      </div>
                   </div>
                   {/* Decorative elements */}
                   <div className="absolute top-12 left-12 w-24 h-px bg-linear-to-r from-cyan-500/50 to-transparent" />
                   <div className="absolute top-12 left-12 h-24 w-px bg-linear-to-b from-cyan-500/50 to-transparent" />
                   <div className="absolute bottom-12 right-12 w-24 h-px bg-linear-to-l from-cyan-500/50 to-transparent" />
                   <div className="absolute bottom-12 right-12 h-24 w-px bg-linear-to-t from-cyan-500/50 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="bg-linear-to-br from-slate-900 to-slate-950 p-12 md:p-24 rounded-[40px] border border-slate-800 flex flex-col items-center text-center gap-10 shadow-3xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none" />
            <div className="flex flex-col gap-6 max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">Chưa chắc chọn dịch vụ nào?</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Gửi mô tả yêu cầu, Minh Châu sẽ tư vấn mô hình phù hợp (trọn gói / thuê đội / SLA) và đề xuất lộ trình triển khai theo mục tiêu thực tế.
              </p>
            </div>
            <Link href="/contact" className="px-16 py-6 bg-white text-slate-950 font-black rounded-2xl shadow-2xl hover:bg-cyan-500 hover:text-white transition-all text-xl uppercase tracking-widest relative z-10">
              Gửi yêu cầu tư vấn
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
