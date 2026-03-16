"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Dự án", href: "/projects" },
  { name: "Liên hệ", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400",
                  pathname === link.href ? "text-cyan-400" : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-full shadow-lg shadow-cyan-900/40 transition-all hover:-translate-y-0.5"
            >
              Nhận tư vấn
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-slate-800/50 last:border-0",
                    pathname === link.href ? "text-cyan-400" : "text-slate-300"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 w-full text-center px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/40"
                onClick={() => setIsOpen(false)}
              >
                Nhận tư vấn & báo giá
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
