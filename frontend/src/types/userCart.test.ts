import { Donut } from "../../database/schemas/donut_schema";
import { cartReducer, UserCart } from "./userCart";

const donut1 : Donut = {
  "name" : "A",
  "price" : 1,
  "description": "a",
  "imageurl": "b",
}
const donut2 : Donut = {
  "name" : "B",
  "price" : 2,
  "description": "c",
  "imageurl": "d",
}

test('Can append to an empty cart', () => {
  let cart: UserCart = { 'donuts': [], 'quantities': [] }
  let cart2 = cartReducer(cart, {'name': 'set', 'donut':donut1, quantity:10})
  expect(cart2).toStrictEqual({
    'donuts': [donut1],
    'quantities': [10],
  });
  expect(cart).not.toBe(cart2)
});

test('Can update a non empty cart', () => {
  let cart: UserCart = { 'donuts': [donut1, donut2], 'quantities': [5, 3] }
  let cart2 = cartReducer(cart, {'name': 'set', 'donut':donut1, quantity:1})
  expect(cart2).toStrictEqual({
    'donuts': [donut1, donut2],
    'quantities': [1, 3],
  });
  expect(cart).not.toBe(cart2)
});

test('Can delete from a non empty cart', () => {
  let cart: UserCart = { 'donuts': [donut1, donut2], 'quantities': [5, 3] }
  let cart2 = cartReducer(cart, {'name': 'set', 'donut':donut1, quantity:0})
  expect(cart2).toStrictEqual({
    'donuts': [donut2],
    'quantities': [3],
  });
  expect(cart).not.toBe(cart2)
});

test('Can clear a non empty cart', () => {
  let cart: UserCart = { 'donuts': [donut1, donut2], 'quantities': [5, 3] }
  let cart2 = cartReducer(cart, {'name': 'clear'})
  expect(cart2).toStrictEqual({
    'donuts': [],
    'quantities': [],
  });
  expect(cart).not.toBe(cart2)
});
