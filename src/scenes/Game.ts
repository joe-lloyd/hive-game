import { Scene } from 'phaser';
import HexGrid from '../entities/HexGrid';
import TokenController from '../entities/Token';

class Game extends Scene {
  HexGrid: HexGrid;
  TokenController: TokenController;

  constructor() {
    super({
      key: 'Game',
    });
  }

  preload(): void {

  }

  create(): void {
    this.HexGrid = new HexGrid(this);
    this.TokenController = new TokenController(this);
  }

  update(): void {

  }
}

export default Game;
