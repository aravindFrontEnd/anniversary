import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [heartColor, setHeartColor] = useState('text-rose-400');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const colors = [
    { text: 'text-rose-400', glow: '244, 63, 94' },


    { text: 'text-pink-400', glow: '236, 72, 153' },


    { text: 'text-purple-400', glow: '192, 132, 252' },


    { text: 'text-red-400', glow: '248, 113, 113' },


    { text: 'text-fuchsia-400', glow: '232, 121, 249' },

  ];


  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const memories = [
    {
      title: "Breaking the Ice at Papa's Place",
      date: "November 20, 2022",
      description: "Who knew a simple house visit would turn into the start of something special? Nervous smiles, awkward glances, and enough butterflies to start a sanctuary!",
      image: "/papa_House.png"
    },
    {
      title: "The Jan Veedu Adventure",
      date: "December 4, 2022",
      description: "Round two of family meetings - this time with double the fun and half the nervousness! They say home is where the heart is, well, found mine here!",
      image: "/jaan_veedupng.png"
    },
    {
      title: "Gatta Gusti - Our First Silver Screen Date",
      date: "January 1, 2023",
      description: "New Year's day spent watching Gatta Gusti. Who needs action movies when our hearts were doing all the stunts?",
      image: "/gatt_gustipng.png"
    },
    {
      title: "Avatar: Way of Water & Way to Your Heart",
      date: "January 9, 2023",
      description: "3D glasses on, Ibaco ice cream in hand, and you by my side - even Pandora couldn't compete with this perfect day!",
      image: "/avatar.png"
    },
    {
      title: "The Sweet Prelude",
      date: "February 12, 2023",
      description: "A cake so sweet, but not as sweet as what was about to come! The calm before the happiest storm.",
      image: "/engagement_cake.png"
    },
    {
      title: "The Day You Said 'Yes'!",
      date: "February 12, 2023",
      description: "Two years goneBy and still can't believe you agreed to be my partner in crime, adventure buddy, and full-time happiness manager!",
      image: "/engagement.png"
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % memories.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-gray-50'} transition-colors duration-500`}>
      <div className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 max-w-[500px] mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:scale-110 transition-all duration-300"
            >
              {isDarkMode ? (
                <Sun
                  className="text-yellow-400"
                  size={24}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.8))'
                  }}
                />
              ) : (
                <Moon className="text-gray-600" size={24} />
              )}
            </button>
          </div>

          <div className="text-center mb-8">
            <div className="relative inline-block">
              <h1
                className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-300 ${isDarkMode
                  ? 'text-rose-400'
                  : 'text-rose-600'
                  }`}
                style={{
                  textShadow: isDarkMode
                    ? '0 0 10px rgba(244,63,94,0.5), 0 0 20px rgba(244,63,94,0.3), 0 0 30px rgba(244,63,94,0.2)'
                    : 'none'
                }}
              >
                Just Us
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Heart
                className={`${colors[currentColorIndex].text} transition-all duration-500`}
                size={24}
                style={{
                  filter: isDarkMode ? `drop-shadow(0 0 8px rgba(${colors[currentColorIndex].glow}, 0.8))` : 'none'
                }}
              />
              <span
                className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                style={{
                  textShadow: isDarkMode ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                }}
              >
                Two Years of Forever
              </span>
              <Heart
                className={`${colors[currentColorIndex].text} transition-all duration-500`}
                size={24}
                style={{
                  filter: isDarkMode ? `drop-shadow(0 0 8px rgba(${colors[currentColorIndex].glow}, 0.8))` : 'none'
                }}
              />
            </div>
          </div>

          <div className="relative group">
            <div
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${isDarkMode
                ? 'bg-gray-900 shadow-[0_0_20px_rgba(244,63,94,0.2)] hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]'
                : 'bg-white hover:shadow-xl'
                }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={memories[currentPage].image}
                  alt={memories[currentPage].title}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105 bg-black/5"
                />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/40' : 'bg-black/10'}`}></div>
              </div>

              <div className={`p-4 sm:p-6 ${isDarkMode
                ? 'bg-gradient-to-b from-gray-900 to-black'
                : 'bg-white'
                }`}>
                <h2
                  className={`text-2xl sm:text-3xl font-semibold mb-2 transition-all duration-300 ${isDarkMode
                    ? 'text-white hover:text-rose-400'
                    : 'text-gray-800 hover:text-rose-600'
                    }`}
                  style={{
                    textShadow: isDarkMode ? '0 0 10px rgba(255,255,255,0.3)' : 'none'
                  }}
                >
                  {memories[currentPage].title}
                </h2>
                <p
                  className={`${colors[currentColorIndex].text} mb-4 transition-all duration-500`}
                  style={{
                    textShadow: isDarkMode ? `0 0 10px rgba(${colors[currentColorIndex].glow}, 0.8)` : 'none'
                  }}
                >
                  {memories[currentPage].date}
                </p>
                <p
                  className={`text-base sm:text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  style={{
                    textShadow: isDarkMode ? '0 0 10px rgba(255,255,255,0.2)' : 'none'
                  }}
                >
                  {memories[currentPage].description}
                </p>
              </div>
            </div>

            <button
              onClick={prevPage}
              className={`absolute left-4 top-[40%] -translate-y-[40%] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isDarkMode
                ? 'bg-black/50 hover:bg-rose-900/30 backdrop-blur-sm'
                : 'bg-white hover:bg-gray-100'
                }`}
            >
              <ChevronLeft size={24} className={colors[currentColorIndex].text} />
            </button>

            <button
              onClick={nextPage}
              className={`absolute right-4 top-[40%] -translate-y-[40%] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isDarkMode
                ? 'bg-black/50 hover:bg-rose-900/30 backdrop-blur-sm'
                : 'bg-white hover:bg-gray-100'
                }`}
            >
              <ChevronRight size={24} className={colors[currentColorIndex].text} />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${currentPage === index
                  ? `${colors[currentColorIndex].text?.replace('text', 'bg')}`
                  : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                style={{
                  boxShadow: currentPage === index && isDarkMode
                    ? `0 0 10px rgba(${colors[currentColorIndex].glow}, 0.8)`
                    : 'none'
                }}
              />
            ))}
          </div>
        </div>

        <div className="fixed right-4 top-1/3 -translate-y-1/2 sm:right-6 flex flex-col items-center gap-2 -rotate-90 origin-right">
          <div className="relative">
            <div
              className={`flex items-center gap-2 whitespace-nowrap ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              <span className="text-xs sm:text-sm">Made with</span>
              <Heart
                className={`${colors[currentColorIndex].text} inline-block transition-all duration-500`}
                size={14}
                style={{
                  filter: isDarkMode ? `drop-shadow(0 0 8px rgba(${colors[currentColorIndex].glow}, 0.8))` : 'none'
                }}
              />
              <span
                className={`text-xs sm:text-sm font-medium ${isDarkMode
                  ? 'text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]'
                  : 'text-rose-600'
                  }`}
              >
                by Preevind
              </span>
            </div>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 120 6"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 3 Q 30 6 60 3 Q 90 0 120 3"
                fill="none"
                strokeWidth="1.5"
                className="animate-[dash_2s_linear_infinite]"
                style={{
                  stroke: 'url(#rainbowLine)',
                  strokeDasharray: '125',
                  strokeDashoffset: '125',
                  animation: 'dash 2s linear infinite'
                }}
              />
              <defs>
                <linearGradient id="rainbowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9400D3">
                    <animate
                      attributeName="offset"
                      values="0;1;0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="14.3%" stopColor="#4B0082">
                    <animate
                      attributeName="offset"
                      values="0.143;1.143;0.143"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="28.6%" stopColor="#0000FF">
                    <animate
                      attributeName="offset"
                      values="0.286;1.286;0.286"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="42.9%" stopColor="#00FF00">
                    <animate
                      attributeName="offset"
                      values="0.429;1.429;0.429"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="57.2%" stopColor="#FFFF00">
                    <animate
                      attributeName="offset"
                      values="0.572;1.572;0.572"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="71.5%" stopColor="#FF7F00">
                    <animate
                      attributeName="offset"
                      values="0.715;1.715;0.715"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="85.8%" stopColor="#FF0000">
                    <animate
                      attributeName="offset"
                      values="0.858;1.858;0.858"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#9400D3">
                    <animate
                      attributeName="offset"
                      values="1;2;1"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
            <style jsx>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;