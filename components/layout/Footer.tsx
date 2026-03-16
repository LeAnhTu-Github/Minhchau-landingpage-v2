import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Cpu, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  MINH CHAU
                </span>
                <span className="text-[10px] font-medium tracking-widest text-cyan-400 uppercase leading-none mt-1">
                  SERVICES
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Minh Châu cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA. Chúng tôi tập trung vào hiệu quả triển khai thực tế.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Liên kết nhanh</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Dịch vụ</Link></li>
              <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Dự án tiêu biểu</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Liên hệ báo giá</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Dịch vụ chính</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Phát triển phần mềm</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Tích hợp viễn thông</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Vận hành & Bảo trì SLA</Link></li>
              <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Kiểm thử QA</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Thông tin liên hệ</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Trụ sở chính tại Việt Nam</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Liên hệ hỗ trợ 24/7</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>contact@minhchauservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Minh Châu Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
