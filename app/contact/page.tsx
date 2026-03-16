"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type ContactFormData = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form submitted:", formData);
    setIsSuccess(true);
    setFormData({
      fullName: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      budget: "",
    });
    setTimeout(() => setIsSuccess(false), 5000);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        <Container className="relative z-10 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Liên hệ <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Minh Châu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Hãy cho chúng tôi biết mục tiêu dự án, phạm vi dự kiến và thời gian mong muốn. Minh Châu sẽ liên hệ để làm rõ yêu cầu và đề xuất phương án triển khai.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info & FAQ */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-white tracking-tight">Thông tin liên hệ</h2>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: MapPin, title: "Văn phòng chính", text: "Tòa nhà công nghệ cao, Hà Nội, Việt Nam" },
                    { icon: Phone, title: "Điện thoại hỗ trợ", text: "+84 123 456 789 (Zalo/Viber)" },
                    { icon: Mail, title: "Email báo giá", text: "contact@minhchauservices.com" },
                    { icon: MessageSquare, title: "Thời gian làm việc", text: "Thứ 2 - Thứ 6: 08:30 - 18:00 (Hỗ trợ SLA 24/7)" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-all">
                        <item.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-slate-400">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 p-10 bg-linear-to-br from-cyan-600 to-blue-700 rounded-[40px] text-white shadow-2xl">
                <h3 className="text-2xl font-bold">Cam kết từ Minh Châu</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Clock, text: "Phản hồi yêu cầu trong vòng 4-8 giờ làm việc" },
                    { icon: ShieldCheck, text: "Sẵn sàng ký kết thỏa thuận bảo mật (NDA)" },
                    { icon: FileCheck, text: "Triển khai theo lộ trình nghiệm thu (milestone) rõ ràng" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <item.icon className="w-5 h-5 shrink-0 opacity-80" />
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-10 md:p-12 bg-slate-900 border border-slate-800 rounded-[40px] shadow-2xl relative">
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 z-50 bg-slate-900/90 backdrop-blur-sm rounded-[40px] flex flex-col items-center justify-center text-center p-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                      <ShieldCheck className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Gửi yêu cầu thành công!</h3>
                    <p className="text-slate-400 mb-8 max-w-md">
                      Cảm ơn bạn đã tin tưởng Minh Châu. Đội ngũ chuyên gia của chúng tôi sẽ liên hệ lại với bạn trong vòng 4-8 giờ làm việc.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all"
                    >
                      Quay lại form
                    </button>
                  </motion.div>
                )}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Họ và tên*</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      type="text"
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Công ty/Đơn vị</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="Minh Chau Services"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Số điện thoại*</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="0912 345 678"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Bạn đang cần tư vấn về*</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all appearance-none"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="software">Phát triển phần mềm</option>
                      <option value="telecom">Tích hợp viễn thông</option>
                      <option value="sla">Vận hành - SLA</option>
                      <option value="qa">Kiểm thử QA</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Mô tả yêu cầu</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all resize-none"
                      placeholder="Mô tả ngắn gọn nhu cầu của bạn..."
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Ngân sách dự kiến (Optional)</label>
                    <input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      type="text"
                      className="px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                      placeholder="Ví dụ: 500tr - 1 tỷ VNĐ"
                    />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 text-white font-bold rounded-2xl shadow-xl shadow-cyan-900/30 transition-all flex items-center justify-center gap-3 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Gửi yêu cầu tư vấn
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                      Bằng cách gửi form, bạn đồng ý với chính sách xử lý dữ liệu của chúng tôi.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900/30">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
             <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Câu hỏi thường gặp</h2>
             <h3 className="text-3xl font-extrabold text-white">Giải đáp thắc mắc</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: "Thời gian phản hồi là bao lâu?", a: "Chúng tôi cam kết phản hồi các yêu cầu tư vấn trong vòng 4-8 giờ làm việc kể từ khi nhận đủ thông tin." },
              { q: "Có ký thỏa thuận bảo mật (NDA) không?", a: "Có. Minh Châu sẵn sàng ký NDA trước khi trao đổi sâu về nghiệp vụ hoặc dữ liệu dự án của khách hàng." },
              { q: "Triển khai theo hình thức nào?", a: "Chúng tôi linh hoạt theo mô hình trọn gói (Fixed-price), thuê đội (Dedicated team) hoặc vận hành theo SLA." },
              { q: "Có hỗ trợ nghiệm thu không?", a: "Có. Chúng tôi cung cấp đầy đủ Test plan, Test case và báo cáo QA để hỗ trợ quy trình nghiệm thu dự án." },
              { q: "Minh Châu có làm dự án nhỏ không?", a: "Chúng tôi tập trung vào hiệu quả. Dù dự án lớn hay nhỏ, nếu phù hợp với năng lực chuyên môn, chúng tôi đều sẵn sàng tư vấn." },
              { q: "Hợp tác có xuất hóa đơn đỏ không?", a: "Có. Minh Châu là pháp nhân đầy đủ, thực hiện nghĩa vụ thuế và xuất hóa đơn GTGT cho mọi hợp đồng." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col gap-4">
                 <h4 className="text-white font-bold leading-tight">{faq.q}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
