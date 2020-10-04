import { Scene } from 'phaser';

class Splash extends Scene {
  constructor() {
    super({
      key: 'Splash',
    });
  }

  update(time: number, delta: number) {
    super.update(time, delta);
  }

  create() {
    this.add.text(this.scale.width / 2, this.scale.height / 2, 'Play Game!', { fill: '#0f0', align: 'center' })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('FlappyGame');
      });
  }
}

export default Splash;
