import React from "react";
import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";
import {
  FadeInView,
  StaggerContainer,
  ScaleInView,
} from "@/components/ui/animations";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ với Minh Châu để nhận tư vấn và báo giá chi tiết cho các giải pháp CNTT, dịch vụ viễn thông và bảo trì SLA.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className=" bg-slate-950 pt-24 pb-24 md:pt-32 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <Container className="relative z-10">
          <StaggerContainer className="flex flex-col items-center text-center gap-10">
            <FadeInView direction="down">
              <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[1.2] uppercase py-2">
                {" "}
                Liên hệ
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 via-cyan-300 px-4 -mx-4">
                  {" "}
                  Minh Châu
                </span>{" "}
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-sm md:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto font-medium">
                Hãy cho chúng tôi biết mục tiêu dự án của bạn.{" "}
                <br className="hidden md:block" />
                Minh Châu sẽ phản hồi phương án tối ưu trong vòng 8 giờ làm
                việc.
              </p>
            </FadeInView>
          </StaggerContainer>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-24 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Contact Info & FAQ */}
            <div className="lg:col-span-5 min-w-0">
              <StaggerContainer className="flex flex-col gap-12">
                <div className="flex flex-col gap-10">
                  <FadeInView direction="left">
                    <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase italic">
                      Kết nối ngay
                    </h2>
                  </FadeInView>
                  <div className="flex flex-col gap-6">
                    {[
                      {
                        icon: MapPin,
                        title: "Văn phòng chính",
                        text: "Số 119 Ngõ 168 Kim Giang, Phường Đại Kim, Quận Hoàng Mai, Thành phố Hà Nội, Việt Nam",
                      },
                      {
                        icon: Phone,
                        title: "Điện thoại hỗ trợ",
                        text: "0243.200.3138",
                      },
                      {
                        icon: Mail,
                        title: "Email báo giá",
                        text: " contact@minhchaucl.vn",
                      },
                      {
                        icon: MessageSquare,
                        title: "Thời gian làm việc",
                        text: "Thứ 2 - Thứ 6: 08:30 - 18:00 (SLA 24/7)",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-6 p-6 rounded-[35px] bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group shadow-xl min-w-0 overflow-hidden"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-all group-hover:scale-110">
                          <item.icon className="w-8 h-8 text-cyan-400" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-base md:text-lg font-black text-white mb-2 uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 font-medium break-all">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ScaleInView
                  delay={0.6}
                  className="flex flex-col gap-8 p-6 md:p-12 bg-linear-to-br from-cyan-600 to-blue-700 rounded-[50px] text-white shadow-3xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic relative z-10 text-white">
                    Cam kết dịch vụ
                  </h3>
                  <ul className="space-y-6 relative z-10">
                    {[
                      {
                        icon: Clock,
                        text: "Phản hồi trong vòng 4-8 giờ làm việc",
                      },
                      {
                        icon: ShieldCheck,
                        text: "Sẵn sàng ký kết bảo mật (NDA)",
                      },
                      {
                        icon: FileCheck,
                        text: "Lộ trình nghiệm thu rõ ràng (Milestones)",
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 items-center group/item"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-sm md:text-md text-cyan-50">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScaleInView>
              </StaggerContainer>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeInView direction="up" delay={0.4}>
                <ContactForm />
              </FadeInView>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-slate-900/30">
        <Container>
          <FadeInView className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 gap-6">
            <h2 className="text-sm font-black tracking-[0.5em] text-cyan-500 uppercase">
              Hỏi & Đáp
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Giải đáp nhanh
            </h3>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                q: "Thời gian phản hồi là bao lâu?",
                a: "Chúng tôi cam kết phản hồi các yêu cầu tư vấn trong vòng 4-8 giờ làm việc.",
              },
              {
                q: "Có ký bảo mật (NDA) không?",
                a: "Có. Minh Châu sẵn sàng ký NDA trước khi trao đổi sâu về nghiệp vụ.",
              },
              {
                q: "Triển khai theo hình thức nào?",
                a: "Trọn gói (Fixed-price), Thuê đội (Dedicated team) hoặc vận hành theo SLA.",
              },
              {
                q: "Có hỗ trợ nghiệm thu không?",
                a: "Có. Chúng tôi cung cấp đầy đủ Test plan, Test case và báo cáo QA chuyên nghiệp.",
              },
              {
                q: "Minh Châu có làm dự án nhỏ không?",
                a: "Chúng tôi ưu tiên hiệu quả thực tế cho đối tác, không phân biệt quy mô.",
              },
              {
                q: "Có xuất hóa đơn đỏ không?",
                a: "Có. Minh Châu thực hiện đầy đủ nghĩa vụ thuế và xuất hóa đơn GTGT.",
              },
            ].map((faq, i) => (
              <FadeInView
                key={i}
                delay={i * 0.1}
                className="p-6 md:p-10 rounded-[40px] bg-slate-950 border border-slate-800 flex flex-col gap-6 group hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
              >
                <h4 className="text-white font-black text-xl leading-tight uppercase tracking-tight group-hover:text-cyan-400 transition-colors italic">
                  {faq.q}
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {faq.a}
                </p>
              </FadeInView>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}