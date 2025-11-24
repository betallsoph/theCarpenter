export default function ContactSection() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Địa chỉ',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-gray-800">Mộc Tuấn Chim 24</p>
            <p className="text-gray-600">24 Đào Duy Từ, Phường 4, Đà Lạt</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Mộc Nhà Làm 117</p>
            <p className="text-gray-600">117 Nguyễn Trung Trực, Phường 4, Đà Lạt</p>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Liên hệ',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-gray-800">Mộc Tuấn Chim 24</p>
            <a href="tel:0393721138" className="text-gray-600 hover:text-sky-600 transition-colors">
              039 372 1138
            </a>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Mộc Nhà Làm 117</p>
            <a href="tel:123456789" className="text-gray-600 hover:text-sky-600 transition-colors">
              123 456 789
            </a>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Giờ làm việc',
      content: <p className="font-medium text-gray-800">T2 - T7: 6:00 - 18:00</p>,
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About & Contact */}
          <div className="space-y-8">
            <div>
              <span className="text-sky-500 font-medium text-sm uppercase tracking-wider">
                Về chúng tôi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight">
                mộc nhà làm
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Với hơn 20 năm kinh nghiệm, chuyên đóng đồ gỗ nội thất theo yêu cầu.
              Sang tận nơi hoặc gọi điện để đặt đồ gỗ theo yêu cầu.
            </p>

            {/* Contact info */}
            <div className="space-y-4 pt-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <div className="mt-1">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:0393721138"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Gọi ngay
              </a>
            </div>
          </div>

          {/* Right - Map placeholder */}
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-sky-100 to-sky-200 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto text-sky-300 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <p className="text-sky-400">Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
