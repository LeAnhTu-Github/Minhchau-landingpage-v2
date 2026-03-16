import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Minh Châu - Giải pháp CNTT & Viễn thông chuyên nghiệp",
    template: "%s | Minh Châu"
  },
  description: "Cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA chuyên nghiệp.",
  keywords: ["CNTT", "Viễn thông", "Phát triển phần mềm", "Tích hợp hệ thống", "Kiểm thử QA", "SLA", "Minh Châu"],
  authors: [{ name: "Minh Châu Team" }],
  creator: "Minh Châu",
  metadataBase: new URL("https://minhchau.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://minhchau.tech",
    title: "Minh Châu - Giải pháp CNTT & Viễn thông chuyên nghiệp",
    description: "Cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA chuyên nghiệp.",
    siteName: "Minh Châu",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minh Châu - Giải pháp CNTT & Viễn thông chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Châu - Giải pháp CNTT & Viễn thông chuyên nghiệp",
    description: "Cung cấp dịch vụ phát triển phần mềm, tích hợp hệ thống, vận hành–bảo trì theo SLA và kiểm thử QA chuyên nghiệp.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${beVietnamPro.variable} font-sans antialiased dark bg-slate-950 text-slate-100 selection:bg-cyan-500/30 flex flex-col min-h-screen`}
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
