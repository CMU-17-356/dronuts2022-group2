import { Donut } from '../../database/schemas/donut_schema';


export interface DonutOrder{
  donut: Donut,
  quantity: number,
}

export interface UserCart {
  'donut_orders': DonutOrder[],
}

export type CartReducerAction = {
  name: 'set' | 'clear';
  donut?: Donut;
  quantity?: number
}

const deepCopy = (x) =>{
  return JSON.parse(JSON.stringify(x));
};

export const cartReducer = (state: UserCart, action: CartReducerAction) => {
  const new_cart: UserCart = { 'donut_orders': [] };
  switch (action.name) {
    case 'set':
      if (action.quantity === undefined || action.donut === undefined) {
        console.error('Invalid reducer call, no quantity/donut name specified');
        break;
      }
      let found = false;
      for (let i = 0; i < state.donut_orders.length; i++) {
        new_cart.donut_orders.push(deepCopy(state.donut_orders[i]));
        if (!found && state.donut_orders[i].donut.name === action.donut.name) {
          found = true;
          if (action.quantity === 0) { // don't add to cart if quantity is 0
            new_cart.donut_orders.pop();
          } else {
            new_cart.donut_orders[i].quantity = action.quantity;
          }
        }
      }
      // Add to cart
      if (!found && action.quantity > 0) {
        new_cart.donut_orders.push({ 'donut': deepCopy(action.donut), 'quantity': action.quantity });
      }
      break;
    case 'clear':
      break; // Return a empty cart.
    default: console.error('Invalid reduction');
  }

  return new_cart;
};
