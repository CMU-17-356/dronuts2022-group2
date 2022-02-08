import mongoose, { Schema } from 'mongoose';
import { donutSchema } from './donut_schema';

const userSchema = new Schema({
  // Unique username
  username: { type: String, required: true },
  // Hashed password
  password: { type: String, required: true },
  full_name: { type: String },
  // Lists of previous donuts they've ordered.
  previous_orders: { type: [donutSchema] },
  employee: { type: Boolean }
});

const User = mongoose.model('User', userSchema);

export { userSchema, User };