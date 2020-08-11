import 'phaser';

export default class SubmitScoreScene extends Phaser.Scene {
  constructor() {
    super('SubmitScore');
    this.gameID = 'XvzuCsLaKcfVjcUVkcOf';
  }

  create() {
    this.add.text(10, 10, 'Submit your score', { fontSize: '36px', fill: '#fff' });
    this.game = this.sys.game;
    const formElement = this.add.dom(400, 300).createFromCache('scoreForm');
    const submitButton = formElement.getChildByID('submit-score-button');
    submitButton.addEventListener('click', this.submitScore.bind(this));
  }

  submitScore(event) {
    event.preventDefault();
    event.currentTarget.disabled = true;
    const user = document.getElementById('name').value;
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores/`, {
      method: 'post',
      body: JSON.stringify({
        user,
        score: localStorage.getItem('score'),
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.scene.start('Score');
      });
  }
}