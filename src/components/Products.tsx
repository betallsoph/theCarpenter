export default function Products() {
  const products = [
    {
      name: 'Bàn ăn gỗ sồi',
      category: 'Bàn ghế',
      description: 'Bàn ăn 6 người, gỗ sồi tự nhiên, thiết kế hiện đại.',
    },
    {
      name: 'Tủ quần áo',
      category: 'Tủ kệ',
      description: 'Tủ quần áo 3 cánh, gỗ óc chó, ngăn chứa rộng rãi.',
    },
    {
      name: 'Giường ngủ gỗ xoan',
      category: 'Giường',
      description: 'Giường ngủ 1m8, gỗ xoan đào, kèm ngăn chứa đồ.',
    },
    {
      name: 'Kệ tivi',
      category: 'Tủ kệ',
      description: 'Kệ tivi phòng khách, thiết kế tối giản, gỗ tần bì.',
    },
    {
      name: 'Bàn làm việc',
      category: 'Bàn ghế',
      description: 'Bàn làm việc tại nhà, gỗ thông, có ngăn kéo.',
    },
    {
      name: 'Ghế sofa gỗ',
      category: 'Bàn ghế',
      description: 'Bộ sofa gỗ sồi kèm đệm, phong cách Scandinavian.',
    },
  ];

  return (
    <section id="products" className="section-padding bg-sky-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sky-500 font-medium">Sản phẩm của chúng tôi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Nội thất gỗ chất lượng
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Khám phá bộ sưu tập nội thất gỗ đa dạng, từ bàn ghế, tủ kệ đến giường ngủ,
            tất cả đều được làm thủ công với chất lượng cao nhất.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-sky-200 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-sky-300 group-hover:scale-110 transition-transform"
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
                </div>
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-sky-600 text-sm font-medium rounded-full">
                  {product.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sky-500 font-medium mt-4 hover:text-sky-600 transition-colors"
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
            Bạn có ý tưởng riêng? Chúng tôi nhận thiết kế và sản xuất theo yêu cầu.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-colors"
          >
            Tư vấn miễn phí
          </a>
        </div>
      </div>
    </section>
  );
}
