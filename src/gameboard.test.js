/* eslint-disable no-undef */
import GameBoard from "./gameboard";

test("test new gameboard", () => {
  expect(GameBoard(1, 1).board).toEqual([[null]]);
  expect(GameBoard(2, 1).board).toEqual([[null, null]]);
  expect(GameBoard(1, 2).board).toEqual([[null], [null]]);
  expect(GameBoard(2, 2).board).toEqual([[null, null], [null, null]]);
})

test("test place ship", () => {
  const gameBoard = GameBoard(1, 2);
  expect(gameBoard.board).toEqual([[null], [null]]);
  expect(gameBoard.placeShip(2, true, 1, 0)).toBe(false);
  expect(gameBoard.placeShip(2, true, 0, 0)).toBe(true);
  expect(gameBoard.placeShip(2, true, 0, 0)).toBe(false);
})

test("test place ship", () => {
  const gameBoard = GameBoard(2, 2);
  expect(gameBoard.board).toEqual([[null, null], [null, null]]);
  expect(gameBoard.placeShip(2, true, 0, 1)).toBe(true);
  expect(gameBoard.placeShip(2, true, 0, 0)).toBe(true);
})

test("test attack ships", () => {
  const gameBoard = GameBoard(5, 5);
  expect(gameBoard.placeShip(1, false, 1, 0)).toBe(true);
  expect(gameBoard.placeShip(1, true, 0, 0)).toBe(true);
  expect(gameBoard.receiveAttack(0, 0)).toBe(true);
  expect(gameBoard.receiveAttack(0, 0)).toBe(false);
  expect(gameBoard.receiveAttack(0, 1)).toBe(true);
  expect(gameBoard.allSunk()).toBe(false);
  expect(gameBoard.receiveAttack(1, 0)).toBe(true);
  expect(gameBoard.allSunk()).toBe(true);
  
})