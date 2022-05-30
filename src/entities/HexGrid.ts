import * as Phaser from 'phaser';
import Game from "../scenes/Game";

class HexGrid {
  constructor(scene: Game) {
    this.createGrid(scene);
  }

  static preload(scene) {

  }

  createGrid(scene) {
    const print = scene.add.text(0, 0, 'Click any tile');

    const staggeraxis = 'y';
    const staggerindex = 'odd';
    const board = scene.rexBoard.add.board({
      grid: {
        gridType: 'hexagonGrid',
        x: 60,
        y: 60,
        size: 30,
        staggeraxis: staggeraxis,
        staggerindex: staggerindex
      }
    })
      .setInteractive()
      .on('tiledown', function (pointer, tileXY) {
        print.text = `${tileXY.x},${tileXY.y}`;
      })

    const tileXYArray = board.fit(scene.rexBoard.hexagonMap.hexagon(board, 4));

    const graphics = scene.add.graphics({
      lineStyle: {
        width: 1,
        color: 0xffffff,
        alpha: 1
      }
    });
    let tileXY, worldXY;
    for (const i in tileXYArray) {
      tileXY = tileXYArray[i];
      graphics.strokePoints(board.getGridPoints(tileXY.x, tileXY.y, true), true);

      worldXY = board.tileXYToWorldXY(tileXY.x, tileXY.y);
      scene.add.text(worldXY.x, worldXY.y, `${tileXY.x},${tileXY.y}`).setOrigin(0.5);
    }
  }
}

export default HexGrid;


// const Random = Phaser.Math.Between;

// class Demo extends Phaser.Scene {
//   constructor() {
//     super({
//       key: 'examples'
//     })
//   }
//
//   preload() {}
//   create() {
//
//     }
//   }
//
//   update() { }
// }



// const game = new Phaser.Game(config);
