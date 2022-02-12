import { User, Donut, Drone, Order, Customer, Address } from './types'
import ChocoImage from './assets/chocolate_glaze.jpg'
import GlazedImage from './assets/original_glaze.jpg'

const drone_1 : Drone = {
  "id" : 1,
  "charge" : 98,
}

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

const donuts = [donut1, donut2]

const customer_1: Customer = {
  "username" : "ricksanchez",
  "password": "longrandomhash",
  "previous_orders": [
    donut1,
  ],
    "employee": false,
}

const employee_1 : User = {
  "username" : "rocksandcheeze",
  "password" : "jksdyf576uryxdmmx87q2",
  "employee": true,
}

const location_1: Address = {
    'street': "1337 Leet Palace",
    'city': "Hackerplace",
    'state': "Despair",
    'zip': "1337",
}

const order_1: Order = {
  "user" : customer_1,
  "price" : 2.08,
  "donuts" : [donut1, donut2],
  "quantities" : [1, 2],
  "destination": location_1,
}

export { donuts, order_1 }
