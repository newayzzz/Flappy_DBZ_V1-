import React from 'react';
import { Settings } from 'lucide-react';

// Simple toast notification system
const toast = (opts: { title: string; description: string; duration: number }) => {
  const toastEl = document.createElement('div');
  toastEl.className = 'fixed top-4 right-4 bg-black bg-opacity-75 text-white rounded-lg p-4 z-50 animate-fade-in-out';
  toastEl.innerHTML = `
    <h3 class="font-bold">${opts.title}</h3>
    <p>${opts.description}</p>
  `;
  document.body.appendChild(toastEl);
  setTimeout(() => {
    toastEl.classList.add('animate-fade-out');
    setTimeout(() => {
      if (document.body.contains(toastEl)) {
        document.body.removeChild(toastEl);
      }
    }, 500);
  }, opts.duration);
};

export const THEMES = ['original', 'buu', 'squad', 'champion', 'dragons'] as const;
export type ThemeType = typeof THEMES[number];

interface ThemeToggleProps {
  current: ThemeType;
  onChange: (next: ThemeType) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ current, onChange }) => {
  const nextIndex = (THEMES.indexOf(current) + 1) % THEMES.length;
  const nextTheme = THEMES[nextIndex];
  
  const handleClick = () => {
    onChange(nextTheme);
    if (nextTheme === 'dragons') {
      toast({ 
        title: 'Premium Scene', 
        description: 'Galactic dragon realm unlocked!', 
        duration: 3000 
      });
    }
  };
  
  return (
    <button 
      onClick={handleClick} 
      className="absolute top-4 right-4 z-10 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      aria-label="Change Theme"
      title={`Switch to ${nextTheme} theme`}
    >
      <Settings size={20} />
    </button>
  );
};