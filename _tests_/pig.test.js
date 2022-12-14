import PigGame from "../src/pig";

describe('PigGame', () => {

  test('It should create a pigGame object with a player property', () => {
    const game = new PigGame();
    expect(game.players).toEqual([])
  });

  test('It should return a random number between 1 and 6', () => {
    let number = PigGame.prototype.diceRoll();
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(6);
  })

})