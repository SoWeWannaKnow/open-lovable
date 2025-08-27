import React from 'react';

const AppleTV = () => {
  const shows = [
    {
      title: "全面入侵",
      genre: "科幻",
      description: "新一季現已上架",
      url: "https://tv.apple.com/tw/show/全面入侵/umc.cmc.70b7z97fv7azfzn5baqnj88p6"
    },
    {
      title: "柏拉圖式關係",
      genre: "喜劇",
      description: "塞斯羅根和蘿絲拜恩這對重逢的昔日摯友，展開了意外搞笑的友誼新篇章",
      url: "https://tv.apple.com/tw/show/柏拉圖式關係/umc.cmc.y7bc18x7co813l8i2tlsyb4l"
    },
    {
      title: "戰士",
      genre: "劇情片",
      description: "為了團結人民，強悍的夏威夷戰士卡亞納，扛起了艱巨的任務",
      url: "https://tv.apple.com/tw/show/戰士/umc.cmc.6ag0zq020ielwv7m83v8r4dkw"
    },
    {
      title: "阿卡普科",
      genre: "喜劇",
      description: "心想事成的度假天堂，就在這裡",
      url: "https://tv.apple.com/tw/show/阿卡普科/umc.cmc.8xrkg9zywke7g6a9ahmvpr3l"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-red-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-center mb-12">
          Apple TV+
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
                  <p className="text-purple-300 text-sm mt-2">立即串流播放</p>
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