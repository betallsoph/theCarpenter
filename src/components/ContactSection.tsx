export default function ContactSection() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Địa chỉ',
      value: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Hotline',
      value: '0901 234 567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'contact@mocviet.vn',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Giờ làm việc',
      value: 'T2 - T7: 8:00 - 18:00',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <span className="text-sky-500 font-medium text-sm uppercase tracking-wider">
                Liên hệ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight">
                Hãy kết nối
                <br />
                <span className="text-sky-500">với chúng tôi</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg">
              Bạn có câu hỏi hoặc muốn tư vấn? Đừng ngần ngại liên hệ.
              Chúng tôi luôn sẵn sàng hỗ trợ bạn.
            </p>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-sky-50 rounded-2xl hover:bg-sky-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-500 mb-3 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-800 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-500 text-sm">Theo dõi:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 hover:bg-sky-200 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 hover:bg-sky-200 transition-colors"
                  aria-label="Zalo"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 01-.577-.573v-.047a2.728 2.728 0 01-1.777.682 2.91 2.91 0 01-2.905-2.912 2.91 2.91 0 012.905-2.911 2.696 2.696 0 011.777.69zm-1.064.996a1.822 1.822 0 00-1.294.536 1.821 1.821 0 00-.536 1.296c0 .489.19.949.536 1.294a1.822 1.822 0 001.294.536 1.821 1.821 0 001.296-.536c.344-.345.536-.805.536-1.294 0-.49-.192-.95-.536-1.296a1.821 1.821 0 00-1.296-.536z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.651a1.156 1.156 0 01-1.156 1.156H7.262a1.156 1.156 0 01-1.156-1.156v-.32c0-.635.515-1.15 1.15-1.15h9.488c.635 0 1.15.515 1.15 1.15v.32zm0-4.058a1.156 1.156 0 01-1.156 1.156H7.262a1.156 1.156 0 01-1.156-1.156V9.4c0-.638.518-1.156 1.156-1.156h9.476c.638 0 1.156.518 1.156 1.156v1.193z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Map placeholder & CTA */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-sky-200 rounded-3xl overflow-hidden">
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

            {/* Quick call CTA */}
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-semibold mb-2">Cần tư vấn ngay?</h3>
              <p className="text-sky-100 mb-6">
                Gọi hotline để được hỗ trợ trực tiếp từ chuyên viên tư vấn.
              </p>
              <a
                href="tel:0901234567"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0901 234 567
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Mộc Việt. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </section>
  );
}
