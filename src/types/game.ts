export interface Dimensions {
  width: number;
  height: number;
}

export interface Pipe {
  id: string;
  x: number;
  topHeight: number;
}

export interface DragonState {
  y: number;
  velocity: number;
  rotation: number;
}

export interface GameState {
  started: boolean;
  over: boolean;
  score: number;
  highScore: number;
}

export interface GamePhysics {
  gravity: number;
  jumpStrength: number;
  dragonRadius: number;
  pipeWidth: number;
  pipeGap: number;
}