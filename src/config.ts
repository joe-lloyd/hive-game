import * as Phaser from 'phaser';
import Game from './scenes/Game';
import Splash from './scenes/Splash';
import GameOver from './scenes/GameOver';
import rexBoardPlugin from 'phaser3-rex-plugins/plugins/board-plugin.js';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.RESIZE,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: process.env.DEBUGMODE === 'true',
    },
  },
  scene: [
    Splash,
    Game,
    GameOver
  ],
  plugins: {
    scene: [{
      key: 'Game',
      plugin: rexBoardPlugin,
      mapping: 'rexBoard'
    }]
  }
};

export default config;
