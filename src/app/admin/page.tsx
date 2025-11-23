'use client';

import { useState } from 'react';
import { products as initialProducts, Product } from '@/data/products';

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: '', category: '', description: '', image: '' });
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const code = `export const products: Product[] = [
${products.map(p => `  {
    id: '${p.id}',
    name: '${p.name}',
    category: '${p.category}',
    description: '${p.description}',
    image: '${p.image}',
  }`).join(',\n')}
];`;
    return code;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAdd = () => {
    if (!formData.name.trim()) return;
    const newProduct: Product = {
      id: Date.now().toString(),
      ...formData,
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', category: '', description: '', image: '' });
    setIsAdding(false);
  };

  const handleUpdate = () => {
    if (!editingProduct || !formData.name.trim()) return;
    setProducts(products.map((p) =>
      p.id === editingProduct.id ? { ...p, ...formData } : p
    ));
    setEditingProduct(null);
    setFormData({ name: '', category: '', description: '', image: '' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image || '',
    });
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingProduct(null);
    setFormData({ name: '', category: '', description: '', image: '' });
  };

  const cancelForm = () => {
    setIsAdding(false);
    setEditingProduct(null);
    setFormData({ name: '', category: '', description: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Quản lý sản phẩm</h1>
          <p className="text-gray-500 mt-1">Thêm, sửa, xóa sản phẩm rồi copy code vào file products.ts</p>
        </div>

        {/* Export Code Button */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-amber-800 font-medium">Lưu ý</p>
              <p className="text-amber-700 text-sm mt-1">
                Sau khi chỉnh sửa xong, nhấn &quot;Lấy code&quot; rồi paste vào file <code className="bg-amber-100 px-1 rounded">src/data/products.ts</code>
              </p>
            </div>
          </div>
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
                  URL hình ảnh (Cloudinary)
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  placeholder="https://res.cloudinary.com/..."
                />
                {formData.image && (
                  <div className="mt-2">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-32 h-24 object-cover rounded-lg border"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
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

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          {!isAdding && !editingProduct && (
            <button
              onClick={startAdd}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Thêm sản phẩm
            </button>
          )}
          <button
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            {showCode ? 'Ẩn code' : 'Lấy code'}
          </button>
        </div>

        {/* Code Export */}
        {showCode && (
          <div className="bg-gray-900 rounded-2xl p-4 mb-6 relative">
            <button
              onClick={copyCode}
              className="absolute top-4 right-4 px-3 py-1.5 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
            >
              {copied ? 'Đã copy!' : 'Copy'}
            </button>
            <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
              {generateCode()}
            </pre>
          </div>
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
                className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 bg-sky-100 rounded-lg overflow-hidden flex-shrink-0">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-sm text-gray-500 truncate">{product.description}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
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
