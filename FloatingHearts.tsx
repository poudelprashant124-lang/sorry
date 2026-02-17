
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; size: string; color: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        duration: `${5 + Math.random() * 10}s`,
        size: `${10 + Math.random() * 30}px`,
        color: ['#ff4d6d', '#ff758f', '#ffb3c1', '#c9184a'][Math.floor(Math.random() * 4)]
      };
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle flex items-center justify-center"
          style={{
            left: heart.left,
            bottom: '-50px',
            animationDuration: heart.duration,
            fontSize: heart.size,
            color: heart.color
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
