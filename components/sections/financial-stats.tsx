"use client";

import { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeInView, ScaleInView, StaggerContainer, BlurInView, NumberTicker } from "@/components/ui/animations";

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

export default function FinancialStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <StaggerContainer className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <FadeInView direction="left">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight">
                  Năng lực triển khai <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">CÓ THỂ KIỂM CHỨNG</span>
                </h2>
              </FadeInView>
              <FadeInView direction="left" delay={0.2}>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
                  Minh Châu duy trì năng lực tổ chức ổn định với quy mô 56 nhân sự chuyên môn cao. Chúng tôi minh bạch các chỉ tiêu tài chính để đảm bảo sự tin cậy tuyệt đối cho mọi đối tác.
                </p>
              </FadeInView>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="p-8 rounded-[32px] bg-slate-950 border border-slate-800 flex flex-col gap-3 group hover:border-cyan-500/30 transition-all duration-500"
                >
                  <item.icon className={`w-10 h-10 ${item.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-4xl font-black text-white flex items-center">
                    {item.prefix && <span className="mr-1">{item.prefix}</span>}
                    {item.value > 0 ? (
                      <NumberTicker value={item.value} delay={0.5 + i * 0.1} />
                    ) : null}
                    {item.suffix && <span>{item.suffix}</span>}
                  </p>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
                </FadeInView>
              ))}
            </div>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-8">
            {/* Total Assets Chart */}
            <ScaleInView delay={0.4} className="p-10 rounded-[40px] bg-slate-950 border border-slate-800 shadow-3xl hover:border-cyan-500/20 transition-all duration-700">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Tổng tài sản (VNĐ)</h3>
                <div className="px-4 py-1.5 bg-cyan-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                  Năm 2024
                </div>
              </div>
              <div className="h-64 w-full">
                {mounted && (
                  <BlurInView delay={0.6} className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={assetData}>
                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', color: '#f8fafc' }}
                          itemStyle={{ fontWeight: 'bold' }}
                          formatter={(value: any) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}
                        />
                        <Bar dataKey="total" radius={[8, 8, 0, 0]}>
                          {assetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 2 ? '#06b6d4' : '#1e293b'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </BlurInView>
                )}
              </div>
              <p className="mt-6 text-xs text-slate-500 italic font-medium uppercase tracking-wider text-center">
                * Số liệu tài chính minh bạch theo hồ sơ năng lực 2024
              </p>
            </ScaleInView>

            {/* Growth Trend Chart */}
            <ScaleInView delay={0.6} className="p-10 rounded-[40px] bg-slate-950 border border-slate-800 shadow-3xl hover:border-cyan-500/20 transition-all duration-700">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Xu hướng tăng trưởng</h3>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-black uppercase tracking-wider">
                  <TrendingUp className="w-5 h-5" />
                  +28% YoY
                </div>
              </div>
              <div className="h-44 w-full">
                {mounted && (
                  <BlurInView delay={0.8} className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueTrend}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', color: '#f8fafc' }}
                          labelClassName="text-slate-400 font-bold"
                        />
                        <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </BlurInView>
                )}
              </div>
            </ScaleInView>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
