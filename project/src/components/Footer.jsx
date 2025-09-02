import React from 'react';

const Footer = () => {
  const links = [
    { title: "頻道精選", items: ["網站建置教學", "AI 工具應用", "Mermaid 語法入門", "產業趨勢解析", "面試技巧分享"] },
    { title: "學習資源", items: ["Vibe Coding 系列", "Open Lovable 專案", "技術概念解說", "外包與自由工作者"] },
    { title: "社群互動", items: ["YouTube 頻道", "加入會員", "留言討論", "追蹤最新動態"] },
    { title: "關於我們", items: ["頻道介紹", "聯絡方式", "合作提案", "常見問題"] }
  ];

  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((category, index) => (
            <div key={index}>
              <h3 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="text-xs text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-xs text-gray-600 mb-4">
            這裡是 <span className="font-semibold text-blue-600">所以想知道</span> 頻道，幫助你快速上手網頁開發、AI 工具應用與產業趨勢。<br />
            歡迎加入會員、訂閱頻道，與我們一起學習、交流、成長！
          </p>

          <div className="text-xs text-gray-600">
            <p>Copyright © 2024 所以想知道 SoWeWannaKnow. 保留所有權利。</p>
            <div className="mt-2 space-x-4">
              <a href="https://www.youtube.com/@SoWeWannaKnow" className="text-blue-600 hover:underline">YouTube 頻道</a>
              <a href="#" className="text-blue-600 hover:underline">隱私權政策</a>
              <a href="#" className="text-blue-600 hover:underline">使用條款</a>
              <a href="#" className="text-blue-600 hover:underline">聯絡我們</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;