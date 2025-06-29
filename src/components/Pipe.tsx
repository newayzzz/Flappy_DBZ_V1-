import React from 'react';
import type { Pipe as PipeType } from '../types/game';

interface PipeProps extends PipeType {
  gap: number;
  width: number;
  height: number;
}

const Pipe: React.FC<PipeProps> = ({ x, topHeight, gap, width, height }) => (
  <>
    <div
      style={{
        position: 'absolute',
        left: x,
        top: 0,
        width,
        height: topHeight,
        backgroundColor: '#4ade80', // Green color
        borderRadius: '0 0 8px 8px',
        borderLeft: '5px solid #16a34a',
        borderRight: '5px solid #16a34a',
        borderBottom: '5px solid #16a34a',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: x,
        top: topHeight + gap,
        width,
        height: height - (topHeight + gap),
        backgroundColor: '#4ade80', // Green color
        borderRadius: '8px 8px 0 0',
        borderLeft: '5px solid #16a34a',
        borderRight: '5px solid #16a34a',
        borderTop: '5px solid #16a34a',
      }}
    />
  </>
);

export default Pipe;