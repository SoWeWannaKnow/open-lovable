import React from 'react';

const AppleTV = () => {
  const shows = [
    {
      title: "Vibe Coding",
      genre: "Vibe Coding",
      description: "網站建置 + 部署｜最簡單、最好懂、新手也能快速上手",
      url: "https://tv.apple.com/tw/show/全面入侵/umc.cmc.70b7z97fv7azfzn5baqnj88p6"
    },
    {
      title: "技術概念",
      genre: "技術概念",
      description: "AI 應用效率倍增",
      url: "https://tv.apple.com/tw/show/柏拉圖式關係/umc.cmc.y7bc18x7co813l8i2tlsyb4l"
    },
    {
      title: "產業話題",
      genre: "產業話題",
      description: "開發產業趨勢",
      url: "https://tv.apple.com/tw/show/戰士/umc.cmc.6ag0zq020ielwv7m83v8r4dkw"
    },
    {
      title: "專有名詞",
      genre: "專有名詞",
      description: "最好懂的專有名詞解釋",
      url: "https://tv.apple.com/tw/show/阿卡普科/umc.cmc.8xrkg9zywke7g6a9ahmvpr3l"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-red-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-center mb-12">
          播放清單
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show, index) => (
            <a 
              key={index}
              href={show.url}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{show.genre}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{show.title}</h3>
                  <p className="text-gray-300 text-sm">{show.description}</p>
                  <p className="text-purple-300 text-sm mt-2">立即前往觀看</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleTV;