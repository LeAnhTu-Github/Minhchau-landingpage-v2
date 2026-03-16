"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

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
  return (
    <section className="py-24 bg-slate-900/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Năng lực triển khai <br />
                <span className="text-cyan-400">có thể kiểm chứng</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Minh Châu duy trì năng lực tổ chức và nguồn lực triển khai ổn định: quy mô 56 nhân sự, 86% trình độ Đại học trở lên; cơ cấu nhân sự tập trung mạnh vào kỹ thuật. Về năng lực tài chính, chúng tôi minh bạch các chỉ tiêu theo năm (LNST 2024 đạt 29.816.780 VNĐ).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                <Users className="w-8 h-8 text-cyan-500 mb-2" />
                <p className="text-3xl font-bold text-white">56+</p>
                <p className="text-sm text-slate-400">Nhân sự chuyên môn</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                <Award className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-3xl font-bold text-white">86%</p>
                <p className="text-sm text-slate-400">Trình độ đại học trở lên</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
                <p className="text-3xl font-bold text-white">SLA</p>
                <p className="text-sm text-slate-400">Vận hành 24/7 chuyên nghiệp</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-2">
                <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
                <p className="text-3xl font-bold text-white">1.6x</p>
                <p className="text-sm text-slate-400">Tăng trưởng doanh thu</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Total Assets Chart */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Tổng tài sản (VNĐ)</h3>
                <div className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-lg border border-cyan-500/20">
                  Năm 2024
                </div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={assetData}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#f8fafc' }}
                      formatter={(value: any) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}
                    />
                    <Bar dataKey="total" radius={[6, 6, 0, 0]}>
                      {assetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 2 ? '#06b6d4' : '#1e293b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-slate-500 italic">* Số liệu tài chính minh bạch theo hồ sơ năng lực 2024</p>
            </div>

            {/* Growth Trend Chart */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Xu hướng tăng trưởng</h3>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <TrendingUp className="w-4 h-4" />
                  +28% YoY
                </div>
              </div>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueTrend}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#f8fafc' }}
                      labelClassName="text-slate-400"
                    />
                    <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
