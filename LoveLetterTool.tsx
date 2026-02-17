
import React, { useState } from 'react';
import { generateLoveLetter } from '../services/geminiService';

const LoveLetterTool: React.FC = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [quality, setQuality] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !reason || !quality) return;
    setLoading(true);
    const generated = await generateLoveLetter(name, reason, quality);
    setLetter(generated);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-100 mt-12">
      <h3 className="text-3xl font-romantic text-pink-600 text-center mb-6">Create Our Moment</h3>
      
      {!letter ? (
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-pink-700 font-medium mb-1">Your Name (or Nickname)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
              placeholder="e.g. My Princess"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 font-medium mb-1">What am I sorry for?</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
              placeholder="e.g. Being late or forgetting the plans"
              required
            />
          </div>
          <div>
            <label className="block text-pink-700 font-medium mb-1">My favorite thing about you is...</label>
            <input
              type="text"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
              placeholder="e.g. Your beautiful laugh"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <i className="fa-solid fa-heart animate-pulse mr-2"></i> Writing with love...
              </span>
            ) : "Generate Special Letter"}
          </button>
        </form>
      ) : (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-500 italic text-gray-700 whitespace-pre-wrap leading-relaxed shadow-inner">
            {letter}
          </div>
          <button
            onClick={() => setLetter('')}
            className="text-pink-500 hover:text-pink-700 text-sm font-semibold flex items-center justify-center w-full"
          >
            <i className="fa-solid fa-redo mr-2"></i> Write another one
          </button>
        </div>
      )}
    </div>
  );
};

export default LoveLetterTool;
