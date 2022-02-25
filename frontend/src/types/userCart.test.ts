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
  let cart: UserCart = { 'donut_orders': []}
  let cart2 = cartReducer(cart, {'name': 'set', 'donut':donut1, quantity:10})
  expect(cart2).toStrictEqual({
    'donut_orders': [{ 'donut': donut1, 'quantity': 10 }],
  });
  expect(cart).not.toBe(cart2)
});

test('Can update a non empty cart', () => {
  let cart: UserCart = { 'donut_orders': [{'donut': donut1, 'quantity': 5},{'donut': donut2, 'quantity': 3}] }
  let cart2 = cartReducer(cart, {'name': 'set', 'donut':donut1, quantity:1})
  expect(cart2).toStrictEqual({
    'donut_orders': [{ 'donut': donut1, 'quantity': 1 }, { 'donut': donut2, 'quantity': 3 }],
  });
  expect(cart).not.toBe(cart2)
});

test('Can delete from a non empty cart', () => {
  let cart: UserCart = { 'donut_orders': [{'donut': donut1, 'quantity': 5},{'donut': donut2, 'quantity': 3}] }
  let cart2 = cartReducer(cart, {'name': 'set', 'donut':donut1, quantity:0})
  expect(cart2).toStrictEqual({
    'donut_orders': [{ 'donut': donut2, 'quantity': 3 }],
  });
  expect(cart).not.toBe(cart2)
});

test('Can clear a non empty cart', () => {
  let cart: UserCart = { 'donut_orders': [{'donut': donut1, 'quantity': 5},{'donut': donut2, 'quantity': 3}] }
  let cart2 = cartReducer(cart, {'name': 'clear'})
  expect(cart2).toStrictEqual({
    'donut_orders': [],
  });
  expect(cart).not.toBe(cart2)
});
