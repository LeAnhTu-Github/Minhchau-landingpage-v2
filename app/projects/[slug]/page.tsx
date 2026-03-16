"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const projectData: Record<string, any> = {
  "vr-360": {
    title: "VR 360",
    client: "MobiFone IT Center",
    value: "993.000.000 VNĐ",
    category: "Multimedia/VR",
    img: "https://images.unsplash.com/photo-1592477342258-c4f30d121f45",
    problem: "MobiFone IT Center cần một giải pháp tham quan thực tế ảo (VR 360) hiện đại để giới thiệu các trung tâm hạ tầng và showroom số hóa, giúp khách hàng trải nghiệm không gian mà không cần trực tiếp có mặt.",
    solution: "Minh Châu đã triển khai quay chụp 360 chất lượng cao, xây dựng nền tảng tương tác VR trên web/app, tích hợp các điểm nóng (hotspots) thông tin và tối ưu hóa luồng tải dữ liệu lớn đảm bảo trải nghiệm mượt mà trên mọi thiết bị.",
    results: "Dự án đã bàn giao đúng hạn với tài liệu hướng dẫn vận hành chi tiết. Hệ thống chạy ổn định, giảm 40% chi phí dẫn khách tham quan trực tiếp và nhận được phản hồi tích cực về tính thực tế, sinh động của sản phẩm số."
  },
  "scall-vnpt": {
    title: "Nâng cấp phần mềm Tổng đài di động SCall",
    client: "VNPT Vĩnh Phúc",
    value: "850.000.000 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    problem: "Hệ thống tổng đài di động cũ của VNPT Vĩnh Phúc gặp hiện tượng nghẽn mạch khi tải cao và thiếu khả năng tích hợp linh hoạt các dịch vụ GTGT mới.",
    solution: "Minh Châu thực hiện nâng cấp core hệ thống, tối ưu hóa database và xây dựng API gateway để kết nối các dịch vụ ngoại vi. Quy trình được thực hiện theo từng bước, có POC kiểm chứng trước khi chuyển đổi toàn diện.",
    results: "Hệ thống hoạt động ổn định 24/7 sau khi nâng cấp, thời gian xử lý cuộc gọi nhanh hơn 30%, quy trình vận hành được đơn giản hóa thông qua các báo cáo dashboard trực quan."
  },
  "bhxh-icorp": {
    title: "Nâng cấp hệ thống phần mềm BHXH",
    client: "ICORP",
    value: "654.215.150 VNĐ",
    category: "Phần mềm",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    problem: "Hệ thống quản lý BHXH tại ICORP cần đồng bộ hóa dữ liệu tập trung và nâng cấp giao diện người dùng để tăng hiệu suất xử lý hồ sơ.",
    solution: "Phát triển các module nghiệp vụ mới, tối ưu hóa quy trình nhập liệu và xây dựng hệ thống phân quyền/bảo mật đa lớp. Bàn giao đầy đủ tài liệu thiết kế và hướng dẫn nghiệm thu.",
    results: "Dữ liệu được đồng bộ hóa hoàn toàn, giảm sai sót trong nghiệp vụ và giúp cán bộ xử lý hồ sơ nhanh chóng, thuận tiện hơn."
  },
  "mnp-repair": {
    title: "Sửa chữa hệ thống tiếp nhận chuyển mạng giữ số online",
    client: "Hợp đồng sửa chữa",
    value: "966.175.041 VNĐ",
    category: "Viễn thông",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
    problem: "Hệ thống chuyển mạng giữ số (MNP) hiện hữu gặp lỗi trong quá trình liên thông dữ liệu giữa các nhà mạng, gây gián đoạn dịch vụ cho người dùng.",
    solution: "Phân tích log, fix lỗi logic trong kết nối SS7/IP và bổ sung các kịch bản kiểm thử (test cases) để đảm bảo không tái phát lỗi sau khi sửa chữa.",
    results: "Tỷ lệ chuyển mạng thành công tăng lên 99%, giảm thiểu khiếu nại của khách hàng và đảm bảo tính liên tục của dịch vụ viễn thông."
  }
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectData[slug as string] || projectData["vr-360"];

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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase">
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
