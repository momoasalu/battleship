/* eslint-disable no-undef */
import { Player } from "./player";
import GameBoard from "./gameboard";

test('test gameplay', () => {
  const board = GameBoard(3, 3);
  board.placeShip(2, false, 0, 0);
  board.placeShip(1, false, 2, 2);

  const player = Player('momo');
  expect(player.attack(board, 0, 0)).toBe(true);
})