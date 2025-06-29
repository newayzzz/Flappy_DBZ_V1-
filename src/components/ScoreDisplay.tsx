import React from 'react';

interface ScoreDisplayProps {
  score: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => (
  <div className="absolute top-4 left-0 right-0 text-center z-10">
    <div className="text-4xl font-bold text-white drop-shadow-lg">{score}</div>
  </div>
);