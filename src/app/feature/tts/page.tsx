
import Image from "next/image";

export default function TTSAppPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#18122B] to-[#2D3250] flex flex-col items-center py-0 px-2 animate-fade-in">
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 pt-20 pb-10 px-4 md:px-8 animate-slide-in-left">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            <span className="block animate-gradient-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">Text To Speech (TTS) App</span>
          </h1>
          <p className="text-gray-300 text-lg mb-4 animate-fade-in delay-200">
            Chuyển văn bản thành giọng nói tự nhiên, hỗ trợ nhiều ngôn ngữ, tốc độ nhanh, dễ sử dụng cho mọi đối tượng.
          </p>
          <ul className="list-disc pl-5 text-gray-400 mb-6 animate-fade-in delay-300">
            <li>Chọn giọng nam/nữ, nhiều ngôn ngữ</li>
            <li>Điều chỉnh tốc độ, cao độ, âm lượng</li>
            <li>Nghe thử trực tiếp, tải file audio</li>
            <li>Giao diện thân thiện, responsive</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center relative min-h-[320px] animate-slide-in-right">
          <div className="absolute -z-10 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-purple-700/40 to-blue-500/30 blur-3xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-pulse" />
          <Image
            src="/robot.svg"
            alt="TTS Robot"
            width={180}
            height={180}
            className="drop-shadow-2xl animate-float"
            priority
          />
        </div>
      </section>

      {/* Demo */}
      <section className="w-full max-w-3xl mx-auto bg-black/80 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center border border-[#333] animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-300 mb-4">Dùng thử TTS Demo</h2>
        <iframe
          src="https://text-to-speed-nhut-nguyen.web.app/"
          title="TTS App"
          className="w-full h-[600px] rounded-xl border border-[#444] bg-white animate-fade-in"
          style={{ background: 'white' }}
        />
      </section>

      {/* Hướng dẫn sử dụng */}
      <section className="w-full max-w-3xl mx-auto py-12 px-4 md:px-8 animate-fade-in">
        <h3 className="text-xl font-semibold text-white mb-3">Hướng dẫn sử dụng</h3>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Nhập văn bản bạn muốn chuyển thành giọng nói.</li>
          <li>Chọn ngôn ngữ, giọng đọc, tốc độ, cao độ phù hợp.</li>
          <li>Bấm "Nghe thử" để nghe kết quả.</li>
          <li>Bấm "Tải về" để lưu file audio.</li>
        </ol>
      </section>

      {/* Thông tin thêm */}
      <section className="w-full max-w-3xl mx-auto pb-16 px-4 md:px-8 animate-fade-in">
        <h3 className="text-xl font-semibold text-white mb-3">Ứng dụng phù hợp cho</h3>
        <ul className="list-disc pl-6 text-gray-400 space-y-1">
          <li>Người học ngoại ngữ, luyện phát âm</li>
          <li>Người khiếm thị, hỗ trợ đọc văn bản</li>
          <li>Nhà phát triển tích hợp API TTS vào sản phẩm</li>
          <li>Giáo viên, học sinh, người sáng tạo nội dung</li>
        </ul>
      </section>
    </div>
  );
}
