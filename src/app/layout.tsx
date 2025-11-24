import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mộc nhà làm - nội thất gỗ thủ công chất lượng cao",
  description: "Xưởng mộc chuyên sản xuất nội thất gỗ tự nhiên, thiết kế theo yêu cầu. Bàn ghế, tủ kệ, giường ngủ và các sản phẩm gỗ thủ công chất lượng cao.",
  keywords: "nội thất gỗ, xưởng mộc, bàn gỗ, tủ gỗ, giường gỗ, đồ gỗ thủ công, nội thất theo yêu cầu",
  openGraph: {
    title: "mộc nhà làm - nội thất gỗ thủ công chất lượng cao",
    description: "Xưởng mộc chuyên sản xuất nội thất gỗ tự nhiên, thiết kế theo yêu cầu.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
