/* eslint-disable no-undef */
import Ship from "./ship";

test('test constructor', () => {
  let ship = Ship(4);
  expect(ship.getLength()).toBe(4);
  expect(ship.isSunk()).toBe(false);
})

test('sink ship', () => {
  let ship = Ship(4);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
})

test('hit but not sink ship', () => {
  let ship = Ship(4);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
})