import mongoose, { Schema } from 'mongoose';

const donutSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0 },
  description: { type: String },
});

const Donut = mongoose.model('Donut', donutSchema);

export { donutSchema, Donut };
