import { useEffect, useRef, useCallback } from 'react';
import type { Pipe } from '../types/game';

interface PipeSpawnerProps {
  gameStarted: boolean;
  gameOver: boolean;
  spawnInterval: number;
  speed: number;
  setPipes: React.Dispatch<React.SetStateAction<Pipe[]>>;
}

export const usePipeSpawner = ({
  gameStarted,
  gameOver,
  spawnInterval,
  speed,
  setPipes
}: PipeSpawnerProps) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  // Generate a random pipe with safe height constraints
  const generateRandomPipe = useCallback((): Pipe => {
    const minHeight = 50;
    const maxHeight = window.innerHeight * 0.6;
    const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
    
    return {
      id: `pipe-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      x: window.innerWidth,
      topHeight,
    };
  }, []);

  // Spawn new pipes at regular intervals
  useEffect(() => {
    if (gameStarted && !gameOver) {
      timerRef.current = setInterval(() => {
        setPipes(prev => [...prev, generateRandomPipe()]);
      }, spawnInterval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameStarted, gameOver, spawnInterval, setPipes, generateRandomPipe]);

  // Move pipes horizontally and clean up off-screen pipes
  const movePipes = useCallback(() => {
    if (gameStarted && !gameOver) {
      setPipes(prev => 
        prev
          .map(pipe => ({ ...pipe, x: pipe.x - speed }))
          .filter(pipe => pipe.x > -100) // Remove pipes that are well off screen
      );
      animationRef.current = requestAnimationFrame(movePipes);
    }
  }, [gameStarted, gameOver, speed, setPipes]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      animationRef.current = requestAnimationFrame(movePipes);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameStarted, gameOver, movePipes]);
};