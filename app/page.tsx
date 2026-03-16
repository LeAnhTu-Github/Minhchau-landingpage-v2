"use client";

import Link from "next/link";
import { ArrowRight, Code, ShieldCheck, Zap, Layers, Search, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import FinancialStats from "@/components/sections/financial-stats";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Container } from "@/components/ui/container";

const services = [
  {
    icon: Code,
    title: "Phát triển phần mềm",
    desc: "Web/app, hệ thống nghiệp vụ, nâng cấp tối ưu hiệu năng và xử lý dữ liệu lớn.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Tích hợp viễn thông",
    desc: "Liên thông hệ thống, dịch vụ nền tảng nhà mạng (IP/SS7/HLR/IN).",
    color: "from-amber-400 to-orange-600"
  },
  {
    icon: ShieldCheck,
    title: "Vận hành–bảo trì SLA",
    desc: "Đảm bảo ổn định 24/7, bảo trì định kỳ, cải tiến vận hành chuyên nghiệp.",
    color: "from-emerald-400 to-teal-600"
  },
  {
    icon: Search,
    title: "Kiểm thử QA",
    desc: "Test plan/case, báo cáo chất lượng, hỗ trợ nghiệm thu và bàn giao tài liệu.",
    color: "from-purple-500 to-indigo-600"
  }
];

const projects = [
  {
    title: "VR 360",
    client: "MobiFone IT Center",
    value: "993.000.000 VNĐ",
    category: "Multimedia/VR",
    img: "https://images.unsplash.com/photo-1592477342258-c4f30d121f45",
    slug: "vr-360"
  },
  {
    title: "Tổng đài di động SCall",
    client: "VNPT Vĩnh Phúc",
    value: "850.000.000 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
    slug: "scall-vnpt"
  },
  {
    title: "Hệ thống phần mềm BHXH",
    client: "ICORP",
    value: "654.215.150 VNĐ",
    category: "Phần mềm",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    slug: "bhxh-icorp"
  },
  {
    title: "Chuyển mạng giữ số online",
    client: "Dự án sửa chữa",
    value: "966.175.041 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    slug: "mnp-repair"
  }
];

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
      <Hero />

      {/* Services Section */}
      <section className="py-24 relative">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Dịch vụ cốt lõi</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Dịch vụ của Minh Châu</h3>
            <p className="text-slate-400">
              Chúng tôi xây dựng dịch vụ theo mô-đun để phù hợp nhiều loại dự án: từ triển khai trọn gói theo phạm vi, thuê đội dự án theo lộ trình, đến vận hành–bảo trì theo SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:bg-slate-800/50"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link href="/services" className="text-xs font-bold text-cyan-500 flex items-center gap-1 group/link">
                  Tìm hiểu thêm <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">
              Xem tất cả dịch vụ
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="Tech" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mt-8 relative">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team" width={400} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-8 bg-cyan-600 rounded-3xl shadow-2xl max-w-xs border border-white/10 hidden md:block">
                <p className="text-white font-bold text-2xl mb-2">100%</p>
                <p className="text-cyan-100 text-sm font-medium">Cam kết nghiệm thu và bàn giao tài liệu đầy đủ cho mọi dự án.</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Giá trị cốt lõi</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white">Chuyên nghiệp trong triển khai – rõ ràng trong bàn giao</h3>
              </div>
              
              <p className="text-slate-400 text-lg">
                Với Minh Châu, “xong dự án” không chỉ là hoàn thành code. Chúng tôi ưu tiên kiểm soát rủi ro bằng phạm vi rõ ràng, kế hoạch kiểm thử phù hợp, tài liệu bàn giao đầy đủ.
              </p>

              <div className="space-y-4">
                {[
                  "Scope/Timeline/Acceptance criteria rõ ngay từ đầu",
                  "Kiểm thử & tài liệu nghiệm thu theo tiêu chuẩn dự án",
                  "Có phương án vận hành–bảo trì, giảm rủi ro “bàn giao xong là hết”"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    </div>
                    <p className="text-slate-200 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/contact" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/40 inline-flex items-center gap-2 transition-all">
                  Trao đổi yêu cầu của bạn <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinancialStats />

      {/* Projects Preview */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Dự án thực tế</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white">Hợp đồng tiêu biểu</h3>
              <p className="text-slate-400">
                Chúng tôi có kinh nghiệm triển khai nhiều dự án thực tế: nâng cấp hệ thống phần mềm, phát triển sản phẩm multimedia/VR.
              </p>
            </div>
            <Link href="/projects" className="px-6 py-3 border border-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl flex items-center gap-2 shrink-0 transition-all">
              Tất cả dự án <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 h-full"
              >
                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-20" />
                <div className="aspect-16/10 overflow-hidden relative">
                  <ImageWithFallback src={project.img} alt={project.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-[10px] font-bold uppercase rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <p className="text-cyan-400 text-sm font-bold mb-1">{project.client}</p>
                  <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h4>
                  <p className="text-slate-300 font-medium">{project.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Quy trình làm việc</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Quy trình triển khai rõ ràng</h3>
            <p className="text-slate-400">
              Minh Châu triển khai theo quy trình 6 bước nhằm đảm bảo kiểm soát tiến độ và chất lượng, giảm rủi ro khi go-live.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((p, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col gap-4 group">
                <div className="text-5xl font-black text-slate-800 group-hover:text-cyan-500/20 transition-colors absolute top-4 right-8 select-none">
                  {p.step}
                </div>
                <h4 className="text-xl font-bold text-white relative z-10">{p.title}</h4>
                <p className="text-slate-400 relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <Link href="/contact" className="px-10 py-5 bg-linear-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-900/40 text-lg transition-all hover:scale-105">
              Nhận tư vấn quy trình triển khai
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center gap-8">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              Bạn cần triển khai nhanh và vận hành ổn định?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Hãy để Minh Châu tư vấn mô hình triển khai phù hợp (trọn gói / đội dự án / SLA). Chúng tôi sẽ liên hệ để làm rõ nhu cầu và báo giá chi tiết.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-xl shadow-cyan-900/30 transition-all hover:scale-105">
                Gửi yêu cầu tư vấn
              </Link>
              <Link href="/about" className="px-10 py-5 bg-transparent border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all">
                Tìm hiểu thêm về Minh Châu
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
