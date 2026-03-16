"use client";

import { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeInView, ScaleInView, StaggerContainer, BlurInView } from "@/components/ui/animations";
import { Inter } from "next/font/google";

const assetData = [
  { name: "2022", total: 3200000000 },
  { name: "2023", total: 3800000000 },
  { name: "2024", total: 4228282851 },
];

const revenueTrend = [
  { name: "2022", value: 100 },
  { name: "2023", value: 125 },
  { name: "2024", value: 160 },
];

const CustomTooltip = ({ active, payload, label, prefix = "", suffix = "" }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 rounded-[24px] shadow-3xl flex flex-col gap-1 min-w-[180px] ring-1 ring-white/5">
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p>
        <p className="text-white text-2xl font-black tabular-nums tracking-tight">
          {prefix}{new Intl.NumberFormat('vi-VN').format(payload[0].value)}{suffix}
        </p>
      </div>
    );
  }
  return null;
};

export default function FinancialStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className={`py-24 bg-slate-900/30 relative overflow-hidden `}>
      <style jsx global>{`
        .recharts-bar-rectangles:focus,
        .recharts-layer:focus,
        .recharts-rectangle:focus,
        .recharts-surface focus,
        .recharts-wrapper *:focus {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
          stroke: none !important;
          stroke-width: 0 !important;
        }
        .recharts-tooltip-cursor {
          display: none !important;
        }
      `}</style>
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <Container>
        <div className=" gap-16 items-center">
          <StaggerContainer className="flex flex-col lg:flex-row gap-10 md:gap-50">
            <div className="flex flex-col gap-6 pt-15">
              <FadeInView direction="left">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight   leading-[1.5]">
                  NĂNG LỰC TRIỂN KHAI <br />
                  <span className="inline-block py-2 -my-2 leading-[1.4] text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 ">CÓ THỂ KIỂM CHỨNG</span>
                </h2>
              </FadeInView>
              <FadeInView direction="left" delay={0.2}>
                <p className="text-slate-400 text-base leading-relaxed max-w-xl font-medium">
                  Minh Châu duy trì năng lực tổ chức ổn định với quy mô 56 nhân sự chuyên môn cao. Chúng tôi minh bạch các chỉ tiêu tài chính để đảm bảo sự tin cậy tuyệt đối cho mọi đối tác.
                </p>
              </FadeInView>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, value: 56, suffix: "+", label: "Nhân sự chuyên môn", color: "text-cyan-500" },
                { icon: Award, value: 86, suffix: "%", label: "Trình độ Đại học+", color: "text-blue-500" },
                { icon: ShieldCheck, value: 0, prefix: "SLA", suffix: "", label: "Vận hành 24/7", color: "text-emerald-500" },
                { icon: TrendingUp, value: 1.6, suffix: "x", decimal: true, label: "Tăng trưởng DT", color: "text-purple-500" },
              ].map((item, i) => (
                <FadeInView
                  key={i}
                  direction="up"
                  delay={0.3 + i * 0.1}
                  className="p-10 w-70 rounded-[32px] bg-slate-950 border border-slate-800 flex flex-col gap-3 group hover:border-cyan-500/30 transition-all duration-500"
                >
                  <item.icon className={`w-10 h-10 ${item.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-3xl font-black text-white flex items-center">
                    {item.prefix && <span className="mr-1">{item.prefix}</span>}
                    {item.value > 0 ? (
                      <span>{item.value}</span>
                    ) : null}
                    {item.suffix && <span>{item.suffix}</span>}
                  </p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
                </FadeInView>
              ))}
            </div>
          </StaggerContainer>

          
        </div>
      </Container>
    </section>
  );
}
