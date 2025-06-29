import React from 'react';
import Pipe from './Pipe';
import type { Pipe as PipeType, Dimensions } from '../types/game';

interface PipesRendererProps {
  pipes: PipeType[];
  gameDimensions: Dimensions;
}

export const PipesRenderer: React.FC<PipesRendererProps> = ({ pipes, gameDimensions }) => (
  <>
    {pipes.map((pipe) => (
      <Pipe
        key={pipe.id}
        id={pipe.id}
        x={pipe.x}
        topHeight={pipe.topHeight}
        gap={150}
        width={50}
        height={gameDimensions.height}
      />
    ))}
  </>
);