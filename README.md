# 🐉 Flappy Dragon

A modern, responsive Flappy Bird clone built with React, TypeScript, and Tailwind CSS. Guide your dragon through obstacles while collecting points and unlocking different themed backgrounds.

## ✨ Features

- **Smooth Gameplay**: 60fps game loop with physics-based movement
- **Multiple Themes**: 5 different background themes to unlock
- **Responsive Design**: Works on desktop and mobile devices
- **Touch & Keyboard Controls**: Space bar, arrow keys, or tap to play
- **Score Tracking**: Local high score persistence
- **Visual Effects**: Dragon fire animations and smooth transitions
- **Modern UI**: Clean, polished interface with hover effects

## 🎮 How to Play

1. Click "Start Game" or press any key to begin
2. Press **Space**, **Arrow Up**, or **Tap** to make the dragon jump
3. Avoid hitting the pipes or the ground/ceiling
4. Score points by passing through pipe gaps
5. Try different themes using the settings button
6. Beat your high score!

## 🚀 Live Demo

Play the game live at: [https://marvelous-sundae-87c6d6.netlify.app](https://marvelous-sundae-87c6d6.netlify.app)

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flappy-dragon.git
cd flappy-dragon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Background.tsx    # Game background renderer
│   ├── Dragon.tsx        # Dragon character with animations
│   ├── FlappyGame.tsx    # Main game component
│   ├── GameContainer.tsx # Game viewport container
│   ├── GameOverModal.tsx # Game over screen
│   ├── Pipe.tsx          # Individual pipe component
│   ├── PipesRenderer.tsx # Pipes collection renderer
│   ├── ScoreDisplay.tsx  # Score UI component
│   ├── StartScreen.tsx   # Game start screen
│   └── ThemeToggle.tsx   # Theme switching component
├── hooks/                # Custom React hooks
│   ├── useGameControls.ts # Keyboard/touch input handling
│   ├── useGameLoop.ts     # Main game physics loop
│   └── usePipeSpawner.ts  # Pipe generation and movement
├── types/                # TypeScript type definitions
│   └── game.ts           # Game-related interfaces
├── App.tsx               # Root application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and animations
```

## 🎨 Themes

The game includes 5 different themes:
- **Original** - Classic sky background
- **Buu** - Mystical atmosphere
- **Squad** - Urban environment
- **Champion** - Victory theme
- **Dragons** - Premium galactic dragon realm

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Game Mechanics

- **Gravity**: Constant downward force on the dragon
- **Jump Physics**: Upward velocity applied on user input
- **Collision Detection**: Precise boundary checking for pipes and screen edges
- **Score System**: Points awarded for successfully passing through pipe gaps
- **Difficulty**: Consistent pipe spacing with randomized heights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the original Flappy Bird game
- Background images from [Pexels](https://pexels.com)
- Icons from [Lucide React](https://lucide.dev)

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Power-ups and special abilities
- [ ] Multiplayer support
- [ ] Sound effects and background music
- [ ] Particle effects
- [ ] Leaderboard system
- [ ] Achievement system

---

Made with ❤️ and React