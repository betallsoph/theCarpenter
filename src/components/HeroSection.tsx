export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300" />

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Đóng đồ gỗ theo yêu cầu
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Nội thất gỗ
            <br />
            <span className="text-sky-100">thủ công</span>
          </h1>

          <p className="text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
            Mang đến vẻ đẹp tự nhiên và sự ấm áp của gỗ vào không gian sống của bạn.
            Mỗi sản phẩm là một tác phẩm nghệ thuật.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors shadow-lg shadow-sky-600/20"
            >
              Khám phá sản phẩm
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm">Cuộn xuống</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
