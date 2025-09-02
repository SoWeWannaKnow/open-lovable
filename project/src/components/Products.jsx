import React from 'react';

const Products = () => {
  const products = [
    {
      title: "Open Lovable 網站建置",
      subtitle: "【Vibe Coding】精美網站製作教學｜不用美感、不用天份、只需要複製現成網站｜Open Lovable 網站建置 + 部署｜所以想知道",
      bgColor: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
      textColor: "text-white",
      link: "https://youtube.com/video/0VOcOcTg_VY"
    },
    {
      title: "Vibe Coding 部署",
      subtitle: "【Vibe Coding】網站建置 + 部署｜最簡單、最好懂、新手也能快速上手｜所以想知道",
      bgColor: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      textColor: "text-white",
      link: "https://youtube.com/video/yGR8y-ItJsw"
    },
    {
      title: "Mermaid 語法",
      subtitle: "【技術概念】AI 應用效率倍增 | 讓 AI 秒懂你的邏輯 | 最簡單的 Mermaid 語法｜所以想知道",
      bgColor: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
      textColor: "text-white",
      link: "https://youtube.com/video/MFr4CMCKJWw"
    },
    {
      title: "當外包成為常態",
      subtitle: "【產業話題】不再招募正職人力？自由工作者的時代來臨了？｜外包、接案成為常態｜所以想知道",
      bgColor: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
      textColor: "text-white",
      link: "https://youtube.com/video/QsIoWzHvf6c",
    },
    {
      title: "OAuth 授權",
      subtitle: "【技術概念】自動化流程｜完整帶你走完 OAuth 授權環節｜所以想知道",
      bgColor: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
      textColor: "text-white",
      link: "https://youtube.com/video/UAt-rSvcla0"
    },
    {
      title: "面試官在想什麼？",
      subtitle: "【面試必看】面試官在想什麼？｜全部答對反而不會上？ ｜所以想知道",
      bgColor: "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300",
      textColor: "text-gray-900",
      link: "https://youtube.com/video/QpiLKyaTEzI",
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
                  觀看教學
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            加入成爲頻道會員
          </h3>
          <a 
            href="https://www.youtube.com/@SoWeWannaKnow"
            className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            開始學習 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;