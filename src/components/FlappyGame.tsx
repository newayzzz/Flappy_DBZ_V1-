import React, { useState, useEffect } from 'react';
import { GameContainer } from './GameContainer';
import Background from './Background';
import Dragon from './Dragon';
import StartScreen from './StartScreen';
import GameOverModal from './GameOverModal';
import { ScoreDisplay } from './ScoreDisplay';
import { ThemeToggle, THEMES, ThemeType } from './ThemeToggle';
import { PipesRenderer } from './PipesRenderer';
import { useGameLoop } from '../hooks/useGameLoop';
import { useGameControls } from '../hooks/useGameControls';
import { usePipeSpawner } from '../hooks/usePipeSpawner';

const FlappyGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('flappy-dragon-high-score');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('original');

  const {
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
  } = useGameLoop({ 
    gameStarted, 
    gameOver, 
    setGameOver, 
    setScore 
  });

  useGameControls({ 
    gameStarted, 
    gameOver, 
    handleJump 
  });
  
  usePipeSpawner({ 
    gameStarted, 
    gameOver, 
    spawnInterval: 2000, // Increased interval for better spacing
    speed: 2.5, // Slightly reduced speed for better playability
    setPipes 
  });

  // Update high score when game ends
  useEffect(() => {
    if (gameOver && score > highScore) {
      const newHighScore = score;
      setHighScore(newHighScore);
      localStorage.setItem('flappy-dragon-high-score', newHighScore.toString());
    }
  }, [gameOver, score, highScore]);

  const restartGame = () => {
    setGameOver(false);
    setGameStarted(false);
    setScore(0);
    setDragonPos(gameDimensions.height / 2); // Center dragon vertically
    setDragonVelocity(0);
    setDragonRotation(0);
    setPipes([]);
    scoredPipesRef.current.clear();
  };

  const startGame = () => {
    setGameStarted(true);
    setDragonPos(gameDimensions.height / 2); // Center dragon when starting
  };

  return (
    <GameContainer onClick={handleJump}>
      <Background theme={currentTheme} gameDimensions={gameDimensions} />
      <Dragon 
        y={dragonPos} 
        rotation={dragonRotation} 
        isDead={gameOver} 
        gameDimensions={gameDimensions} 
      />
      {gameStarted && !gameOver && <ScoreDisplay score={score} />}
      <PipesRenderer pipes={pipes} gameDimensions={gameDimensions} />
      
      {!gameStarted && !gameOver && (
        <StartScreen onStart={startGame}>
          <ThemeToggle current={currentTheme} onChange={setCurrentTheme} />
        </StartScreen>
      )}
      
      {gameStarted && !gameOver && (
        <ThemeToggle current={currentTheme} onChange={setCurrentTheme} />
      )}
      
      {gameOver && (
        <GameOverModal
          score={score}
          highScore={highScore}
          onRestart={restartGame}
          onChangeTheme={setCurrentTheme}
        />
      )}
    </GameContainer>
  );
};

export default FlappyGame;