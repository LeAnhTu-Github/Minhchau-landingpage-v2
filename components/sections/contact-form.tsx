"use client";

import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type ContactFormData = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
};

export function ContactForm() {
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
  );
}
