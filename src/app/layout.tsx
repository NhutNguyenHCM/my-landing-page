
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";

function AppHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 w-full bg-gradient-to-b from-[#18122B] via-[#18122B]/80 to-transparent shadow-lg backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <span className="inline-block w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
            <Image src="/robot.svg" alt="Logo" width={28} height={28} className="rounded-full" />
          </span>
          <span className="text-white font-bold text-2xl tracking-wide group-hover:text-purple-400 transition">Newt.AI</span>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center text-gray-300 text-base font-medium">
          <Link href="/feature" className="hover:text-white transition">Feature</Link>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <button className="ml-4 px-5 py-2 rounded-lg bg-[#222] text-gray-200 border border-[#444] hover:bg-[#333] transition">Sign Up</button>
          <button className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition">Login</button>
        </div>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none group"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-gray-300 mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#18122B] border-t border-[#333] px-6 py-4 animate-fade-in">
          <div className="flex flex-col gap-4 text-gray-200 text-base font-medium">
            <Link href="/feature" className="hover:text-white transition" onClick={() => setOpen(false)}>Feature</Link>
            <a href="#about" className="hover:text-white transition" onClick={() => setOpen(false)}>About</a>
            <a href="#blog" className="hover:text-white transition" onClick={() => setOpen(false)}>Blog</a>
            <button className="px-5 py-2 rounded-lg bg-[#222] text-gray-200 border border-[#444] hover:bg-[#333] transition text-left" onClick={() => setOpen(false)}>Sign Up</button>
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition text-left" onClick={() => setOpen(false)}>Login</button>
          </div>
        </div>
      )}
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#18122B] via-[#18122B]/80 to-transparent py-8 px-4 border-t border-[#222]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full flex items-center justify-center">
            <Image src="/robot.svg" alt="Logo" width={20} height={20} className="rounded-full" />
          </span>
          <span className="text-white font-semibold text-lg">Newt.AI</span>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="text-gray-500 text-xs text-center md:text-right">© {new Date().getFullYear()} Nhut Nguyen.AI. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased bg-[#0a0a0a]">
        <AppHeader />
        <main className="min-h-[80vh] flex flex-col justify-between">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
