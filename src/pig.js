export function PigGame() {
  this.players = [];
  this.currentTurn = 0;
  this.currentScore = 0;
}

// PigGame.prototype.addPlayer = function (player) {
//   this.players.push(player);
// }

PigGame.prototype.randomNumber = function () {
  let roll = Math.floor(Math.random() * (6) + 1);
  return roll;
}

// PigGame.prototype.diceRoll = function () {
//   let roll = PigGame.prototype.randomNumber();
//   if (roll !== 1) {
//     this.currentScore += roll;
//   } else {
//     this.currentScore = 0;
//   }
// }

export function Player(userName) {
  this.userName = userName;
  this.totalScore = 0;
}