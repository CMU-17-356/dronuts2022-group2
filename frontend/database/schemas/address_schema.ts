import mongoose, { Schema } from 'mongoose';


export interface Address {
  'street': string,
  'city': string,
  'state': string,
  'zip': string,
}

const addressSchema = new Schema<Address>({
  street: {type: String, required: true },
  city: {type: String },
  state: {type: String },
  zip: {type: String },
});

const AddressModel = mongoose.model<Address>('Order', addressSchema);

export { addressSchema, AddressModel};
