import { useEffect } from 'react';

interface GameControlsProps {
  gameStarted: boolean;
  gameOver: boolean;
  handleJump: () => void;
}

export const useGameControls = ({ gameStarted, gameOver, handleJump }: GameControlsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowUp') {
        handleJump();
      }
    };

    const handleTouchStart = () => {
      handleJump();
    };

    if (gameStarted && !gameOver) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [gameStarted, gameOver, handleJump]);
};