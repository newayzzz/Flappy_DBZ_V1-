import React from 'react';
import type { Dimensions } from '../types/game';
import { ThemeType } from './ThemeToggle';

// For this example, we'll use placeholder images from Pexels
const bgMap: Record<string, string> = {
  original: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  buu: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  squad: 'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  champion: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  dragons: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

interface BackgroundProps {
  theme: ThemeType;
  gameDimensions: Dimensions;
}

const Background: React.FC<BackgroundProps> = ({ theme, gameDimensions }) => (
  <div
    style={{ 
      width: gameDimensions.width, 
      height: gameDimensions.height, 
      position: 'absolute', 
      top: 0, 
      left: 0,
      backgroundImage: `url(${bgMap[theme]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.8)',
    }}
  />
);

export default Background;