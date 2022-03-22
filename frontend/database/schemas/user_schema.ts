import mongoose, { Schema } from 'mongoose';
import { Donut, donutSchema } from './donut_schema';

export interface User {
  'username' : string, // Unique
  'password' : string, // Hashed password
  'employee': boolean, // boolean for whether user is an employee
  // list of previous orders
  'previous_orders': Donut[],
}

const userSchema = new Schema<User>({
  // Unique username
  username: { type: String, required: true },
  // Hashed password
  password: { type: String, required: true },
  employee: { type: Boolean, required: true },
  previous_orders: { type: [donutSchema] },
});

const UserModel = mongoose.model<User>('User', userSchema);

export { userSchema, UserModel };
