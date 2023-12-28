function Player(name) {
  const attack = (gameboard, row, col) => {
    return gameboard.receiveAttack(row, col);
  }
  return {name, attack}
}

function ComputerPlayer() {
  const player = Player("computer");
  const attack = (gameboard) => {
    let row = Math.floor(Math.random() * gameboard.board.length);
    let col = Math.floor(Math.random() * gameboard.board[0].length);
    let hasAttacked = player.attack(gameboard, row, col);
    while (!hasAttacked) {
      row = Math.floor(Math.random() * gameboard.board.length);
      col = Math.floor(Math.random() * gameboard.board[0].length);
      hasAttacked = player.attack(gameboard, row, col);
    };
  }
  return {name: player.name, attack: attack}
}

export {Player, ComputerPlayer};