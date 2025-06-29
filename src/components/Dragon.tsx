import React, { useState, useEffect } from 'react';
import type { Dimensions } from '../types/game';
import { Flame } from 'lucide-react';

interface DragonProps {
  y: number;
  rotation: number;
  isDead: boolean;
  gameDimensions: Dimensions;
}

const Dragon: React.FC<DragonProps> = ({ y, rotation, isDead, gameDimensions }) => {
  const [showFire, setShowFire] = useState(false);
  
  useEffect(() => {
    if (!isDead) {
      setShowFire(true);
      const timer = setTimeout(() => setShowFire(false), 200);
      return () => clearTimeout(timer);
    }
  }, [y, isDead]);
  
  return (
    <div
      style={{
        position: 'absolute',
        left: gameDimensions.width * 0.2,
        top: y,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.1s',
        width: 60,
        height: 60,
        zIndex: 10,
      }}
      className={isDead ? 'opacity-70' : 'opacity-100'}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-orange-500 flex items-center justify-center">
          <div className="absolute inset-1 rounded-full bg-yellow-400 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-orange-300"></div>
          </div>
        </div>
        
        {/* Eyes */}
        <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-white">
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-black"></div>
        </div>
        <div className="absolute top-2 right-3 w-3 h-3 rounded-full bg-white">
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-black"></div>
        </div>
        
        {/* Beak */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-5 h-4 bg-orange-600 rounded"></div>
        
        {showFire && (
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-500 animate-pulse">
            <Flame size={24} className="fill-orange-500 text-red-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dragon;