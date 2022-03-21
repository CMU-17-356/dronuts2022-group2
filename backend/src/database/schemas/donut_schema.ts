import mongoose, { Schema } from 'mongoose';

export interface Donut {
  "name" : string, // Unique doughnut name
  "price" : number, // Price in donutbucks (or whatever the world uses these days)
  "description": string, // Longer description of doughnut
  "imageurl": string, // Path to an image of the donut
}

const donutSchema = new Schema<Donut>({
  name: { type: String, required: true },
  price: { type: Number, min: 0 },
  description: { type: String },
  imageurl: {type: String }
});
const DonutModel = mongoose.model<Donut>('Donut', donutSchema);

export { donutSchema, DonutModel };
