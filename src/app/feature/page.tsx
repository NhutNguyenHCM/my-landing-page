"use client"
import Image from "next/image";
import Link from "next/link";
import app from "../app";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const features = app()

export default function FeaturePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#18122B] to-[#2D3250] flex flex-col items-center py-0 px-2 animate-fade-in">
      <section className="w-full max-w-6xl mx-auto pt-24 pb-16 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center animate-gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">Các Ứng Dụng Nổi Bật</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((app, idx) => (
            <div
              key={app.name}
              className="bg-gradient-to-br from-[#18122B] to-[#232946] rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[#333] hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="w-24 h-24 mb-4 relative animate-float">
                <DotLottieReact src={app.image} loop autoplay />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-blue-300 text-center">{app.name}</h2>
              <p className="text-gray-400 mb-4 text-center">{app.desc}</p>
              <Link href={app.link} className="mt-auto inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold shadow hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-transform duration-200 animate-bounce-in">Xem chi tiết</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
