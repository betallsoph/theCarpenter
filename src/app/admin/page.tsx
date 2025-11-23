'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
}

const defaultProducts: Product[] = [
  { id: '1', name: 'Bàn ăn gỗ sồi', category: 'Bàn ghế', description: 'Bàn ăn 6 người, gỗ sồi tự nhiên' },
  { id: '2', name: 'Tủ quần áo 3 cánh', category: 'Tủ kệ', description: 'Gỗ óc chó, ngăn chứa rộng rãi' },
  { id: '3', name: 'Giường ngủ gỗ xoan', category: 'Giường', description: 'Giường 1m8, kèm ngăn chứa đồ' },
  { id: '4', name: 'Kệ tivi phòng khách', category: 'Tủ kệ', description: 'Thiết kế tối giản, gỗ tần bì' },
  { id: '5', name: 'Bàn làm việc', category: 'Bàn ghế', description: 'Gỗ thông, có ngăn kéo' },
  { id: '6', name: 'Bộ sofa gỗ', category: 'Bàn ghế', description: 'Gỗ sồi kèm đệm, Scandinavian' },
];

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', description: '' });

  useEffect(() => {
    const saved = localStorage.getItem('mocviet-products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('mocviet-products', JSON.stringify(newProducts));
  };

  const handleAdd = () => {
    if (!formData.name.trim()) return;
    const newProduct: Product = {
      id: Date.now().toString(),
      ...formData,
    };
    saveProducts([...products, newProduct]);
    setFormData({ name: '', category: '', description: '' });
    setIsAdding(false);
  };

  const handleUpdate = () => {
    if (!editingProduct || !formData.name.trim()) return;
    const updated = products.map((p) =>
      p.id === editingProduct.id ? { ...p, ...formData } : p
    );
    saveProducts(updated);
    setEditingProduct(null);
    setFormData({ name: '', category: '', description: '' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      saveProducts(products.filter((p) => p.id !== id));
    }
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
    });
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingProduct(null);
    setFormData({ name: '', category: '', description: '' });
  };

  const cancelForm = () => {
    setIsAdding(false);
    setEditingProduct(null);
    setFormData({ name: '', category: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Quản lý sản phẩm</h1>
          <p className="text-gray-500 mt-1">Thêm, sửa, xóa sản phẩm hiển thị trên trang web</p>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || editingProduct) && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {isAdding ? 'Thêm sản phẩm mới' : 'Chỉnh sửa sản phẩm'}
            </h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  placeholder="VD: Bàn ăn gỗ sồi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Danh mục
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                >
                  <option value="">Chọn danh mục</option>
                  <option value="Bàn ghế">Bàn ghế</option>
                  <option value="Tủ kệ">Tủ kệ</option>
                  <option value="Giường">Giường</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mô tả ngắn
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none"
                  rows={2}
                  placeholder="VD: Gỗ sồi tự nhiên, thiết kế hiện đại"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={isAdding ? handleAdd : handleUpdate}
                  className="px-6 py-2 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition-colors"
                >
                  {isAdding ? 'Thêm' : 'Cập nhật'}
                </button>
                <button
                  onClick={cancelForm}
                  className="px-6 py-2 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Button */}
        {!isAdding && !editingProduct && (
          <button
            onClick={startAdd}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Thêm sản phẩm
          </button>
        )}

        {/* Products List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Danh sách sản phẩm ({products.length})</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {products.map((product) => (
              <div
                key={product.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-sm text-gray-500 truncate">{product.description}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => startEdit(product)}
                    className="p-2 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
                    title="Sửa"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Xóa"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <a href="/" className="text-sky-500 hover:text-sky-600 font-medium">
            ← Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
