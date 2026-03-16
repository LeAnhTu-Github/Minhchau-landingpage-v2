import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Minh Châu - Giải pháp CNTT & Viễn thông chuyên nghiệp",
  description: "Cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA chuyên nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased dark bg-slate-950 text-slate-100 selection:bg-cyan-500/30 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
