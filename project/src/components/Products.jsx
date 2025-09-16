import React, { useEffect, useState } from 'react';


const API_URL = "https://script.google.com/macros/s/AKfycbyqq7zcSt5xMcpHYg8AR8RgvMCZQqsVP0oW5QDA0VSylOqpuYif_NSOOnUjHjVkNKLq/exec";

const colorMap = [
  "bg-gradient-to-br from-gray-800 via-black to-gray-800 text-white",
  "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white",
  "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white",
  "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white",
  "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white",
  "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900"
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // 過濾顯示為 true 的資料
        const filtered = data.filter(item => item["顯示"]);
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        setError("載入失敗，請稍後再試。");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-12 text-xl">載入中...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500 text-xl">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`${colorMap[index % colorMap.length]} rounded-3xl p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <h3 className="text-3xl font-bold mb-4">{product["影片標題"]}</h3>
                <p className="text-xl mb-8 opacity-90">{product["影片說明"]}</p>
                <div className="space-x-4">
                  <a
                    href={product["影片連結"]}
                    className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-300"
                    target="_blank" rel="noopener noreferrer"
                  >
                    觀看教學
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            加入成爲頻道會員
          </h3>
          <a
            href="https://www.youtube.com/@SoWeWannaKnow"
            className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            開始學習 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;