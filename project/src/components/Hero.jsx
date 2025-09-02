import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative text-center mb-12 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 pointer-events-none">
            <img
              className="w-full h-full object-cover rounded-3xl shadow-xl"
              src="https://yt3.googleusercontent.com/hk7nytntd4p5NvKsvl92uYeA3zGIloibg-inzMls4asMSr_RVshHGukQ7dUhPlRgpLHtAEYW3H0=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              style={{ minHeight: '300px', marginTop: '80px'}}
            />
          </div>
          {/* 文字內容：相對定位，確保在影片上方 */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center py-12">
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
              所以想知道
            </h3>
            <p className="text-lg text-gray-700 mb-2">一個幫助你快速上手網頁開發的頻道</p>
            <p className="text-lg text-gray-700 mb-2">搭配 AI 以及智慧化工具</p>
            <p className="text-lg text-gray-700 mb-6">享受學習開發的成就與樂趣</p>
            <a 
              href="https://www.youtube.com/@SoWeWannaKnow"
              className="inline-flex items-center px-6 py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 font-semibold transition-all duration-300"
            >
              頻道追蹤 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;