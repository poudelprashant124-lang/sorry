
import React, { useState } from 'react';

const OpenLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-12 px-4">
      {!isOpen ? (
        <div className="text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-rose-500 font-romantic text-2xl rounded-full hover:bg-rose-600 shadow-xl hover:shadow-rose-200/50 transform hover:scale-105 active:scale-95"
          >
            <i className="fa-solid fa-envelope-open-heart mr-3 animate-bounce"></i>
            Open Letter from Prashant
          </button>
        </div>
      ) : (
        <div className="animate-fadeIn transition-all duration-1000">
          <div className="bg-[#fffdfa] p-8 md:p-12 rounded-sm shadow-2xl border-t-8 border-rose-400 relative overflow-hidden">
            {/* Paper Texture Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="relative z-10">
              <h3 className="text-4xl font-romantic text-rose-600 mb-8 border-b border-rose-100 pb-4">My Dearest,</h3>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  I'm writing this because my heart is heavy with regret. I am so incredibly sorry for my mistakes and for the hurt I may have caused.
                </p>
                <p>
                  I'm especially sorry for not wishing you on Valentine's Day. Please know that you were in my thoughts every single second, even if my words didn't reach you then. You deserve to be celebrated every day, not just on one.
                </p>
                <p>
                  I miss you more than I can put into words. I miss the sound of your voice—it's my favorite sound in the whole world, and I find myself replaying it in my head just to feel close to you.
                </p>
                <p>
                  I truly can't wait to meet you. The distance is just a test of how far love can travel, and mine is already there with you.
                </p>
                <p className="text-2xl font-romantic text-rose-500 pt-4">
                  I love you 3000.
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-rose-100">
                <p className="font-romantic text-3xl text-rose-600">Yours forever,</p>
                <p className="font-romantic text-4xl text-rose-700 mt-2">Prashant</p>
              </div>
            </div>

            {/* Decorative Heart */}
            <div className="absolute bottom-4 right-8 opacity-20 text-rose-500 text-6xl rotate-12">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          
          <p className="text-center mt-6 text-rose-400 italic animate-pulse">
            Click the 'X' to close, but keep the love in your heart.
          </p>
        </div>
      )}
    </div>
  );
};

export default OpenLetter;
