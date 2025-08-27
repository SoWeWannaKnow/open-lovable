import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Apple 特別活動
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            台北時間 9 月 10 日凌晨 1 點線上觀看。
          </p>
          <a 
            href="https://www.apple.com/tw/apple-events/home/built/assets/event/event.ics"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            加入行事曆
          </a>
        </div>

        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl h-96 flex items-center justify-center shadow-2xl">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Live Event</h3>
            <p className="text-lg opacity-90">Stay tuned for announcements</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
              買 Mac 或 iPad 優惠組合 上大專
            </h3>
            <p className="text-lg text-gray-700 mb-2">可享教育優惠</p>
            <p className="text-lg text-gray-700 mb-2">搭配 AirPods</p>
            <p className="text-lg text-gray-700 mb-6">或指定配件 省多多Δ</p>
            <a 
              href="https://www.apple.com/tw-edu/shop/goto/edu_store"
              className="inline-flex items-center px-6 py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 font-semibold transition-all duration-300"
            >
              選購 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;