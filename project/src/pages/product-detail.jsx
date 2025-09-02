import React, { useState } from 'react';

const defaultDetails = {
  title: 'iPhone 17 Pro Max',
  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-finish-select-202209-6-1inch?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946',
  specs: [
    '螢幕尺寸：6.7 吋 OLED',
    '處理器：Apple M4',
    '儲存空間：128GB / 256GB / 512GB / 1TB',
    '顏色：銀色、太空黑、藍色、金色',
    '相機：主鏡頭 48MP，超廣角 12MP，望遠 12MP',
    '電池續航：最高 28 小時影片播放'
  ],
  description: 'iPhone 17 Pro Max 擁有最強大的 M4 晶片，超高效能與超長續航，搭載全新相機系統，讓你隨時隨地拍出專業級照片。',
  purchaseInfo: '購買須知：本商品享有一年原廠保固，支援 7 天鑑賞期，詳細請參閱 Apple 官方網站。',
};

const ProductDetail = () => {
  const [details, setDetails] = useState(defaultDetails);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(details);

  const handleEdit = () => {
    setEditing(true);
    setForm(details);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSpecsChange = (e, idx) => {
    const specs = [...form.specs];
    specs[idx] = e.target.value;
    setForm({ ...form, specs });
  };

  const handleSave = () => {
    setDetails(form);
    setEditing(false);
  };

  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        {editing ? (
          <div>
            <label className="block mb-2 font-bold">商品名稱</label>
            <input name="title" value={form.title} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
            <label className="block mb-2 font-bold">圖片連結</label>
            <input name="image" value={form.image} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
            <label className="block mb-2 font-bold">規格</label>
            {form.specs.map((spec, idx) => (
              <input key={idx} value={spec} onChange={e => handleSpecsChange(e, idx)} className="w-full mb-2 p-2 border rounded" />
            ))}
            <label className="block mb-2 font-bold">詳細說明</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
            <label className="block mb-2 font-bold">購買須知</label>
            <textarea name="purchaseInfo" value={form.purchaseInfo} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded mr-2">儲存</button>
            <button onClick={() => setEditing(false)} className="px-4 py-2 bg-gray-300 rounded">取消</button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">{details.title}</h2>
            <img src={details.image} alt={details.title} className="w-full h-64 object-contain mb-6 rounded-xl bg-gray-100" />
            <ul className="mb-6 text-lg">
              {details.specs.map((spec, idx) => (
                <li key={idx} className="mb-1">{spec}</li>
              ))}
            </ul>
            <p className="mb-6 text-gray-700">{details.description}</p>
            <div className="mb-6 text-gray-500 text-sm">{details.purchaseInfo}</div>
            <button onClick={handleEdit} className="px-4 py-2 bg-blue-600 text-white rounded">編輯文案</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
