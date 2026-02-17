
import React, { useState } from 'react';

interface ForgiveMeGameProps {
  onSuccess: () => void;
}

const ForgiveMeGame: React.FC<ForgiveMeGameProps> = ({ onSuccess }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesSize, setYesSize] = useState(1);

  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoPosition({ x: randomX, y: randomY });
    setYesSize(prev => prev + 0.15);
  };

  return (
    <div className="text-center py-10 px-4 bg-white/40 backdrop-blur-md rounded-3xl shadow-xl border border-pink-200">
      <h2 className="text-4xl md:text-5xl font-romantic text-pink-600 mb-8">
        Will you be my Valentine? (And forgive me? 🥺)
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button
          onClick={onSuccess}
          style={{ transform: `scale(${yesSize})` }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 z-20"
        >
          YES! ❤️
        </button>
        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
          className="bg-gray-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-200 z-10"
        >
          No 😢
        </button>
      </div>
      <p className="mt-8 text-pink-400 italic">
        {yesSize > 2 ? "Resistance is futile, I love you too much!" : "Choose wisely..."}
      </p>
    </div>
  );
};

export default ForgiveMeGame;
