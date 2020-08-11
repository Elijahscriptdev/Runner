import 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(300, 300, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.openGameText = this.add.text(300, 340, 'opengameart.org', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.microverseText = this.add.text(300, 370, 'Microverse Inc.', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.madeByText = this.add.text(300, 100, 'Created By:', {
      fontSize: '26px',
      fill: '#fff',
    });

    this.madeByText = this.add.text(300, 140, 'Elijah Obominuru', {
      fontSize: '26px',
      fill: '#fff',
    });


    this.titleButton = new Button(this, config.width / 2, 500, 'blueButton1', 'blueButton2', 'Back', 'Title');
    this.titleButton.on(
      'pointerdown',
      () => {
        this.scene.start('Title');
      },
    );
  }
}