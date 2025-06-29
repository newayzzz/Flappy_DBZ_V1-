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
    if (!isDead && rotation < -5) { // Show fire when jumping (negative rotation)
      setShowFire(true);
      const timer = setTimeout(() => setShowFire(false), 300);
      return () => clearTimeout(timer);
    }
  }, [rotation, isDead]);
  
  return (
    <div
      style={{
        position: 'absolute',
        left: gameDimensions.width * 0.2,
        top: y - 30, // Center the dragon properly
        transform: `rotate(${rotation}deg)`,
        transition: isDead ? 'none' : 'transform 0.1s ease-out',
        width: 50, // Reduced size for better clearance
        height: 50,
        zIndex: 10,
      }}
      className={isDead ? 'opacity-70' : 'opacity-100'}
    >
      <div className="relative w-full h-full">
        {/* Dragon body */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400"></div>
          </div>
        </div>
        
        {/* Eyes */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white">
          <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-black"></div>
        </div>
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white">
          <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-black"></div>
        </div>
        
        {/* Beak */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-orange-600 rounded-sm"></div>
        
        {/* Fire effect */}
        {showFire && (
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-red-500 animate-pulse">
            <Flame size={20} className="fill-orange-500 text-red-600" />
          </div>
        )}
        
        {/* Wing */}
        <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-3 h-4 bg-orange-300 rounded-full opacity-80"></div>
      </div>
    </div>
  );
};

export default Dragon;