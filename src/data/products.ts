export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

// Sản phẩm lưu cứng - chỉnh sửa trực tiếp file này
// Hình ảnh: upload lên Cloudinary rồi paste URL vào field "image"
export const products: Product[] = [
  {
    id: '1',
    name: 'Bàn ăn gỗ sồi',
    category: 'Bàn ghế',
    description: 'Bàn ăn 6 người, gỗ sồi tự nhiên',
    image: '', // Paste URL từ Cloudinary
  },
  {
    id: '2',
    name: 'Tủ quần áo 3 cánh',
    category: 'Tủ kệ',
    description: 'Gỗ óc chó, ngăn chứa rộng rãi',
    image: '',
  },
  {
    id: '3',
    name: 'Giường ngủ gỗ xoan',
    category: 'Giường',
    description: 'Giường 1m8, kèm ngăn chứa đồ',
    image: '',
  },
  {
    id: '4',
    name: 'Kệ tivi phòng khách',
    category: 'Tủ kệ',
    description: 'Thiết kế tối giản, gỗ tần bì',
    image: '',
  },
  {
    id: '5',
    name: 'Bàn làm việc',
    category: 'Bàn ghế',
    description: 'Gỗ thông, có ngăn kéo',
    image: '',
  },
  {
    id: '6',
    name: 'Bộ sofa gỗ',
    category: 'Bàn ghế',
    description: 'Gỗ sồi kèm đệm, Scandinavian',
    image: '',
  },
];
