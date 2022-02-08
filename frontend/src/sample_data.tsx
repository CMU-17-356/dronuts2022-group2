import { User, Doughnut, Drone, Order, Customer, Address } from './types'
import ChocoImage from './assets/chocolate_glaze'
const drone_1 : Drone = {
  "id" : 1, 
  "charge" : 98, 
}

const doughnut_1 : Doughnut = {
  "name" : "Chocolate",
  "price" : 1.99,
  "description": "A nice big chocolate torus.",
  "imageurl": ChocoImage,
}

const doughnut_2: Doughnut = {
  "name" : "Vanilla",
  "price" : 1.99,
  "description" : "A nice big vanilla torus.",
  "imageurl": ChocoImage,
}

const customer_1: Customer = {
  "username" : "ricksanchez",
  "password": "longrandomhash",
  "previous_orders": [
    doughnut_1,
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
  "doughnuts" : [doughnut_1, doughnut_2],
  "quantities" : [1, 2],
  "destination": location_1,
}

export { order_1 }