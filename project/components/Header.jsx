import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                <path d="M13.04 6.4c-.25.25-.4.62-.4.99 0 .37.15.74.4.99.25.25.62.4.99.4.37 0 .74-.15.99-.4.25-.25.4-.62.4-.99 0-.37-.15-.74-.4-.99-.25-.25-.62-.4-.99-.4-.37 0-.74.15-.99.4zM8.5 0C6.43 0 5.02 1.17 5.02 1.17S6.43 1.17 6.43 2.92c0 1.75-1.41 3.16-1.41 3.16s1.41 1.41 1.41 3.16c0 1.75-1.41 3.16-1.41 3.16s-1.41-1.41-1.41-3.16c0-1.75 1.41-3.16 1.41-3.16S6.43 1.17 6.43 1.17S5.02 0 8.5 0z"/>
              </svg>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">商店</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">Mac</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">iPad</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">iPhone</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">Watch</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">AirPods</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">TV與電影</a>
            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 transition-colors">支援服務</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-900 hover:text-gray-600 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 12.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z"/>
              </svg>
            </button>
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1 2.75A.75.75 0 011.75 2h12.5A.75.75 0 0115 2.75v.5A.75.75 0 0114.25 4H1.75A.75.75 0 011 3.25v-.5zM1 7.75A.75.75 0 011.75 7h12.5A.75.75 0 0115 7.75v.5A.75.75 0 0114.25 9H1.75A.75.75 0 011 8.25v-.5zM1 12.75A.75.75 0 011.75 12h12.5a.75.75 0 01.75.75v.5a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75v-.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block py-2 text-sm text-gray-900">商店</a>
            <a href="#" className="block py-2 text-sm text-gray-900">Mac</a>
            <a href="#" className="block py-2 text-sm text-gray-900">iPad</a>
            <a href="#" className="block py-2 text-sm text-gray-900">iPhone</a>
            <a href="#" className="block py-2 text-sm text-gray-900">Watch</a>
            <a href="#" className="block py-2 text-sm text-gray-900">AirPods</a>
            <a href="#" className="block py-2 text-sm text-gray-900">TV與電影</a>
            <a href="#" className="block py-2 text-sm text-gray-900">支援服務</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;