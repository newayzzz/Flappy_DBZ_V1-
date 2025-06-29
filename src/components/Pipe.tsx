import React from 'react';
import type { Pipe as PipeType } from '../types/game';

interface PipeProps extends PipeType {
  gap: number;
  width: number;
  height: number;
}

const Pipe: React.FC<PipeProps> = ({ x, topHeight, gap, width, height }) => (
  <>
    {/* Top pipe */}
    <div
      style={{
        position: 'absolute',
        left: x,
        top: 0,
        width,
        height: topHeight,
        background: 'linear-gradient(to right, #22c55e, #16a34a)',
        borderRadius: '0 0 8px 8px',
        border: '3px solid #15803d',
        borderTop: 'none',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }}
    />
    {/* Top pipe cap */}
    <div
      style={{
        position: 'absolute',
        left: x - 5,
        top: topHeight - 25,
        width: width + 10,
        height: 25,
        background: 'linear-gradient(to right, #22c55e, #16a34a)',
        borderRadius: '4px',
        border: '3px solid #15803d',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }}
    />
    
    {/* Bottom pipe */}
    <div
      style={{
        position: 'absolute',
        left: x,
        top: topHeight + gap,
        width,
        height: height - (topHeight + gap),
        background: 'linear-gradient(to right, #22c55e, #16a34a)',
        borderRadius: '8px 8px 0 0',
        border: '3px solid #15803d',
        borderBottom: 'none',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }}
    />
    {/* Bottom pipe cap */}
    <div
      style={{
        position: 'absolute',
        left: x - 5,
        top: topHeight + gap,
        width: width + 10,
        height: 25,
        background: 'linear-gradient(to right, #22c55e, #16a34a)',
        borderRadius: '4px',
        border: '3px solid #15803d',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }}
    />
  </>
);

export default Pipe;