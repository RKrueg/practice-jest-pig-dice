import {PigGame, Player} from "../src/pig";

describe('PigGame', () => {

  test('It should create a pigGame object with a player property', () => {
    const game = new PigGame();
    expect(game.players).toEqual([])
  });

  test('It should return a random number between 1 and 6', () => {
    let number = PigGame.prototype.randomNumber();
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(6);
  })

  test('It should change currentScore to 0 if a 1 is rolled', () => {
    let game = new PigGame(0, 8);
    game.diceRoll();
    expect(game.currentScore).toEqual(0);
  })

})

describe('Player', () => {

test('It should create a Player object with userName and totalScore', () => {
  let player1 = new Player("bob",0);
  expect(player1.userName).toEqual('bob');
  expect(player1.totalScore).toEqual(0)
})
})
