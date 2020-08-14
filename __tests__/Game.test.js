// import SubmitScoreScene from '../src/Scenes/SubmitScoreScene'
import Game from '../src/Objects/Game';
import config from '../src/config/config';

let game;

beforeAll(() => {
  game = new Game(config);
});

test('Expect score to be 0 when start the game', () => {
  expect(game.globals.score).toEqual(0);
});

test('Expect sound to be enable when the game start', () => {
  expect(game.globals.model.soundOn).toBe(true);
});

test('Expect sound to be enable when the game start', () => {
  expect(game.globals.model.soundOn).toBe(true);
});

test('Expect music to be enable when the game start', () => {
  expect(game.globals.model.musicOn).toBe(true);
});