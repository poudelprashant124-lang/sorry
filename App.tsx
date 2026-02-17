
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import ForgiveMeGame from './components/ForgiveMeGame';
import OpenLetter from './components/OpenLetter';

const memories = [
  { id: 1, title: "Our Connection", desc: "Every word we speak brings us closer.", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Your Voice", desc: "The melody I want to wake up to.", img: "https://images.unsplash.com/photo-1516589174184-c68536573803?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Future Together", desc: "Waiting for the day we finally meet.", img: "https://images.unsplash.com/photo-1511733880359-81cbdbd9df9f?auto=format&fit=crop&q=80&w=400" },
];

const App: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative pb-20 overflow-x-hidden bg-[#fffafa]">
      <FloatingHearts />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-romantic text-rose-600">For My Queen</h1>
          <div className="flex gap-4 text-rose-500">
            <i className="fa-solid fa-heart text-2xl animate-pulse"></i>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full border-4 border-rose-200 p-2 animate-spin-slow">
               <div className="w-full h-full rounded-full border-4 border-rose-400 border-dashed"></div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=200" 
              alt="Love" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-36 h-36 shadow-2xl object-cover"
            />
          </div>
          <h2 className="text-6xl md:text-8xl font-romantic text-rose-600 mb-6 drop-shadow-sm">A Gift from Prashant</h2>
          <p className="text-xl text-gray-500 max-w-lg mx-auto leading-relaxed italic">
            "I may not have the best timing, but I have the most sincere heart."
          </p>
        </div>
      </section>

      {/* The Interactive Ask */}
      <section className="max-w-4xl mx-auto px-4 mb-24 relative z-10">
        {!success ? (
          <ForgiveMeGame onSuccess={() => setSuccess(true)} />
        ) : (
          <div className="bg-rose-50/90 backdrop-blur-md border border-rose-100 p-12 rounded-3xl shadow-2xl text-center transform transition-all animate-fadeIn">
            <h3 className="text-5xl font-romantic text-rose-600 mb-4">Thank You for Forgiving Me ❤️</h3>
            <p className="text-xl text-rose-800 font-medium">I will never take your kindness for granted.</p>
            <div className="mt-8 flex justify-center gap-6">
              <i className="fa-solid fa-heart text-rose-500 text-4xl animate-bounce"></i>
              <i className="fa-solid fa-face-grin-hearts text-rose-500 text-4xl animate-bounce delay-100"></i>
              <i className="fa-solid fa-heart text-rose-500 text-4xl animate-bounce delay-200"></i>
            </div>
          </div>
        )}
      </section>

      {/* The Letter Section - REPLACED LOVELETTERTOOL */}
      <section className="px-4 mb-24 scroll-mt-24" id="letter">
        <div className="text-center mb-10">
          <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Personal</span>
          <h3 className="text-5xl font-romantic text-rose-600 mt-4">A Special Message</h3>
        </div>
        <OpenLetter />
      </section>

      {/* Memory Gallery */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h3 className="text-4xl font-romantic text-center text-rose-600 mb-12">Captured Moments</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((m) => (
            <div key={m.id} className="group bg-white p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:rotate-2">
              <div className="relative h-72 overflow-hidden rounded-xl">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold text-gray-800 font-romantic text-2xl">{m.title}</h4>
                <p className="text-sm text-gray-500 italic mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-rose-100 mt-10">
        <p className="text-rose-400 font-romantic text-3xl">Forever & Always,</p>
        <p className="text-rose-600 font-romantic text-5xl mt-2">Prashant</p>
        <div className="mt-8 flex justify-center gap-6 text-rose-200 text-xl">
          <i className="fa-solid fa-infinity"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-crown"></i>
        </div>
      </footer>
    </div>
  );
};

export default App;
