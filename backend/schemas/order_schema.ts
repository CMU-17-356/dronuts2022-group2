import mongoose, { Schema } from 'mongoose';
import { donutSchema } from './donut_schema';
import { userSchema } from './user_schema';

const orderSchema = new Schema({
  // User who placed order.
  user: { type: userSchema, required: true },
  // Total price of order.
  price: { type: Number, min: 0 },
  // List of donuts in the order.
  donuts: { type: [donutSchema] },
  // Address that order will be delivered to.
  destination: { type: String },
});

const Order = mongoose.model('Order', orderSchema);

export { orderSchema, Order };
