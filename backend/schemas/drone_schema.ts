import mongoose, { Schema } from 'mongoose';

const droneSchema = new Schema({
  id: { type: Number, required: true },
  charge: { type: Number, min: 0, max: 1}
});

const Drone = mongoose.model('Drone', droneSchema);

export { droneSchema, Drone };