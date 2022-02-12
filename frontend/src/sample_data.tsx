import { Donut, Order, Customer, Address } from './types'
import ChocoImage from './assets/chocolate_glaze.jpg'
import VFImage from './assets/vanilla_frosted.jpg'

// const drone_1 : Drone = {
//   "id" : 1,
//   "charge" : 98,
// }

const doughnut_1 : Donut = {
  "name" : "Chocolate",
  "price" : 1.99,
  "description": "A nice big chocolate torus.",
  "imageurl": ChocoImage,
}

const doughnut_2: Donut = {
  "name" : "Vanilla Frosted",
  "price" : 1.99,
  "description" : "A large, frosted vanilla torus.",
  "imageurl": VFImage,
}

const customer_1: Customer = {
  "username" : "ricksanchez",
  "password": "longrandomhash",
  "previous_orders": [
    doughnut_1,
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
  "user" : customer_1,
  "price" : 2.08,
  "donuts" : [doughnut_1, doughnut_2],
  "quantities" : [1, 2],
  "destination": location_1,
}

const order_2: Order = {
  "user" : customer_1,
  "price" : 2.08,
  "donuts" : [doughnut_1, doughnut_2],
  "quantities" : [1, 2],
  "destination": location_1,
}

export { order_1, order_2 }
