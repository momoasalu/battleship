import Ship from "./ship";

function GameBoard(width, height) {
  const board = new Array(height).fill(null);
  for (let index = 0; index < board.length; index++) {
    board[index] = new Array(width).fill(null);
  }
  const ships = [];

  const placeShip = (length, isVertical, row, col) => {
    if (!isVertical && (0 <= col) && (col + length <= width) && (0 <= row && row < height)) {
      const ship = Ship(length);
      for (let i =  0; i < length; i++) {
        if (board[row][col + i] !== null) {
          return false;
        }
      }
      for (let i =  0; i < length; i++) {
        board[row][col + i] = ship;
      }
      ships.push(ship);
      return true;
    } else if (isVertical && (0 <= row) && (row + length <= height) && (0 <= col && col < width)) {
      const ship = Ship(length);
      for (let i =  0; i < length; i++) {
        if (board[row + i][col] !== null) {
          return false;
        }
      }
      for (let i =  0; i < length; i++) {
        board[row + i][col] = ship;
      }
      ships.push(ship);
      return true;
    }
    return false;
  };

  const receiveAttack = (row, col) => {
    if (board[row][col] !== 'x' && board[row][col] !== 'm') {
      if (board[row][col] !== null) {
        board[row][col].hit();
        board[row][col] = 'x';
      } else {
        board[row][col] = 'm';
      }
      return true;
    }
    return false;
  }

  const allSunk = () => {
    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    } return true;
  }

  return {board, placeShip, receiveAttack, allSunk}
}

export default GameBoard;