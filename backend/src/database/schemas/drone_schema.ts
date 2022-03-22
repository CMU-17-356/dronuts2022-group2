import mongoose, { Schema } from 'mongoose';


export interface Drone {
  "id" : number, // Unique drone ID
  "charge" : number, // Remaining charge % [0,100]
  "destinations": string[] // Drone's current route
}

const droneSchema = new Schema<Drone>({
  id: { type: Number, required: true },
  charge: { type: Number, min: 0, max: 1 },
  destinations: { type: [String]},
});

const DroneModel = mongoose.model<Drone>('Drone', droneSchema);

export { droneSchema, DroneModel };
