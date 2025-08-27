import React from 'react';

const Footer = () => {
  const links = [
    { title: "商店", items: ["商店首頁", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV與電影", "配件"] },
    { title: "Apple 錢包", items: ["錢包", "Apple Card", "Apple Pay"] },
    { title: "帳號", items: ["管理你的 Apple ID", "Apple Store 帳號", "iCloud.com"] },
    { title: "Apple Store", items: ["尋找零售店", "Genius Bar", "Today at Apple", "Apple 夏令營", "Apple Trade In 換購方案", "訂單狀態", "購物協助"] },
    { title: "商務應用", items: ["Apple 與商務", "商務選購"] },
    { title: "教育", items: ["Apple 與教育", "高校生選購優惠", "大專生選購優惠"] },
    { title: "Apple 的價值", items: ["輔助使用", "教育", "環境", "包容性與多元性", "隱私權", "供應商責任"] },
    { title: "關於 Apple", items: ["Newsroom", "Apple 領導團隊", "工作機會", "投資者", "Apple 維修", "活動", "聯絡 Apple"] }
  ];

  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {links.map((category, index) => (
            <div key={index}>
              <h3 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-xs text-gray-600 mb-4">
            更多選購方式：尋找你附近的 <a href="#" className="text-blue-600 hover:underline">Apple Store</a> 或 <a href="#" className="text-blue-600 hover:underline">其他零售商</a>。致電 0800-020-021 或 <a href="#" className="text-blue-600 hover:underline">尋找經銷商</a>。
          </p>

          <div className="text-xs text-gray-600">
            <p>Copyright © 2024 Apple Inc. 保留所有權利。</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-blue-600 hover:underline">隱私權政策</a>
              <a href="#" className="text-blue-600 hover:underline">使用條款</a>
              <a href="#" className="text-blue-600 hover:underline">銷售政策</a>
              <a href="#" className="text-blue-600 hover:underline">網站地圖</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;