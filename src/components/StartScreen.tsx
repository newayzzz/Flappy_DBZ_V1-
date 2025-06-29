import React, { ReactNode } from 'react';

interface StartScreenProps {
  onStart: () => void;
  children?: ReactNode;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, children }) => (
  <div className="start-screen absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-20">
    <h1 className="text-4xl font-bold text-white mb-8">Flappy Dragon</h1>
    <button 
      onClick={onStart} 
      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg mb-4 transition-colors duration-200 transform hover:scale-105"
    >
      Start Game
    </button>
    <p className="text-white mb-6">Press space or tap to jump</p>
    {children}
  </div>
);

export default StartScreen;