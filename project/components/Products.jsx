import React from 'react';

const Products = () => {
  const products = [
    {
      title: "iPhone",
      subtitle: "來看看 iPhone 16 全系列。",
      bgColor: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
      textColor: "text-white",
      link: "https://www.apple.com/tw/iphone/",
      shopLink: "https://www.apple.com/tw/shop/goto/buy_iphone"
    },
    {
      title: "MacBook Air",
      subtitle: "全新天藍色，M4 效能沖天。",
      bgColor: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      textColor: "text-white",
      link: "https://www.apple.com/tw/macbook-air/",
      shopLink: "https://www.apple.com/tw/shop/goto/buy_mac/macbook_air"
    },
    {
      title: "Apple Watch Series 10",
      subtitle: "纖薄表率。",
      bgColor: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
      textColor: "text-white",
      link: "https://www.apple.com/tw/apple-watch-series-10/",
      shopLink: "https://www.apple.com/tw/shop/goto/buy_watch/apple_watch_series_10"
    },
    {
      title: "iPad Pro",
      subtitle: "出奇纖薄，出眾強大。",
      bgColor: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
      textColor: "text-white",
      link: "https://www.apple.com/tw/ipad-pro/",
      shopLink: "https://www.apple.com/tw/shop/goto/ipad_pro/select"
    },
    {
      title: "iPad Air",
      subtitle: "現在超強驅動來自 M3 晶片。",
      bgColor: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
      textColor: "text-white",
      link: "https://www.apple.com/tw/ipad-air/",
      shopLink: "https://www.apple.com/tw/shop/goto/buy_ipad/ipad_air"
    },
    {
      title: "AirPods Pro 2",
      subtitle: "聲聲，震撼耳際。",
      bgColor: "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
      textColor: "text-gray-900",
      link: "https://www.apple.com/tw/airpods-pro/",
      shopLink: "https://www.apple.com/tw/shop/goto/buy_airpods/airpods_pro_2"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`\${product.bgColor} \${product.textColor} rounded-3xl p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
              <p className="text-xl mb-8 opacity-90">{product.subtitle}</p>
              <div className="space-x-4">
                <a 
                  href={product.link}
                  className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  進一步了解
                </a>
                <a 
                  href={product.shopLink}
                  className="inline-block px-6 py-3 rounded-full border border-current hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                >
                  購買
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Apple Trade In 換購方案
          </h3>
          <p className="text-xl mb-4">
            以 iPhone 12 或後續機型升級換購，
            <br />
            獲享 NT\$4,500 至 NT\$24,000 折抵優惠1。
          </p>
          <a 
            href="https://www.apple.com/tw/shop/goto/trade_in"
            className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            查看你裝置的估價 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;