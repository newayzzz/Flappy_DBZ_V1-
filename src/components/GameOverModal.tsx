import React from 'react';
import { RefreshCw, Palette } from 'lucide-react';
import { ThemeType, THEMES } from './ThemeToggle';

interface GameOverModalProps {
  score: number;
  highScore: number;
  onRestart: () => void;
  onChangeTheme: (theme: ThemeType) => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ score, highScore, onRestart, onChangeTheme }) => {
  const randomTheme = () => {
    const index = Math.floor(Math.random() * THEMES.length);
    return THEMES[index];
  };
  
  return (
    <div className="game-over-modal absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white z-30">
      <h1 className="text-4xl font-bold mb-4">Game Over</h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-6 w-64 text-center">
        <p className="text-xl mb-2">Score: <span className="font-bold text-2xl">{score}</span></p>
        <p className="text-xl">High Score: <span className="font-bold text-2xl">{highScore}</span></p>
      </div>
      <div className="flex space-x-4">
        <button 
          onClick={onRestart} 
          className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
        >
          <RefreshCw size={18} className="mr-2" />
          Play Again
        </button>
        <button 
          onClick={() => onChangeTheme(randomTheme())} 
          className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200"
        >
          <Palette size={18} className="mr-2" />
          Random Theme
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;