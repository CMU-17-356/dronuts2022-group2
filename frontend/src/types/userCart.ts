import { Donut } from "../../database/schemas/donut_schema"


export interface UserCart {
  "donuts": Donut[], // List of ordered doughnuts
  "quantities": number[], // Parallel list to doughnuts with the number of doughnuts being bought.
}

export type CartReducerAction = {
  name: 'set' | 'clear';
  donut?: Donut;
  quantity?: number
}

const deepCopy = (x) =>{
  return JSON.parse(JSON.stringify(x));
}

export const cartReducer = (state: UserCart, action: CartReducerAction) => {
  const new_cart: UserCart = {"donuts":[], "quantities":[]}
  switch (action.name) {
    case "set":
      if (action.quantity === undefined || action.donut === undefined) {
        console.error("Invalid reducer call, no quantity/donut name specified");
        break;
      }
      let found = false;
      for (let i = 0; i < state.donuts.length; i++) {
        new_cart.donuts.push(deepCopy(state.donuts[i]));
        new_cart.quantities.push(state.quantities[i]);
        if (!found && state.donuts[i].name === action.donut.name) {
          found = true;
          if (action.quantity === 0) { // don't add to cart if quantity is 0
            new_cart.donuts.pop();
            new_cart.quantities.pop();
          } else {
            new_cart.quantities[i] = action.quantity;
          }
        }
      }
      // Add to cart
      if (!found && action.quantity > 0) {
        new_cart.donuts.push(deepCopy(action.donut))
        new_cart.quantities.push(action.quantity)
      }
      break;
    case "clear":
      break; // Return a empty cart.
    default: console.error("Invalid reduction")
  }

  return new_cart
}
