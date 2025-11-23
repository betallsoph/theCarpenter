export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Địa chỉ',
      content: '123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Điện thoại',
      content: '0901 234 567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'contact@mocviet.vn',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 7: 8:00 - 18:00',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sky-500 font-medium">Liên hệ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Hãy kết nối với chúng tôi
            </h2>
            <p className="text-gray-600 mt-4">
              Bạn có câu hỏi hoặc muốn đặt hàng? Đừng ngần ngại liên hệ với chúng tôi.
              Đội ngũ tư vấn sẵn sàng hỗ trợ bạn.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{info.title}</h3>
                    <p className="text-gray-600 mt-1">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="font-medium text-gray-800 mb-4">Theo dõi chúng tôi</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-500 hover:bg-sky-100 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-500 hover:bg-sky-100 transition-colors"
                  aria-label="Zalo"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248h-1.5c-.156 0-.3.053-.3.336v.936h1.8l-.216 1.68h-1.584v4.8h-1.8v-4.8h-1.2v-1.68h1.2V8.4c0-1.2.876-2.4 2.4-2.4h1.2v2.248z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-16 h-16 mx-auto text-sky-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <p className="text-sky-500 font-medium">Google Maps</p>
                  <p className="text-sky-400 text-sm mt-1">Nhúng bản đồ tại đây</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-sky-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Cần tư vấn nhanh?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Gọi ngay hotline để được hỗ trợ trực tiếp từ đội ngũ chuyên viên.
              </p>
              <a
                href="tel:0901234567"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0901 234 567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
