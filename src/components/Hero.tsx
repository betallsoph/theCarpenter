export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-white to-sky-100 pt-20"
    >
      <div className="container-custom px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
              Nghề mộc truyền thống
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Nội thất gỗ
              <span className="text-sky-500"> thủ công</span>
              <br />
              chất lượng cao
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Chúng tôi tự hào mang đến những sản phẩm nội thất gỗ được chế tác tỉ mỉ
              bởi những nghệ nhân giàu kinh nghiệm, kết hợp giữa truyền thống và hiện đại.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-6 py-3 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/30"
              >
                Xem sản phẩm
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-sky-500 border-2 border-sky-500 rounded-lg font-medium hover:bg-sky-50 transition-colors"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-sky-200 to-sky-300 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto text-sky-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sky-600 font-medium">Hình ảnh xưởng mộc</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-300 rounded-full opacity-40 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
