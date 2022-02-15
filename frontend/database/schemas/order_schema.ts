import mongoose, { Schema } from 'mongoose';
import { Donut, donutSchema } from './donut_schema';
import { User, userSchema } from './user_schema';
import { Address, } from './address_schema';


export interface Order {
  "user" : User, // User
  "price" : number, // Price of all donuts, ±tax.
  "donuts": Donut[], // List of ordered doughnuts
  "quantities": number[], // Parallel list to doughnuts with the number of doughnuts being bought.
  "destination": Address, // Location that the order is being sent to.
}

const orderSchema = new Schema<Order>({
  // User who placed order.
  user: { type: userSchema, required: true },
  // Total price of order.
  price: { type: Number, min: 0 },
  donuts: { type: [donutSchema], required:true },
  quantities: { type: [Number], required:true },
  // Address that order will be delivered to.
  destination: { type: String },
});

const OrderModel = mongoose.model<Order>('Order', orderSchema);

export { orderSchema, OrderModel };
