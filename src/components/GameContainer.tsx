import React, { useRef, useEffect, ReactNode } from 'react';
import type { Dimensions } from '../types/game';

interface GameContainerProps {
  onClick: () => void;
  children: ReactNode;
}

export const GameContainer: React.FC<GameContainerProps> = ({ onClick, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState<Dimensions>({ width: 400, height: 600 });

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
        });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div
      ref={ref}
      className="game-container relative w-full h-screen overflow-hidden bg-gray-800"
      onClick={onClick}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { gameDimensions: dimensions }) : child
      )}
    </div>
  );
};