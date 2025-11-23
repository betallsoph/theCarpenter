export default function AboutSection() {
  const stats = [
    { number: '20+', label: 'Năm kinh nghiệm' },
    { number: '500+', label: 'Sản phẩm hoàn thành' },
    { number: '300+', label: 'Khách hàng tin tưởng' },
  ];

  const features = [
    {
      title: 'Gỗ tự nhiên',
      desc: 'Chọn lọc kỹ càng từ những nguồn gỗ uy tín',
    },
    {
      title: 'Thủ công tinh xảo',
      desc: 'Từng chi tiết được chăm chút bởi nghệ nhân',
    },
    {
      title: 'Thiết kế riêng',
      desc: 'Đáp ứng mọi yêu cầu về kích thước và kiểu dáng',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-sky-100 to-sky-200 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto text-sky-300 mb-4"
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
                  <p className="text-sky-400">Hình ảnh xưởng mộc</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Cam kết chất lượng</p>
                  <p className="text-sm text-gray-500">Bảo hành 5 năm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sky-500 font-medium text-sm uppercase tracking-wider">
                Về chúng tôi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight">
                Đam mê tạo nên
                <br />
                <span className="text-sky-500">giá trị bền vững</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Với hơn 20 năm gắn bó với nghề mộc, chúng tôi không chỉ tạo ra những
              sản phẩm nội thất mà còn mang đến những giá trị văn hóa và sự ấm áp
              cho mỗi gia đình Việt.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-sky-500 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-sky-500">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
