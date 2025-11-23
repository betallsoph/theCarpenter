export default function ProductsSection() {
  const products = [
    { name: 'Bàn ăn gỗ sồi', category: 'Bàn ghế' },
    { name: 'Tủ quần áo 3 cánh', category: 'Tủ kệ' },
    { name: 'Giường ngủ gỗ xoan', category: 'Giường' },
    { name: 'Kệ tivi phòng khách', category: 'Tủ kệ' },
    { name: 'Bàn làm việc', category: 'Bàn ghế' },
    { name: 'Bộ sofa gỗ', category: 'Bàn ghế' },
  ];

  return (
    <section id="products" className="min-h-screen flex items-center bg-sky-50 py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sky-500 font-medium text-sm uppercase tracking-wider">
            Sản phẩm
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Bộ sưu tập nội thất
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Từ phòng khách đến phòng ngủ, chúng tôi mang đến giải pháp nội thất gỗ
            hoàn hảo cho mọi không gian.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-sky-200 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-sky-300 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Category tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-sky-600 text-xs font-medium rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 group-hover:text-sky-500 transition-colors">
                  {product.name}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm text-sky-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Liên hệ báo giá
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Bạn có ý tưởng thiết kế riêng?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
          >
            Đặt hàng theo yêu cầu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
