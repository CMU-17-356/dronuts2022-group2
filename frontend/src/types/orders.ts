import { Order } from '../../database/schemas/order_schema';


export type OrderReducerAction = {
  name: 'add' | 'remove';
  order?: Order;
  removeInd?: number
}

const deepCopy = (x) =>{
  return JSON.parse(JSON.stringify(x));
};

export const orderReducer = (state: Order[], action: OrderReducerAction) => {
  const new_order: Order[] = deepCopy(state);
  switch (action.name) {
    case 'add':
      if (action.order) {
        new_order.push(action.order);
      } else {
        console.error('error in cartreducer add');
      }
      break;
    case 'remove':
      if (action.removeInd != null) {
        new_order.splice(action.removeInd, 1);
      } else {
        console.error('error in cartreducer remove');
      }
      break; // Return a empty cart.
    default: console.error('Invalid reduction');
  }
  return new_order;
};
