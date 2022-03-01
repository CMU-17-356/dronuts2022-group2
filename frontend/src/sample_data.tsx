import { Order } from '../database/schemas/order_schema'
import { Donut } from '../database/schemas/donut_schema'
import { Drone } from '../database/schemas/drone_schema'
import { Address } from '../database/schemas/address_schema'
import { User } from  '../database/schemas/user_schema'
import ChocoImage from './assets/chocolate_glaze.jpg'
import GlazedImage from './assets/original_glaze.jpg'
import VFImage from './assets/vanilla_frosted.jpg'

const drone1 : Drone = {
  "id" : 1,
  "charge" : 98,
  "destinations" : [
    "4500 Centre Ave",
    "1000 Morewood Ave"
  ]
}

const drone2 : Drone = {
  "id" : 2,
  "charge" : 42,
  "destinations" : [
    "5000 Forbes Ave",
  ]
}

const dronesData = [drone1, drone2]

const donut1 : Donut = {
  "name" : "Chocolate Glaze",
  "price" : 1.99,
  "description": "A nice big chocolate torus.",
  "imageurl": ChocoImage,
}

const donut2: Donut = {
  "name" : "Original Glaze",
  "price" : 1.99,
  "description" : "A nice big glazed torus.",
  "imageurl": GlazedImage,
}

const donut3: Donut = {
  "name" : "Vanilla Frosted",
  "price" : 1.99,
  "description" : "A large, frosted vanilla torus.",
  "imageurl": VFImage,
}

const donuts = [donut1, donut2, donut3]

const customer_1: User = {
  "username" : "ricksanchez",
  "password": "longrandomhash",
  "previous_orders": [
    donut1,
  ],
    "employee": false,
}

// const employee_1 : User = {
//   "username" : "rocksandcheeze",
//   "password" : "jksdyf576uryxdmmx87q2",
//   "employee": true,
// }

const location_1: Address = {
    'street': "1337 Leet Palace",
    'city': "Hackerplace",
    'state': "Despair",
    'zip': "1337",
}

const order_1: Order = {
  "order_id" : 1,
  "user" : customer_1,
  "price" : 2.08,
  "donuts" : [donut1, donut2],
  "quantities" : [1, 2],
  "destination": location_1,
}

const order_2: Order = {
  "order_id" : 2,
  "user" : customer_1,
  "price" : 2.08,
  "donuts" : [donut1, donut2],
  "quantities" : [1, 2],
  "destination": location_1,
}

export { donuts, order_1, order_2, dronesData, customer_1}
