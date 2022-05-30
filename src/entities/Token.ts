import * as Phaser from 'phaser';
import Game from "../scenes/Game";
import Hexagon from 'phaser3-rex-plugins/plugins/hexagon.js';

class TokenController {
  token: Hexagon;

  constructor(scene: Game) {
    const hex = new Hexagon(50, 50, 50, 0)
    scene.add.rectangle(100,100,50,50, 999);
    // this.token = new Token(scene);
    // scene.add.polygon(10,10,5,999);
    // scene.add.existing(this.token);
  }
}

// class Token extends Hexagon {
//   token: Hexagon;
//
//   constructor(scene: Game) {
//     //x, y, size, orientationType
//     super(scene, 0, 0, 'play-mat');
//     this.buildToken(scene);
//   }
//
//   static preload(scene) {
//
//   }
//
//   buildToken(scene) {
//     console.log('buildToken');
//     const hexagon = new Hexagon(0, 0, 10, 'flat');
//     console.log('pre');
//     scene.plugins.get('rexHexagon').add(30, 30, 30, 'pointy')
//     // scene.add.exsisting(this.token);
//   }
// }

export default TokenController;
export { Token };
