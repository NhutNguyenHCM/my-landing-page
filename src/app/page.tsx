"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import app from "./app";
const apps = app();

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#18122B] to-[#2D3250] flex flex-col items-center justify-center py-0 px-2 animate-fade-in">
      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 pt-24 pb-16 px-4 md:px-8 relative">
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl animate-slide-in-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            <span className="block animate-gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Khám phá kỷ nguyên mới của AI
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 animate-fade-in delay-200">
            Nền tảng AI đa năng: TTS, Gen Comics, Chatbot AI... Giao diện hiện
            đại, trải nghiệm mượt mà.
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg bg-[#18122B] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 shadow-md"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-transform duration-200 animate-bounce-in"
            >
              Đăng ký nhận tin
            </button>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center relative min-h-[320px] animate-slide-in-right">
          <div className="absolute -z-10 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-purple-700/40 to-blue-500/30 blur-3xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-pulse" />
          <Image
            src="/robot.svg"
            alt="Robot AI"
            width={350}
            height={350}
            className="drop-shadow-2xl animate-float"
            priority
          />
        </div>
      </section>

      {/* Apps Section */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fade-in">
          Các ứng dụng nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, idx) => (
            <div
              key={app.name}
              className="bg-gradient-to-br from-[#18122B] to-[#232946] rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[#333] hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="w-24 h-24 mb-4 relative animate-float">
                <DotLottieReact src={app.image} loop autoplay />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300 text-center">
                {app.name}
              </h3>
              <p className="text-gray-400 mb-4 text-center">{app.desc}</p>
              <Link
                href={app.link}
                className="mt-auto inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold shadow hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-transform duration-200 animate-bounce-in"
              >
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 text-center animate-fade-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Về Catech.AI
        </h2>
        <p className="text-gray-400 text-lg mb-4">
          Catech.AI là nền tảng tổng hợp các ứng dụng AI do chính bạn phát
          triển, tập trung vào trải nghiệm người dùng, giao diện hiện đại, tốc
          độ nhanh và dễ mở rộng.
        </p>
        <p className="text-gray-500 text-base">
          Bạn có thể tích hợp thêm nhiều app AI khác, tuỳ biến giao diện, thêm
          hiệu ứng động để tạo ấn tượng mạnh mẽ với khách truy cập.
        </p>
      </section>
    </div>
  );
}
