import { useState, useRef, useEffect, useCallback } from 'react';
import type { Pipe, Dimensions } from '../types/game';

interface GameLoopProps {
  gameStarted: boolean;
  gameOver: boolean;
  setGameOver: (over: boolean) => void;
  setScore: (score: number) => void;
}

export const useGameLoop = ({ gameStarted, gameOver, setGameOver, setScore }: GameLoopProps) => {
  const [dragonPos, setDragonPos] = useState(300);
  const [dragonVelocity, setDragonVelocity] = useState(0);
  const [dragonRotation, setDragonRotation] = useState(0);
  const [pipes, setPipes] = useState<Pipe[]>([]);
  const [gameDimensions, setGameDimensions] = useState<Dimensions>({ width: 400, height: 600 });
  
  // Game physics constants - improved for better gameplay
  const gravity = 0.6;
  const jumpStrength = -12;
  const dragonRadius = 25; // Reduced for better clearance
  
  const requestRef = useRef<number | null>(null);
  const scoredPipesRef = useRef<Set<string>>(new Set());

  const checkCollision = useCallback(() => {
    const dragonTop = dragonPos - dragonRadius;
    const dragonBottom = dragonPos + dragonRadius;
    const dragonLeft = gameDimensions.width * 0.2 - dragonRadius;
    const dragonRight = gameDimensions.width * 0.2 + dragonRadius;

    // Check floor and ceiling collision with some margin
    if (dragonTop <= 10 || dragonBottom >= gameDimensions.height - 10) {
      return true;
    }

    // Check pipe collisions
    for (const pipe of pipes) {
      const pipeWidth = 50;
      const pipeGap = 180; // Increased gap for better playability
      
      // Check if dragon is horizontally aligned with pipe
      if (pipe.x <= dragonRight && pipe.x + pipeWidth >= dragonLeft) {
        // Check if dragon is in the gap between pipes
        const inGap = dragonTop > pipe.topHeight && dragonBottom < pipe.topHeight + pipeGap;
        if (!inGap) {
          return true;
        }
      }
    }

    return false;
  }, [dragonPos, pipes, gameDimensions, dragonRadius]);

  const updateScore = useCallback(() => {
    const dragonX = gameDimensions.width * 0.2;
    
    for (const pipe of pipes) {
      // Award point when dragon passes through pipe gap
      if (dragonX > pipe.x + 50 && !scoredPipesRef.current.has(pipe.id)) {
        scoredPipesRef.current.add(pipe.id);
        setScore(prev => prev + 1);
      }
    }
  }, [pipes, gameDimensions.width, setScore]);

  const handleJump = useCallback(() => {
    if (!gameStarted || gameOver) return;
    setDragonVelocity(jumpStrength);
  }, [gameStarted, gameOver, jumpStrength]);

  const gameLoop = useCallback(() => {
    if (!gameStarted || gameOver) {
      if (!gameOver) {
        requestRef.current = requestAnimationFrame(gameLoop);
      }
      return;
    }

    // Update dragon physics
    setDragonPos(prev => {
      const newPos = prev + dragonVelocity;
      return Math.max(dragonRadius, Math.min(gameDimensions.height - dragonRadius, newPos));
    });
    setDragonVelocity(prev => prev + gravity);
    
    // Update dragon rotation based on velocity for visual feedback
    setDragonRotation(Math.min(Math.max(dragonVelocity * 2.5, -25), 70));
    
    // Check for collisions
    if (checkCollision()) {
      setGameOver(true);
      return;
    }
    
    // Update score
    updateScore();
    
    // Continue animation loop
    requestRef.current = requestAnimationFrame(gameLoop);
  }, [gameStarted, gameOver, dragonVelocity, gravity, checkCollision, updateScore, setGameOver, gameDimensions.height, dragonRadius]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      requestRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [gameLoop, gameStarted, gameOver]);

  return {
    dragonPos,
    dragonRotation,
    handleJump,
    requestRef,
    scoredPipesRef,
    setDragonPos,
    setDragonVelocity,
    setDragonRotation,
    pipes,
    setPipes,
    gameDimensions,
    setGameDimensions
  };
};