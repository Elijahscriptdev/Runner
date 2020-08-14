import Phaser from 'phaser';
import config from '../config/config';
import GameScene from '../Scenes/GameScene';
import BootScene from '../Scenes/BootScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import TitleScene from '../Scenes/TitleScene';
import OptionsScene from '../Scenes/OptionsScene';
import CreditsScene from '../Scenes/CreditsScene';
import SubmitScoreScene from '../Scenes/SubmitScoreScene';
import ScoreScene from '../Scenes/ScoreScene';
import Model from '../Model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null, score: 0 };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('SubmitScore', SubmitScoreScene);
    this.scene.add('Score', ScoreScene);
    this.scene.start('Boot');
  }
}


export default Game;